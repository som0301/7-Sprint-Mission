import styles from '../styles/CommentList.module.scss';
styles;

function CommentListItem({ comment }) {
  return <p>{`댓글: ` + comment['content']}</p>;
}

function CommentList({ comments }) {
  return (
    <div className='comment-list'>
      {comments?.map((comment) => {
        return <CommentListItem key={comment.id} comment={comment} />;
      })}
    </div>
  );
}

export default CommentList;
