import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";
import { getLogger } from "../../../utils/logging";
import { useSession } from "next-auth/react";
import { generateSellerId } from "@app/lib/event";

const logger = getLogger('router');


export const eventRouter = createTRPCRouter({
  getActive: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.event.findFirst({ where: { isActive: true } });
  }),

  getAll: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.event.findMany();
  }),

  setActive: protectedProcedure.input(z.object({ id: z.string() })).mutation(async ({ ctx, input }) => {
    await ctx.prisma.event.update({ data: { isActive: true }, where: { id: input.id } })
    await ctx.prisma.event.updateMany({ data: { isActive: false }, where: { NOT: { id: input.id } } })
  }),

  createEvent: protectedProcedure.input(z.object({ startsAt: z.date(), endsAt: z.date(), maxParticipants: z.number().min(1), signupStartsAt: z.date(), signupEndsAt: z.date() })).mutation(async ({ ctx, input }) => {
    const event = await ctx.prisma.event.create({
      data: {
        startsAt: input.startsAt,
        endsAt: input.endsAt,
        signupStartsAt: input.signupStartsAt,
        signupEndsAt: input.signupEndsAt,
        isActive: false
      }
    })

    for (let i = 0; i < input.maxParticipants; i++) {
      await ctx.prisma.seat.create({ data: { sellerTagName: generateSellerId(i), event: { connect: { id: event.id } } } })
    }
  }),

  signUp: protectedProcedure.mutation(async ({ ctx }) => {
    const user = ctx.session.user;
    const activeEvent = await ctx.prisma.event.findFirst({ where: { isActive: true } });

    if (!activeEvent) {
      throw new Error('No active event available.');
    }

    const seat = await ctx.prisma.seat.findFirst({ where: { event: activeEvent, claimedBy: user } })

    if (seat) {
      logger.info('User has already claimed a seat. Returning.')
      return
    }

    const availableSeat = await ctx.prisma.seat.findFirst({
      where: { event: activeEvent, claimedBy: null }
    })

    if (!availableSeat) {
      throw new Error('All seats booked.');
    }

    const seats = await ctx.prisma.seat.updateMany({
      data: {
        userId: user.id,
        version: { increment: 1 },
      },
      where: {
        id: availableSeat.id,
        version: availableSeat.version  // Only claim if not updated since reading from database.
      }
    })

    if (seats.count === 0) {
      throw new Error('Seat already booked.')
    }
  })
});
