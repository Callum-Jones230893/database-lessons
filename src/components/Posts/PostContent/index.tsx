import { FullPostType } from "@/lib/supabase/queries"
import { useQuery } from "@tanstack/react-query";

type PostContentProps = {
  posts: FullPostType | null
}

const PostContent = async ({ posts }: PostContentProps) => {  
  return (
    <div>
      {posts && posts.image && 
        <img height={200} width={200} src={posts.image} alt={posts.title} />
      }
      {/* <p>{posts.content}</p> */}
    </div>
  )
}

export default PostContent