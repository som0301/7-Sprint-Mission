import styled from 'styled-components';
import useViewport from 'pages/items/hooks/useViewport';
import SearchIcon from 'shared/assets/image/ic_search.svg';
import DropDownIcon from 'shared/assets/image/ic_arrow_down.svg';

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

function ItemToolbar({ deviceType }) {
    return (
        <ItemToolbarWrapper>
            <SearchItem deviceType={deviceType} placeholder="검색할 상품을 입력해주세요"></SearchItem>
            <MoveAddItem>상품 등록하기</MoveAddItem>
            <SortItem deviceType={deviceType}>
                <SortBy>최신순</SortBy>
                <DropDown />
            </SortItem>
        </ItemToolbarWrapper>
    );
}

export default ItemToolbar;
