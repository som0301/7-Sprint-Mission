import { Comment } from '../../../../interfaces/comment.interface'

function CommentItem({ comment }: { comment: Comment }) {
  const dateString = comment.createdAt.split('T')[0]

  return (
    <div className="comment">
      <div className="comment-content">{comment.content}</div>
      <div className="comment-writer">
        <img
          src={comment.writer.image}
          alt={comment.writer.nickname}
          className="comment-writer-avatar"
        />
        <div>
          <div className="comment-writer-nickname">
            {comment.writer.nickname}
          </div>
          <div className="comment-writer-createdAt">{dateString}</div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default CommentItem
