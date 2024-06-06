import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getDetailProduct, getProductComments } from '/src/api/api';
import { StyledButton } from '/src/components/common/Button';
import DetailProduct from '/src/components/DetailProduct';
import DetailProductComments from '/src/components/DetailProductComments';
import { Input } from '/src/components/Input';
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

  const [isCommentFill, setIsCommentFill] = useState(false);
  const [writeComment, setWriteComment] = useState('');

  const navigate = useNavigate();

  const handleMoveLink = () => {
    navigate('/items');
  };

  const handleWriteComment = (e) => {
    const { value } = e.target;
    setWriteComment(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(writeComment);
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

  useEffect(() => {
    let isCheck = true;
    isCheck = isCheck && writeComment !== '';
    setIsCommentFill(!isCheck);
  }, [writeComment]);

  return (
    <>
      <Helmet>
        <title>상품 상세 페이지</title>
      </Helmet>

      <StyledMain>
        <DetailProduct product={detailProduct} />

        <CommentForm>
          <Input
            type='textarea'
            onChange={handleWriteComment}
            placeholder='개인정보를 공유 및 요청하거나 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.'
          >
            문의하기
          </Input>
          <FlexWrapper $RIGHT>
            <StyledButton
              size='small'
              disabled={isCommentFill}
              onClick={handleSubmit}
            >
              등록
            </StyledButton>
          </FlexWrapper>
        </CommentForm>

        <FlexWrapper $col $gap='24' className='comment-wrapper'>
          <DetailProductComments comments={comments} />
        </FlexWrapper>
        <FlexWrapper className='button-wrapper' $center>
          <StyledButton className='back' size='medium' onClick={handleMoveLink}>
            목록으로 돌아가기
            <img src={iconBack} alt='뒤로가기' />
          </StyledButton>
        </FlexWrapper>
      </StyledMain>
    </>
  );
}

export default ItemDetailPage;
