import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";
import { getLogger } from "../../../utils/logging";

const logger = getLogger('router');

export const tagRouter = createTRPCRouter({
  add: protectedProcedure.input(z.object({ sheetId: z.string(), sellerId: z.string(), amount: z.number(), })).mutation(async ({ ctx, input }) => {
    logger.debug({ input }, 'Call to add tag to sheet');

    return await ctx.prisma.tag.create({
      data: { ...input }
    })
  })
});
