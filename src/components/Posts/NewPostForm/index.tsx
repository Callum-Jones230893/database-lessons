// "use client"

// import { useForm } from "react-hook-form"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { Login } from "../../../../actions/login-action";
// import { loginSchema } from "../../../../actions/schemas";
// import ErrorMessage from "@/components/ErrorMessage";
// import { useMutation } from "@tanstack/react-query";


// const NewPostForm = () => {

//   const { register, handleSubmit, formState: {errors} } = useForm({
//     resolver: zodResolver(loginSchema)
//   })

//   const { mutate, error } = useMutation({
//     mutationFn: Login,
//   })
//   console.log("mutation error", error)

//   return (
//     <div>
//       <form onSubmit={handleSubmit((values) => mutate(values))} className="flex flex-col w-md m-auto p-10 border border-sushi rounded-2xl mb-4">
//         <label htmlFor="Title">Enter your email</label>
//         <input {...register("title")} placeholder="Title..." className="input" />
//         {errors.title && <ErrorMessage error={errors.title.message!}/>}

//         <label htmlFor="content">Enter a password</label>
//         <input {...register("content")} placeholder="Content..." className="input" />
//         {errors.content && <ErrorMessage error={errors.content.message!} />}

//         <button className="button cursor-pointer">Login</button>
//         {error && <p>{error.message}</p>}
//       </form>
//     </div>
//   )
// }

// export default NewPostForm