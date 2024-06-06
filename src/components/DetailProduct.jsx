import styled from 'styled-components';
import { useResponsiveApi } from '../Responsive';
import Favorite from './Favorite';
import { StyledProductTag } from './Input';
import '/src/styles/Color.css';
import { FlexWrapper, Text } from './common/CommonComponents';
import iconKebab from '/src/assets/ic_kebab.svg';
import { Dropdown } from './Dropdown';
import { useState } from 'react';

const DetailItemImage = styled.img`
  width: ${({ $isDesktop }) => ($isDesktop ? '486' : '340')}px;
  height: ${({ $isDesktop }) => ($isDesktop ? '486' : '340')}px;
  border-radius: 16px;
`;

function DetailProduct({ product }) {
  const { name, description, price, images, tags, favoriteCount, isFavorite } =
    product;
  const { isDesktop } = useResponsiveApi();

  const [isKebab, setIsKebab] = useState(false);

  const handleDisplay = () => {
    setIsKebab((prev) => !prev);
  };

  return (
    <FlexWrapper className='detail' $gap='24'>
      <DetailItemImage src={images} alt='product' $isDesktop={isDesktop} />
      <FlexWrapper $col className='detail-content'>
        <FlexWrapper $col $gap='16'>
          <FlexWrapper $col $gap='16' className='detail-product-title'>
            <Text $SIZE='24' $WEIGHT='600' $COLOR='800'>
              {name}
            </Text>
            <Text $SIZE='40' $WEIGHT='600' $COLOR='800'>
              {price}원
            </Text>
            <img src={iconKebab} alt='kebab' onClick={handleDisplay} />
            {isKebab && (
              <Dropdown first='수정' second='삭제' className='kebab-drowdown' />
            )}
          </FlexWrapper>

          <FlexWrapper $col $gap='23'>
            <FlexWrapper $col $gap='8'>
              <Text $SIZE='14' $WEIGHT='500' $COLOR='600'>
                상품 소개
              </Text>
              <p>{description}</p>
            </FlexWrapper>
            <FlexWrapper $col $gap='8'>
              <Text $SIZE='14' $WEIGHT='500' $COLOR='600'>
                상품 태그
              </Text>
              <FlexWrapper $gap='8'>
                {tags &&
                  tags.map((tag, index) => (
                    <StyledProductTag key={index}>#{tag}</StyledProductTag>
                  ))}
              </FlexWrapper>
            </FlexWrapper>
          </FlexWrapper>
        </FlexWrapper>

        <Favorite>{favoriteCount}</Favorite>
      </FlexWrapper>
    </FlexWrapper>
  );
}

export default DetailProduct;
