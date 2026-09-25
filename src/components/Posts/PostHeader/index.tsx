import { SinglePostType } from "@/lib/supabase/queries"


type PostHeaderProps = {
  posts: SinglePostType
}

const PostHeader = ({ posts }: PostHeaderProps) => {
  return (
    <div>
      <h2>{posts.title}</h2>
      <p>{posts.author.username}</p>
    </div>
  )
}

export default PostHeader