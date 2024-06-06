import { Link, useParams } from 'react-router-dom';
import { getItemByID, getCommentsByID } from '../api';
import useAsync from '../hooks/useAsync';
import ProductDescription from '../components/ProductDescription.jsx';
import ProductReviews from '../components/ProductReviews.jsx';
import RoundButton from '../components/RoundButton';
import { useEffect, useState } from 'react';

const INITIAL_PRODUCT = {};
const INITIAL_COMMENTS = {};

export default function ItemPage() {
  const [product, setProduct] = useState(INITIAL_PRODUCT);
  const [comments, setComments] = useState(INITIAL_COMMENTS);
  const { productId } = useParams();
  const [isItemLoading, itemLoadingError, getItemsAsync] =
    useAsync(getItemByID);
  const [isCommentsLoading, commentsLoadingError, getCommentsAsync] =
    useAsync(getCommentsByID);

  useEffect(() => {
    const nextProduct = getItemsAsync(productId);
    const nextComments = getCommentsAsync(productId);
    setProduct(nextProduct);
    setComments(nextComments);
  }, [productId, getItemsAsync, getCommentsAsync]);

  return (
    <div>
      <ProductDescription product={product} />
      <ProductReviews comments={comments} />
      <Link>
        <RoundButton className="w-[240px]">목록으로 돌아가기</RoundButton>
      </Link>
    </div>
  );
}
