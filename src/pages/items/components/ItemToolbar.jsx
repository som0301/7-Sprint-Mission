import styled from 'styled-components';
import SearchIcon from 'shared/assets/image/ic_search.svg';
import DropDown from 'pages/items/components/DropDown';
import { ItemType } from 'pages/items/components/ItemsList';

const ItemToolbarWrapper = styled.div`
    display: flex;
    flex-direction: ${({ $deviceType }) => {
        if ($deviceType === 'mobile') return 'column';
    }};
    column-gap: ${({ $deviceType }) => {
        if ($deviceType !== 'mobile') return '12px';
    }};
    row-gap: ${({ $deviceType }) => {
        if ($deviceType === 'mobile') return '8px';
    }};
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
    width: ${({ $deviceType }) => {
        if ($deviceType === 'desktop') return '325px';
        if ($deviceType === 'tablet') return '242px';
        if ($deviceType === 'mobile') return '294px';
    }}}
`;

const MoveAddItem = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 133px;
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

const SearchSortWrapper = styled.div`
    display: flex;
    column-gap: ${({ $deviceType }) => {
        if ($deviceType === 'mobile') return '8px';
    }}}
`;

const SortItem = styled.div`
    display: flex;
    position: relative;
    padding: 0;
    border-radius: 12px;
    font-size: 16px;
`;

const MobileToolBarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

function ItemToolbar({ type, deviceType, order, setOrder }) {
    return (
        type === 'all' && (
            <ItemToolbarWrapper $deviceType={deviceType}>
                {deviceType !== 'mobile' ? (
                    <>
                        <SearchItem $deviceType={deviceType} placeholder="검색할 상품을 입력해주세요" />
                        <MoveAddItem href="/additem">상품 등록하기</MoveAddItem>
                        <SortItem>
                            <DropDown deviceType={deviceType} order={order} setOrder={setOrder} />
                        </SortItem>
                    </>
                ) : (
                    <>
                        <MobileToolBarWrapper>
                            <ItemType>판매 중인 상품</ItemType>
                            <MoveAddItem href="/additem">상품 등록하기</MoveAddItem>
                        </MobileToolBarWrapper>
                        <SearchSortWrapper $deviceType={deviceType}>
                            <SearchItem $deviceType={deviceType} placeholder="검색할 상품을 입력해주세요" />
                            <SortItem>
                                <DropDown deviceType={deviceType} order={order} setOrder={setOrder} />
                            </SortItem>
                        </SearchSortWrapper>
                    </>
                )}
            </ItemToolbarWrapper>
        )
    );
}

export default ItemToolbar;
