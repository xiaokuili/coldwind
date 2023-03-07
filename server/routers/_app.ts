import { z } from "zod";
import { procedure, router } from "../trpc";

interface Factory {
  id: string;
  materials: Material[];
  computers: Computer[];
  produce: Produce;
}

interface Produce {
  id: string;
  name: string;
}


enum Role {
  farmer = "farmer",
  worker = "worker",
  trader = "trader",
}

interface User {
  id: string;
  role: Role;
  name: string;
}

interface Material {
  id: string;
  name: string;
  description: string;
  metadata: Map<string, string>;
  acl: Map<string, boolean>; // ture can be view, but false can't be view
}

interface Pow {
  id: string;
  cpu: number;
  memory: number;
  storage: number;
  bandwidth: number;

  useMaterial: Map<Material, number>;
}

interface Computer {
  id: string;
  name: string;
  description: string;
  pow: Pow;
}





export const appRouter = router({
  hello: procedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query(({ input }) => {
      return {
        greeting: `hello ${input.text}`,
      };
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
