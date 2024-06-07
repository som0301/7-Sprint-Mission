const Comment = ({ comment }) => {
  return (
    <div className="Comment">
      <p>
        {comment.text} <span>{comment.user}</span>:
      </p>
    </div>
  );
};

export default Comment;
