import { useState } from 'react';
import styled from 'styled-components';
import { useResponsiveApi } from '/src/Responsive';
import Favorite from '/src/components/Favorite';
import { StyledProductTag } from '/src/components/Input';
import { FlexWrapper, Text } from '/src/components/common/CommonComponents';
import Kebab from '/src/components/Kebab';
import '/src/styles/Color.css';

const DetailItemImage = styled.img`
  width: ${({ $isDesktop, $isTablet }) =>
    $isDesktop ? '486px' : $isTablet ? '340px' : '100%'};
  height: ${({ $isDesktop, $isTablet }) =>
    $isDesktop ? '486px' : $isTablet ? '340px' : '100%'};
  border-radius: 16px;
`;

function DetailProduct({ product }) {
  const { name, description, price, images, tags, favoriteCount, isFavorite } =
    product;
  const { isDesktop, isTablet, isMobile } = useResponsiveApi();

  const [isKebab, setIsKebab] = useState(false);

  const handleDisplay = () => {
    setIsKebab((prev) => !prev);
  };

  return (
    <FlexWrapper className='detail' $gap='24' $isMobile={isMobile}>
      <DetailItemImage
        src={images}
        alt='product'
        $isDesktop={isDesktop}
        $isTablet={isTablet}
      />
      <FlexWrapper $col className='detail-content'>
        <FlexWrapper $col $gap='16'>
          <FlexWrapper $col $gap='16' className='detail-product-title'>
            <Text $SIZE='24' $WEIGHT='600' $COLOR='800'>
              {name}
            </Text>
            <Text $SIZE='40' $WEIGHT='600' $COLOR='800'>
              {price ? price.toLocaleString() : '0'}원
            </Text>
            <Kebab />
          </FlexWrapper>

          <FlexWrapper $col $gap='23'>
            <FlexWrapper $col $gap='8'>
              <Text $SIZE='14' $WEIGHT='500' $COLOR='600'>
                상품 소개
              </Text>
              <Text
                $SIZE='16'
                $WEIGHT='400'
                $COLOR='800'
                className='product-description'
              >
                {description}
              </Text>
            </FlexWrapper>
            <FlexWrapper $col $gap='8'>
              <Text $SIZE='14' $WEIGHT='500' $COLOR='600'>
                상품 태그
              </Text>
              <FlexWrapper $gap='8' $wrap>
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
