import styled from 'styled-components';

import HeartIcon from 'public/images/ic_heart.svg';

import { useFetchItems } from 'features/item-list/hook';
import { ItemToolbar } from 'features/item-list/ui';

import { useDeviceType } from 'shared/store';

export function ItemList({ type, page, pageSize, order, setOrder, search }) {
  const { items, isLoading, isError } = useFetchItems({
    page,
    pageSize,
    order,
    search,
  });
  const deviceType = useDeviceType();

  const getItemType = (type) => {
    if (type === 'best') return '베스트 상품';

    return deviceType === 'desktop' ? '전체 상품' : '판매 중인 상품';
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {isError}</p>;
  return (
    <ItemContainer $deviceType={deviceType}>
      <ItemWrapper $deviceType={deviceType}>
        <ItemType $type={type} $deviceType={deviceType}>
          {getItemType(type)}
        </ItemType>
        {type === 'all' && (
          <ItemToolbar deviceType={deviceType} order={order} setOrder={setOrder} />
        )}
      </ItemWrapper>
      <ItemInfo $type={type} $deviceType={deviceType}>
        {items &&
          items.map((item) => (
            <ItemCard key={item.id}>
              <ItemImage $type={type} $deviceType={deviceType} src={item.images} alt={item.name} />
              <ItemName>{item.name}</ItemName>
              <ItemPrice>{item.price.toLocaleString()}원</ItemPrice>
              <FavoriteWrapper>
                <FavoriteIcon src={HeartIcon} />
                <FavoriteCount> {item.favoriteCount}</FavoriteCount>
              </FavoriteWrapper>
            </ItemCard>
          ))}
      </ItemInfo>
    </ItemContainer>
  );
}

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  max-width: 1200px;
  padding: ${({ $deviceType }) => {
    if ($deviceType === 'tablet') return '0 24px';
    if ($deviceType === 'mobile') return '0 16px';
  }};
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ItemType = styled.h2`
  font-size: 20px;
  line-height: 140%;
  display: ${({ $type, $deviceType }) => {
    if ($type === 'all') {
      if ($deviceType === 'mobile') return 'none';
    }
  }};
`;

const ItemInfo = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  row-gap: ${({ $type, $deviceType }) => {
    if ($type === 'all') {
      if ($deviceType === 'mobile') return '32px';
    }
    return '40px';
  }};
`;

const ItemCard = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;

const ItemImage = styled.img`
  width: ${({ $type, $deviceType }) => {
    if ($type === 'all') {
      if ($deviceType === 'mobile') {
        return '168px';
      }
      return '221px';
    }
    if ($type === 'best') {
      if ($deviceType === 'desktop') return '282px';
      if ($deviceType === 'tablet') return '336px';
      if ($deviceType === 'mobile') return '343px';
    }
  }};
  height: ${({ $type, $deviceType }) => {
    if ($type === 'all') {
      if ($deviceType === 'mobile') {
        return '168px';
      }
      return '221px';
    }
    if ($type === 'best') {
      if ($deviceType === 'desktop') return '282px';
      if ($deviceType === 'tablet') return '336px';
      if ($deviceType === 'mobile') return '343px';
    }
  }};
  border-radius: 16px;
  box-shadow: 0 8px 24px #959da533;
`;

const ItemName = styled.p`
  padding-top: 10px;
  font-size: 14px;
  line-height: 16.71px;
`;

const ItemPrice = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 19.09px;
`;

const FavoriteWrapper = styled.div`
  display: flex;
  column-gap: 4px;
`;

const FavoriteIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const FavoriteCount = styled.p`
  font-size: 12px;
  line-height: 14.32px;
  color: var(--gray600);
`;
