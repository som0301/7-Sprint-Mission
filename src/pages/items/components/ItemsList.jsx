import React from 'react';
import styled from 'styled-components';
import useFetchItems from 'pages/items/hooks/useFetchItems';
import useViewport from 'pages/items/hooks/useViewport';

const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    max-width: 1200px;
`;

const ItemType = styled.h2`
    font-size: 20px;
    line-height: 140%;
`;

const ItemInfo = styled.ul`
    display: flex;
    flex-wrap: wrap;
    column-gap: ${({ type, deviceType }) => {
        if (type === 'all') {
            if (deviceType === 'tablet') return '16px';
            if (deviceType === 'mobile') return '8px';
        }
        return '24px';
    }};
    list-style: none;
    padding: 0;
`;

const ItemCard = styled.li``;

const ItemImage = styled.img`
    width: 282px;
    height: 282px;
    border-radius: 16px;
`;

const ItemName = styled.p``;

const ItemPrice = styled.p``;

const FavoriteCount = styled.p``;

function ItemsList({ type, page, pageSize, order, search }) {
    const { items, loading, error } = useFetchItems({ page, pageSize, order, search });
    const { deviceType } = useViewport();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <ItemWrapper deviceType={deviceType}>
            <ItemType>{type === 'best' ? '베스트 상품' : '전체 상품'}</ItemType>
            <ItemInfo type={type} deviceType={deviceType}>
                {items &&
                    items.map((item) => (
                        <ItemCard key={item.id}>
                            <ItemImage src={item.images} alt={item.name} />
                            <ItemName>{item.name}</ItemName>
                            <ItemPrice>{item.price}원</ItemPrice>
                            <FavoriteCount> {item.favoriteCount}</FavoriteCount>
                        </ItemCard>
                    ))}
            </ItemInfo>
        </ItemWrapper>
    );
}

export default ItemsList;
