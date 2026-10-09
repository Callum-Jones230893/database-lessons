"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { Dispatch, SetStateAction } from "react"
import { CreateComment } from "../../../actions/create-comment-action"
import { commentSchema } from "../../../actions/schemas"

const NewCommentForm = ({ setNewComment }: {setNewComment: Dispatch<SetStateAction<boolean>>}) => {

  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: zodResolver(commentSchema)
  })

  const { mutate, error } = useMutation({
    mutationFn: CreateComment,
  })

  const handleClick = () => {
    setNewComment(false)
  }

  return (
    <div className="">
      <form onSubmit={handleSubmit((values) => mutate(values))} className="flex flex-col items-center gap-10 w-md m-auto p-10 border-2 shadow-lg shadow-sushi border-sushi rounded-2xl mb-4">
        <textarea {...register("content")} placeholder="Content..." className="border border-sushi rounded-md p-2 w-9/10"></textarea>
        {errors.content && <p>{errors.content.message}</p>}
        
        <div className="flex justify-between w-9/10">
          <button className="button cursor-pointer">Submit</button>
          {error && <p>{error.message}</p>}

          <div className="button cursor-pointer" onClick={handleClick}>Cancel</div>
        </div>
      </form>
    </div>
  )
}

export default NewCommentForm