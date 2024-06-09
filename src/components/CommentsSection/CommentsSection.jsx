import React, { useEffect, useState } from "react";
import "./CommentsSection.css";
import { useParams } from "react-router-dom";
import { getComments } from "../../api";
import { noCommentPandaImage } from "../../assets/images";

const Comment = ({ comment }) => {
  const timeAgo = (date) => {
    const now = new Date();
    const secondsPast = (now.getTime() - new Date(date).getTime()) / 1000;

    if (secondsPast < 60) {
      return `${Math.floor(secondsPast)} 초 전`;
    }
    if (secondsPast < 3600) {
      return `${Math.floor(secondsPast / 60)} 분 전`;
    }
    if (secondsPast < 86400) {
      return `${Math.floor(secondsPast / 3600)} 시간 전`;
    }
    if (secondsPast < 2592000) {
      return `${Math.floor(secondsPast / 86400)} 일 전`;
    }
    if (secondsPast < 31536000) {
      return `${Math.floor(secondsPast / 2592000)} 달 전`;
    }
    return `${Math.floor(secondsPast / 31536000)} 년 전`;
  };

  const {
    content,
    updatedAt,
    writer: { nickname, image },
  } = comment;

  return content ? (
    <div className="comments-section-comment-container">
      <p className="comments-section-comment-content">{content}</p>
      <div className="comments-section-comment-profile">
        <img
          className="comments-section-comment-image"
          src={image}
          alt="댓글작성자 프로필 이미지"
        />
        <div className="comments-section-comment-info">
          <span className="comments-section-comment-nickname">{nickname}</span>
          <span className="comments-section-comment-created-ago">
            {timeAgo(updatedAt)}
          </span>
        </div>
      </div>
      <hr />
    </div>
  ) : (
    <div>없다</div>
  );
};

const CommentsSection = () => {
  const [comments, setComments] = useState([]);
  const { productId } = useParams();
  const handleLoad = async () => {
    const commentData = await getComments(productId);
    setComments(commentData.list);
  };
  useEffect(() => {
    handleLoad();
  }, [productId]);
  return (
    <div className="comments-section-container">
      {comments.length !== 0 ? (
        comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))
      ) : (
        <div className="comments-section-container-nocomment">
          <img
            src={noCommentPandaImage}
            alt="문의가 없다는 표시의 판다이미지"
            className="comments-section-container-nocomment-image"
          />
          <p className="comments-section-container-nocomment-text">
            아직 문의가 없습니다.
          </p>
        </div>
      )}
    </div>
  );
};

export default CommentsSection;
