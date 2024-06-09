import { useEffect, useState, useCallback } from "react";
import { getItemDetail, getComments } from "../api";
import { useParams } from "react-router-dom";

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

  useEffect(() => {
    loadItem(productId);
  }, [productId, loadItem]);

  useEffect(() => {
    loadComments(productId);
  }, [productId, loadComments]);

  return (
    <div>
      {item.images.length > 0 && <img src={item.images[0]} alt={item.name} />}
      <div>{item.name}</div>
      <div>{item.description}</div>
      <div>{item.price}</div>
      <div>{item.favoriteCount}</div>
      <div>
        {item.tags.map((tag) => (
          <span key={tag}>{tag} </span>
        ))}
      </div>
      <div>
        <h2>댓글 목록</h2>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id}>
              <div>{comment.writer?.userId}</div>
              <div>{comment.content}</div>
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
