import { z } from "zod";

const CreateUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(4),
});

console.log(CreateUserSchema.safeParse({
  name: "Alan",
  email: "alanreisanjo@gmail.com"
}))
