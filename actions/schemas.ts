import {optional, z} from "zod"

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(6, "Your password must be a minimum of six characters long.")
})

export const signUpSchema = z.object({
  username: z.string().min(6, "Your username must be a minimum of six characters long"),
  email: z.email(),
  password: z.string().min(6, "Your password must be a minimum of six characters long."),
})

export const createPostSchema = z.object({
  title: z.string().min(6),
  content: z.string().optional()
})

export const createCommentSchema = z.object({
  content: z.string()
})
