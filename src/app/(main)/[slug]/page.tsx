import PostWrapper from "@/components/Posts/PostWrapper";
import Comment from "@/components/Comment";
import { getComment, getFullPost } from "@/lib/supabase/queries";
import { createClient } from "@/lib/supabase/serverClient";
import DeleteButton from "./DeleteButton";
import Link from "next/link"
import NewCommentWrapper from "@/components/NewCommentWrapper";

const PostPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params

  const supabase = await createClient()
  const { data: {user} } = await supabase.auth.getUser()

  const { data, error } = await getFullPost(slug)

  const { data: comment } = await getComment(data!.id)

  const isAuthor: boolean = user && data && user.id === data.author.id ? true : false

  return (
    <>
      <div className={`flex flex-col w-8/10 border-2 border-sushi my-[5%] p-4 rounded-2xl mx-auto items-center gap-10`}>
        <PostWrapper posts={data} />
        {isAuthor && 
          <div className="flex gap-10">
            <DeleteButton id={data!.id} />
            <Link href={`/${slug}/edit`} className="button cursor-pointer">Edit Post</Link>
          </div>
        }
      {user && data && <NewCommentWrapper />}
      {/* create as popup */}
      </div>
      <Comment comments={comment} isAuthor={isAuthor} userId={user!.id} postId={data!.id} />
    </>
  )
}

export default PostPage
