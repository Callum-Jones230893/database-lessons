"use server"

import { createClient } from "@/lib/supabase/serverClient"
import { redirect } from "next/navigation"
import { createPostSchema } from "./schemas";
import z from "zod";
import { slugify } from "@/lib/supabase/slugify";

export const CreatePost = async (postData: z.infer<typeof createPostSchema>) => { 
  const parsedData = createPostSchema.parse(postData)
  const supabase = await createClient()
  const { data: {user} } = await supabase.auth.getUser()

  if(!user) {
    throw new Error("Please login before posting")
  }

  const slug = slugify(parsedData.title)

  await supabase
  .from("post")
  .insert({
    ...parsedData,
    slug: slug,
    author: user.id,
    deleted: false
  })

  redirect(`/${slug}`)
}