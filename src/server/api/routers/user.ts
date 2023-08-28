import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";
import { getLogger } from "../../../utils/logging";

const logger = getLogger('router');

export const userRouter = createTRPCRouter({
  info: protectedProcedure.query(async ({ ctx }) => {
    logger.debug('User info')
    return ctx.prisma.user.findUnique({
      where: { id: ctx.session.user.id },
    })
  })
});
