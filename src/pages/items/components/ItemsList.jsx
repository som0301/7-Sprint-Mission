import styled from 'styled-components';
import useFetchItems from 'pages/items/hooks/useFetchItems';
import useViewport from 'pages/items/hooks/useViewport';
import ItemToolbar from 'pages/items/components/ItemToolbar';
import HeartIcon from 'shared/assets/image/ic_heart.svg';

const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    max-width: 1200px;
    padding: ${({ deviceType }) => {
        if (deviceType === 'tablet') return '0 24px';
        if (deviceType === 'mobile') return '0 16px';
    }}}
`;

const ItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ItemType = styled.h2`
    font-size: 20px;
    line-height: 140%;
`;

const ItemInfo = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: ${({ type, deviceType }) => {
        if (type === 'all') {
            if (deviceType === 'mobile') return '32px';
        }
        return '40px';
    }};
    list-style: none;
    padding: 0;
`;

const ItemCard = styled.li`
    display: flex;
    flex-direction: column;
    row-gap: 6px;
`;

const ItemImage = styled.img`
    width: ${({ type, deviceType }) => {
        if (type === 'all') {
            if (deviceType === 'mobile') {
                return '168px';
            }
            return '221px';
        }
        if (type === 'best') {
            if (deviceType === 'desktop') return '282px';
            if (deviceType === 'tablet') return '336px';
            if (deviceType === 'mobile') return '343px';
        }
    }};
    height: ${({ type, deviceType }) => {
        if (type === 'all') {
            if (deviceType === 'mobile') {
                return '168px';
            }
            return '221px';
        }
        if (type === 'best') {
            if (deviceType === 'desktop') return '282px';
            if (deviceType === 'tablet') return '336px';
            if (deviceType === 'mobile') return '343px';
        }
    }};
    border-radius: 16px;
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

function ItemsList({ type, page, pageSize, order, search }) {
    const { items, loading, error } = useFetchItems({ page, pageSize, order, search });
    const { deviceType } = useViewport();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <ItemContainer deviceType={deviceType}>
            <ItemWrapper>
                <ItemType>{type === 'best' ? '베스트 상품' : '전체 상품'}</ItemType>
                <ItemToolbar deviceType={deviceType} />
            </ItemWrapper>
            <ItemInfo type={type} deviceType={deviceType}>
                {items &&
                    items.map((item) => (
                        <ItemCard key={item.id}>
                            <ItemImage type={type} deviceType={deviceType} src={item.images} alt={item.name} />
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

export default ItemsList;
