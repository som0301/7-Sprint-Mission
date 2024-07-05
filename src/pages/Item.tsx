import { useEffect, useState } from 'react';
import { getProductComments, getProductDetail } from '../api';
import { useParams, Link } from 'react-router-dom';
import styles from '../styles/Item.module.scss';
import ProductDetail from '../components/ProductDetail';
import CommentList from '../components/CommentList';
import Button from '../components/Button';
import turnBackImg from '../assets/icons/ic_turn_back.svg';
import { ChangeEvent, MouseEvent } from 'react';
import { Comment } from '../types/comment';

interface Item {
  name: string;
  description: string;
  price: string;
  tags: string[];
  images: string[];
  favoriteCount: string;
}

function Item() {
  const params = useParams();
  const [comments, setComments] = useState<Comment[]>([]);
  const [inputComment, setInputComment] = useState('');
  const [item, setItem] = useState<Item>({
    name: '',
    description: '',
    price: '',
    tags: [],
    images: [],
    favoriteCount: '',
  });
  const handleLoadItem = async (itemId: number) => {
    setItem(await getProductDetail(itemId));
  };

  const handleLoadComments = async (itemId: number) => {
    const { list } = await getProductComments(itemId);
    setComments(list);
  };

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputComment(e.target.value);
  };
  useEffect(() => {
    handleLoadItem(Number(params.itemId));
    handleLoadComments(Number(params.itemId));
  }, []);

  return (
    <div className={styles['item']}>
      <div className={styles['item-container']}>
        <ProductDetail product={item} />
      </div>
      <div className={styles['register-comment']}>
        <label htmlFor='comment-textarea'>문의하기</label>
        <textarea
          id='comment-textarea'
          name='comment-textarea'
          value={inputComment}
          onChange={handleInputChange}
          placeholder='개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.'
        />
        <button disabled={!inputComment}>등록</button>
      </div>

      <div className={styles['comment-container']}>
        <CommentList comments={comments} />
      </div>
      <Link to='/items'>
        <Button className={styles['index-btn']}>
          <p>목록으로 돌아가기</p>
          <img src={turnBackImg} alt='되돌아가기 이미지' />
        </Button>
      </Link>
    </div>
  );
}

export default Item;
