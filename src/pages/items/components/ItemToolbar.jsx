import styled from 'styled-components';
import SearchIcon from 'shared/assets/image/ic_search.svg';
import DropDown from 'pages/items/components/DropDown';

const ItemToolbarWrapper = styled.div`
    display: flex;
    column-gap: 12px;
`;

const SearchItem = styled.input`
    background-color: #f3f4f6;
    background-image: url(${SearchIcon});
    background-position: 15px;
    background-repeat: no-repeat;
    border: none;
    border-radius: 12px;
    height: 42px;
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
    font-weight: 600;
    font-size: 16px;
    color: #fff;

    &:hover {
        background: #1967d6;
    }
`;

const SortItem = styled.div`
    display: flex;
    position: relative;
    padding: 0;
    border-radius: 12px;
    font-size: 16px;
`;

function ItemToolbar({ type, deviceType, order, setOrder }) {
    return (
        type === 'all' && (
            <ItemToolbarWrapper>
                <SearchItem $deviceType={deviceType} placeholder="검색할 상품을 입력해주세요"></SearchItem>
                <MoveAddItem>상품 등록하기</MoveAddItem>
                <SortItem>
                    <DropDown $deviceType={deviceType} order={order} setOrder={setOrder} />
                </SortItem>
            </ItemToolbarWrapper>
        )
    );
}

export default ItemToolbar;
