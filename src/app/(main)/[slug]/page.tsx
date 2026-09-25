import HomePosts from "@/components/HomePosts";
import PostWrapper from "@/components/Posts/PostWrapper";
import { getSinglePost } from "@/lib/supabase/queries";

const PostPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params
  const { data, error } = await getSinglePost(slug)

  return (
    <div>
      {/* {data && 
        <PostWrapper posts={data} />
        <HomePosts posts={data} />
      } */}
    </div>
  )
}

export default PostPage
