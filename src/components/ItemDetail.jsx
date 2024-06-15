import { useEffect, useState, useCallback } from "react";
import { getItemDetail, getComments } from "../api";
import { useParams } from "react-router-dom";
import styles from "./ItemDetail.module.css";

const itinialItem = {
  name: "",
  description: "",
  price: "",
  tags: [],
  images: [],
  favoriteCount: 0,
};

function ItemDetail() {
  const { productId } = useParams();
  const [item, setItem] = useState(itinialItem);
  const [comments, setComments] = useState([]);
  const [addComment, setAddComment] = useState("");

  const loadItem = useCallback(async () => {
    const newItem = await getItemDetail(productId);
    setItem(newItem);
  }, [productId]);

  const loadComments = useCallback(async () => {
    const newComments = await getComments(productId);
    if (Array.isArray(newComments)) {
      setComments(newComments);
    } else {
      setComments([]);
    }
  }, [productId]);

  const pageBack = () => {
    window.location.href = "/items";
  };

  useEffect(() => {
    loadItem(productId);
  }, [productId, loadItem]);

  useEffect(() => {
    loadComments(productId);
  }, [productId, loadComments]);

  const handleAddCommentSubmit = async (e) => {
    e.preventDefault();
    if (addComment === "") {
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
    loadComments();
  };

  const handleAddCommentChange = (e) => {
    setAddComment(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {item.images.length > 0 && (
          <img src={item.images[0]} alt={item.name} className={styles.image} />
        )}
        <div className={styles.details}>
          <div className={styles.title}>{item.name}</div>
          <div className={styles.price}>{item.price.toLocaleString()}원</div>
          <div className={styles.description}>{item.description}</div>
          <div className={styles.tags}>
            {item.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                #{tag}
              </span>
            ))}
          </div>
          <div className={styles.heart}>♡ {item.favoriteCount}</div>
        </div>
      </div>
      <div className={styles.comments}>
        <div className={styles["comment-add"]}>
          <h2>문의하기</h2>
          <textarea
            type='text'
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
                <div className={styles["comment-content"]}>
                  {comment.content}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>아직 문의가 없습니다.</p>
        )}
      </div>
      <button className={styles["back-button"]} onClick={pageBack}>
        목록으로 돌아가기
      </button>
    </div>
  );
}

export default ItemDetail;
