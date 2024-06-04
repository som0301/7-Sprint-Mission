import { useEffect, useState } from 'react';
import { getProductComments, getProductDetail } from '../api';
import { useParams } from 'react-router-dom';
import styles from '../styles/Item.module.scss';

function Item() {
  const params = useParams();
  const [comments, setComments] = useState([]);
  const [item, setItem] = useState({
    name: '',
    description: '',
    price: '',
    tags: [],
    images: [],
    favoriteCount: '',
  });
  comments;
  const handleLoadItem = async (itemId) => {
    setItem(await getProductDetail(itemId));
  };

  const handleLoadComments = async (itemId) => {
    const { list } = await getProductComments(itemId);
    setComments(list);
  };

  useEffect(() => {
    handleLoadItem(params.itemId);
    handleLoadComments(params.itemId);
  }, [params.itemId, comments]);

  return (
    <div className={styles['item']}>
      <div className={styles['item-container']}>
        <img
          src={item.images[0]}
          alt='상품 이미지'
          className={styles['item-img']}
        />
        <div className={styles['item-info']}>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <p>{item.description}</p>
          <p>
            태그:
            {item.tags?.map((tag) => {
              return <span key={tag}>{tag},</span>;
            })}
          </p>

          <p>{item.favoriteCount}</p>
        </div>
      </div>
      <div className={styles['comment-container']}>
        {comments?.map((item) => {
          return <p key={item.id}>{`댓글ID:${item.id} ` + item['content']}</p>;
        })}
      </div>
    </div>
  );
}

export default Item;
