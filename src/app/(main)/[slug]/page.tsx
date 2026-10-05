import PostWrapper from "@/components/Posts/PostWrapper";
import { getSinglePost } from "@/lib/supabase/queries";
import { createClient } from "@/lib/supabase/serverClient";
import DeleteButton from "./DeleteButton";
import Link from "next/link"

const PostPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params

  const supabase = await createClient()
  const { data: {user} } = await supabase.auth.getUser()

  const { data, error } = await getSinglePost(slug)
  const isAuthor: boolean = user && data && user.id === data.author.id ? true : false

  return (
    <div className="flex flex-col w-8/10 border border-sushi p-4 mb-4 rounded-2xl mx-auto my-[5%] items-center gap-10">
      <PostWrapper posts={data} />
      {isAuthor && 
        <div className="flex gap-10">
          <DeleteButton id={data!.id} />
          <Link href={`/${slug}/edit`} className="button cursor-pointer">Edit Post</Link>
        </div>
      }
    </div>
  )
}

export default PostPage
