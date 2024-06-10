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
            <div key={comment.id} className='comment'>
              <img
                src={comment.writer.image}
                alt={comment.writer.nickname}
                className='comment-profile-img'
              />
              <div className='comment-details'>
                <div className='comment-author'>{comment.writer.nickname}</div>
                <div className='comment-date'>
                  {new Date(comment.createdAt).toLocaleDateString()}
                </div>
                <div className='comment-content'>{comment.content}</div>
              </div>
            </div>
          ))
        ) : (
          <p>아직 문의가 없습니다.</p>
        )}
      </div>
      <button onClick={pageBack} className='back-home'>
        목록으로 돌아가기
      </button>
    </div>
  );
}

export default ItemDetail;
