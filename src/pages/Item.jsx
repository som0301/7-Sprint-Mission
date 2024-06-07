import { useEffect, useState } from 'react';
import { getProductComments, getProductDetail } from '../api';
import { useParams } from 'react-router-dom';
import styles from '../styles/Item.module.scss';
import ProductDetail from '../components/ProductDetail';
import CommentList from '../components/CommentList';

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
        <ProductDetail product={item} />
      </div>
      <div className={styles['comment-container']}>
        <CommentList comments={comments} />
      </div>
    </div>
  );
}

export default Item;
