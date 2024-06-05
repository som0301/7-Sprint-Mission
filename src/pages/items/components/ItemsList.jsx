import styled from 'styled-components';
import useFetchItems from 'pages/items/hooks/useFetchItems';
import useViewport from 'pages/items/hooks/useViewport';
import HeartIcon from 'shared/assets/image/ic_heart.svg';
import SearchIcon from 'shared/assets/image/ic_search.svg';
import DropDownIcon from 'shared/assets/image/ic_arrow_down.svg';

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

const ItemToolbar = styled.div`
    display: flex;
`;

const SearchItem = styled.input`
    background-color: #f3f4f6;
    background-image: url(${SearchIcon});
    background-position: 15px;
    background-repeat: no-repeat;
    border: none;
    border-radius: 12px;
    height: 40px;
    padding: 9px 20px 9px 44px;
    width: 325px;
`;

const MoveAddItem = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 133px;
    height: 42px;
    background: var(--blue);
    border-radius: 8px;
    font-weight: 700;
    font-size: 16px;
    color: #fff;

    &:hover {
        background: #1967d6;
    }
`;

const SortItem = styled.button`
    position: relative;
    border-radius: 12px;
    border: 1px solid var(--gray-200);
    display: flex;
    align-items: center;
    gap: 24px;
    font-size: 16px;
`;

const SortBy = styled.span`
    font-size: 16px;
    line-height: 24px;
`;

const DropDown = styled.img`
width: 24px
height: 24px`;

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
                <ItemToolbar>
                    <SearchItem placeholder="검색할 상품을 입력해주세요"></SearchItem>
                    <MoveAddItem>상품 등록하기</MoveAddItem>
                    <SortItem>
                        <SortBy>최신순</SortBy>
                        <DropDown />
                    </SortItem>
                </ItemToolbar>
            </ItemWrapper>
            <ItemInfo type={type} deviceType={deviceType}>
                {items &&
                    items.map((item) => (
                        <ItemCard key={item.id}>
                            <ItemImage type={type} deviceType={deviceType} src={item.images} alt={item.name} />
                            <ItemName>{item.name}</ItemName>
                            <ItemPrice>{item.price}원</ItemPrice>
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
