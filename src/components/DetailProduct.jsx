import styled from 'styled-components';
import { useResponsiveApi } from '../Responsive';
import Favorite from './Favorite';
import { StyledProductTag } from './Input';
import '/src/styles/Color.css';

const DetailItemContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const DetailItemInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => $gap}px;
  justify-content: ${({ $between }) => ($between ? `space-between` : '')};
  align-items: ${({ $between }) => ($between ? `baseline` : '')};
`;

const DetailItemImage = styled.img`
  width: ${({ $isDesktop }) => ($isDesktop ? '486' : '340')}px;
  height: ${({ $isDesktop }) => ($isDesktop ? '486' : '340')}px;
  border-radius: 16px;
`;

const SubTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: var(--gray-600);
`;

const Title = styled.h2`
  font-size: ${({ type }) => (type == 'name' ? `24` : `40`)}px;
  font-weight: 600;
  color: var(--gray-800);
`;

function DetailProduct({ product }) {
  const { name, description, price, images, tags, favoriteCount, isFavorite } =
    product;
  const { isDesktop } = useResponsiveApi();
  return (
    <DetailItemContainer>
      <DetailItemImage src={images} alt='product' $isDesktop={isDesktop} />
      <DetailItemInnerContainer $between>
        <DetailItemInnerContainer $gap='16'>
          <Title type='name'>{name}</Title>
          <Title type='price'>{price}원</Title>
          <hr />
          <DetailItemInnerContainer $gap='23'>
            <DetailItemInnerContainer $gap='8'>
              <SubTitle>상품 소개</SubTitle>
              <p>{description}</p>
            </DetailItemInnerContainer>
            <DetailItemInnerContainer $gap='8'>
              <SubTitle>상품 태그</SubTitle>
              <div>
                {tags &&
                  tags.map((tag, index) => (
                    <StyledProductTag key={index}>#{tag}</StyledProductTag>
                  ))}
              </div>
            </DetailItemInnerContainer>
          </DetailItemInnerContainer>
        </DetailItemInnerContainer>

        <Favorite>{favoriteCount}</Favorite>
      </DetailItemInnerContainer>
    </DetailItemContainer>
  );
}

export default DetailProduct;
