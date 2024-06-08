import { Link, useParams } from 'react-router-dom';
import { getItemByID, getCommentsByID } from '../api';
import { useEffect, useState, useCallback } from 'react';
import useAsync from '../hooks/useAsync';
import ProductDescription from '../components/ProductDescription.jsx';
import ProductReviews from '../components/ProductReviews.jsx';
import RoundButton from '../components/RoundButton';

const INITIAL_PRODUCT = {
  name: '',
  description: '',
  price: '',
  tags: [],
  images: [],
  favoriteCount: 0,
};
const INITIAL_COMMENTS = {};

export default function ItemPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(INITIAL_PRODUCT);
  const [comments, setComments] = useState(INITIAL_COMMENTS);
  const [isItemLoading, itemLoadingError, getItemAsync] = useAsync(getItemByID);
  const [isCommentsLoading, commentsLoadingError, getCommentsAsync] =
    useAsync(getCommentsByID);

  const getValidItem = useCallback(
    async (productId) => {
      const result = await getItemAsync(productId);
      if (!result) return;
      return result;
    },
    [getItemAsync]
  );

  const loadItem = useCallback(
    async (options) => {
      const nextItems = await getValidItem(options);
      setProduct((prevItems) => nextItems);
    },
    [getValidItem]
  );

  // const getValidComments = useCallback(
  //   async (productId) => {
  //     const result = await getCommentsAsync(productId);
  //     if (!result) return;
  //     return result;
  //   },
  //   [getCommentsAsync]
  // );

  // const loadcomments = useCallback(
  //   async (options) => {
  //     const nextItems = await getValidComments(options);
  //     setProduct((prevItems) => nextItems);
  //   },
  //   [getValidComments]
  // );

  useEffect(() => {
    loadItem(productId);
    // loadcomments(productId);
  }, [productId, loadItem]);

  return (
    <div className="p-4">
      <ProductDescription product={product} />
      <ProductReviews comments={comments} />
      <Link to="/items">
        <RoundButton className="w-[240px]">목록으로 돌아가기</RoundButton>
      </Link>
    </div>
  );
}
