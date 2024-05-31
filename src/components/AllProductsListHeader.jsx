import Button from './common/Button';
import Search from './Search';
import Dropdown from './Dropdown';
import { StyledButton } from './common/Button';

export function AllProductsListHeader({ onClick, order, setOrder }) {
  return (
    <div className='all-products-header'>
      <h2 className='products-list-title'>전체 상품</h2>
      <div className='search-container'>
        <Search className='input--color' />
        <StyledButton onClick={onClick} size='small'>
          상품 등록하기
        </StyledButton>
        <Dropdown order={order} setOrder={setOrder} />
      </div>
    </div>
  );
}

export function MobileAllProductsListHeader({ onClick, order, setOrder }) {
  return (
    <div className='all-products-header'>
      <div className='mobile-header'>
        <h2 className='products-list-title'>전체 상품</h2>
        <StyledButton onClick={onClick} size='small'>
          상품 등록하기
        </StyledButton>
      </div>
      <div className='search-container'>
        <Search className='input--color' />
        <Dropdown order={order} setOrder={setOrder} />
      </div>
    </div>
  );
}
