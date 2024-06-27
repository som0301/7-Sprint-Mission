import React, { useState } from "react";
import styles from "./CommentSection.module.css";
import { Comment } from "../../../types";

interface CommentSectionProps {
  comments: Comment[];
  productId: string;
  reloadComments: () => void;
}

const CommentSection: React.FC<CommentSectionProps> = ({
  comments,
  productId,
  reloadComments,
}) => {
  const [addComment, setAddComment] = useState<string>("");

  const handleAddCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (addComment.trim() === "") {
      alert("댓글을 입력해주세요.");
      return;
    }
    const newComment = {
      content: addComment,
    };
    await fetch(`/api/items/${productId}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    });
    setAddComment("");
    reloadComments();
  };

  const handleAddCommentChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setAddComment(e.target.value);
  };

  return (
    <div className={styles.comments}>
      <div className={styles["comment-add"]}>
        <h2>문의하기</h2>
        <textarea
          value={addComment}
          placeholder='개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.'
          onChange={handleAddCommentChange}
          className={styles["comment-input"]}
        />
        <button
          onClick={handleAddCommentSubmit}
          className={styles["comment-submit"]}
        >
          등록
        </button>
      </div>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.id} className={styles.comment}>
            <img
              src={comment.writer.image}
              alt={comment.writer.nickname}
              className={styles["comment-profile-img"]}
            />
            <div className={styles["comment-details"]}>
              <div className={styles["comment-author"]}>
                {comment.writer.nickname}
              </div>
              <div className={styles["comment-date"]}>
                {new Date(comment.createdAt).toLocaleDateString()}
              </div>
              <div className={styles["comment-content"]}>{comment.content}</div>
            </div>
          </div>
        ))
      ) : (
        <p>아직 문의가 없습니다.</p>
      )}
    </div>
  );
};

export default CommentSection;
