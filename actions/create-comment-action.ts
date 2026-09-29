"use server"

import { createClient } from "@/lib/supabase/serverClient"
import { redirect } from "next/navigation"
import { createCommentSchema } from "./schemas";
import z from "zod";

export const CreatePost = async (commentData: z.infer<typeof createCommentSchema>) => { 
  const parsedData = createCommentSchema.parse(commentData)
  const supabase = await createClient()
  const { data: {user} } = await supabase.auth.getUser()

  if(!user) {
    throw new Error("Please login before commenting")
  }

  await supabase
  .from("comment")
  .insert({
    ...parsedData,
    // add post_id (parent)
    author: user.id,
    deleted: false
  })

  redirect(`/`)
}