import { initTRPC } from "@trpc/server";

const ideas = [
  { nick: "nickname1", name: "Idea1", description: "Description1" },
  { nick: "nickname2", name: "Idea2", description: "Description2" },
  { nick: "nickname3", name: "Idea3", description: "Description3" },
  { nick: "nickname4", name: "Idea4", description: "Description4" },
];

const trpc = initTRPC.create();

export const trpcRouter = trpc.router({
  getIdeas: trpc.procedure.query(() => {
    return { ideas };
  }),
});

export type TrpcRouter = typeof trpcRouter;
