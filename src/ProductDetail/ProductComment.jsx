import React from "react";

const ProductComment = ({ comment }) => {
  
  function timeAgo(dateString) {
    const now = new Date();
    const updatedAt = new Date(dateString);
    const diffInSeconds = Math.floor((now - updatedAt) / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInSeconds < 60) {
        return '방금 전';
    } else if (diffInMinutes < 60) {
        return `${diffInMinutes}분 전`;
    } else if (diffInHours < 24) {
        return `${diffInHours}시간 전`;
    } else {
        return `${diffInDays}일 전`;
    }
}

  return (
    <div className="bottom-wrapper">
      {comment && comment.list?.length > 0 ? (
        comment.list.map((com) => (
          <div key={com.id}>
            <p className="comment-content">{com.content}</p>
            <div className="comment-wrapper-img">
            <img
              src={com.writer.image}
              alt="사용자"
              width={"40px"}
              height={"40px"}
            />
            <div className="comment-wrapper-user">
            <span className="comment-user">{com.writer.nickname}</span>
            <span className="comment-time">{timeAgo(com.updatedAt)}</span>
            </div>
            </div>
            <div className="line"></div>
          </div>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ProductComment;
