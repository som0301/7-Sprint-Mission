import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getDetailProduct, getProductComments } from '../components/api/api';
import Button, { StyledButton } from '../components/common/Button';
import DetailProduct from '../components/DetailProduct';
import DetailProductComments from '../components/DetailProductComments';
import { Input } from '../components/Input';
import {
  FlexWrapper,
  StyledMain,
  CommentForm,
} from '/src/components/common/CommonComponents';
import iconBack from '/src/assets/ic_back.svg';

function ItemDetailPage() {
  const { productId } = useParams();
  const [detailProduct, setDetailProduct] = useState({});
  const [comments, setComments] = useState([]);

  const navigate = useNavigate();

  const handleMoveLink = () => {
    navigate('/items');
  };

  const handleDetailProductLoad = async (productId) => {
    const product = await getDetailProduct(productId);
    setDetailProduct(product);
  };

  const handleCommentsLoad = async (productId) => {
    const { list } = await getProductComments(productId);
    setComments(list);
  };

  useEffect(() => {
    handleDetailProductLoad(productId);
  }, []);

  useEffect(() => {
    handleCommentsLoad(productId);
  }, []);

  return (
    <StyledMain>
      <DetailProduct product={detailProduct} />

      <CommentForm>
        <Input
          type='textarea'
          placeholder='개인정보를 공유 및 요청하거나 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.'
        >
          문의하기
        </Input>
        <FlexWrapper $RIGHT>
          <StyledButton size='small' disabled>
            등록
          </StyledButton>
        </FlexWrapper>
      </CommentForm>

      <DetailProductComments comments={comments} />
      <FlexWrapper className='button-wrapper' $center>
        <StyledButton size='medium' onClick={handleMoveLink}>
          목록으로 돌아가기
          <img src={iconBack} alt='뒤로가기' />
        </StyledButton>
      </FlexWrapper>
    </StyledMain>
  );
}

export default ItemDetailPage;
