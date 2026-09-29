import { SinglePostType } from "@/lib/supabase/queries"
import PostContent from "../PostContent"
import PostHeader from "../PostHeader"

type PostWrapperProps = {
  posts: SinglePostType | null
}

const PostWrapper = ({ posts }: PostWrapperProps) => {
  return (
    <div>
      <PostHeader posts={posts} />
      <PostContent posts={posts} />
    </div>
  )
}

export default PostWrapper