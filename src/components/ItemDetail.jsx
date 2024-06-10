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
        <h2>댓글 목록</h2>
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
          <p>댓글이 없습니다.</p>
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
