import { FullPostType } from "@/lib/supabase/queries"


type PostHeaderProps = {
  posts: FullPostType | null
}

const PostHeader = ({ posts }: PostHeaderProps) => {
  return (
    <>
      {posts &&
        <div>
          <h2 className="text-2xl">{posts.title}</h2>
          <p>{posts.author.username}</p>
        </div>
      }
    </>
  )
}

export default PostHeader