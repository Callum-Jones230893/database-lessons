import { CommentType } from "@/lib/supabase/queries"

type CommentProps = {
  isAuthor: boolean
  userId: string 
  postId: string
  comments: CommentType | null
}

const Comment = ({ comments, isAuthor, userId, postId }: CommentProps) => {
  return (
    <div>
      {comments &&
        comments.map((comment) => 
          <div key={comment.id} className="flex flex-col w-8/10 border border-sushi p-4 mb-4 rounded-2xl mx-auto items-center gap-2">
            <div>{comment.content}</div>
            <div>{comment.commenter?.username}</div>
            {isAuthor || (userId === comment.commenter.id) && <div>Delete Comment {comment.id}</div>}
          </div>
        )
      }
    </div>
  )
} 

export default Comment