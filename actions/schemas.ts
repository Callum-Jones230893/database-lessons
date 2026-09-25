import {z} from "zod"

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(6, "Your password must be a minimum of six characters long.")
})

export const signUpSchema = z.object({
  username: z.string().min(6, "Your username must be a minimum of six characters long"),
  email: z.email(),
  password: z.string().min(6, "Your password must be a minimum of six characters long."),
})
