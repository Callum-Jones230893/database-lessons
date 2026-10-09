import { FullPostType } from "@/lib/supabase/queries"
import PostContent from "../PostContent"
import PostHeader from "../PostHeader"

type PostWrapperProps = {
  posts: FullPostType | null
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