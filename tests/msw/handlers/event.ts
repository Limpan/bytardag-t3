import { trpcMsw } from '../mockTRPC';

export const defaultQ = () => {
    return trpcMsw.event.createEvent.mutation((req, res, ctx) =>  {
        return res(ctx.status(200), ctx.data());
    })
}