"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CreatePost } from "../../../../actions/create-post-action"
import { createPostSchema } from "../../../../actions/schemas"
import ErrorMessage from "@/components/ErrorMessage"
import { useMutation } from "@tanstack/react-query"

const CreatePostPage = () => {
  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: zodResolver(createPostSchema)
  })

  const { mutate, error } = useMutation({
    mutationFn: CreatePost,
  })

  return (
    <div className="flex flex-col">
      <h2>
        Create a post
      </h2>
      <form onSubmit={handleSubmit((values) => mutate(values))} className="flex flex-col w-md m-auto p-10 border border-sushi rounded-2xl mb-4">
        <label htmlFor="title">Title</label>
        <input {...register("title")} placeholder="title..." className="input" />
        {errors.title && <ErrorMessage error={errors.title.message!}/>}

        <label htmlFor="content">Content</label>
        <textarea {...register("content")} className="input" />
        {errors.content && <ErrorMessage error={errors.content.message!} />}

        <button className="button cursor-pointer">Submit</button>
        {error && <p>{error.message}</p>}
      </form>
    </div>
  )
}

export default CreatePostPage