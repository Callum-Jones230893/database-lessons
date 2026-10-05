import { SinglePostType } from "@/lib/supabase/queries"


type PostHeaderProps = {
  posts: SinglePostType | null
}

const PostHeader = ({ posts }: PostHeaderProps) => {
  return (
    <>
      {posts &&
        <div>
          <h2>{posts.title}</h2>
          <p>{posts.author.username}</p>
        </div>
      }
    </>
  )
}

export default PostHeader