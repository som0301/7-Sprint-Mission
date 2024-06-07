import React from "react";

const ProductComment = ({ comment }) => {
  return (
    <div>
      {comment && comment.list?.length > 0 ? (
        comment.list.map((com) => (
          <div key={com.id}>
            <p className="comment-content">{com.content}</p>
            <img src={com.writer.image} alt="사용자" />
            <span className="comment-user">{com.writer.nickname}</span>
            <span className="comment-time"></span>
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
