import { createTRPCRouter } from "./trpc";
import { eventRouter } from "./routers/event";
import { tagRouter } from "./routers/tags";
import { userRouter } from "./routers/user"

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  event: eventRouter,
  tag: tagRouter,
  user: userRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
