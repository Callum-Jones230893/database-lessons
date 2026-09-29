import { getHomePosts, getSinglePost, HomePostType, SinglePostType } from "@/lib/supabase/queries"
import { useQuery } from "@tanstack/react-query";

type PostContentProps = {
  posts: SinglePostType | null
}

const PostContent = async ({ posts }: PostContentProps) => {  
  return (
    <div>
      {/* <p>{posts.content}</p> */}
    </div>
  )
}

export default PostContent