import { useState } from 'react';
import CommonButton from './CommonButton';
import ProductSectionHeader from './ProductSectionHeader';
import ProductList from './ProductList';
import dropdownImg from '../image-resource/panda-drop-down.svg';
import '../styles/product-section.css';

function OrderbyButton({ onOrder, id, className, isLoading, children }) {
  return (
    <button
      onClick={onOrder}
      id={id}
      className={className}
      disabled={isLoading}
    >
      {children}
    </button>
  );
}

function OrderbyButtonList({ onOrder, isLoading }) {
  return (
    <div className="drop-down__list__orderby">
      <OrderbyButton
        onOrder={onOrder}
        id="recent"
        className="orderby__recent"
        isLoading={isLoading}
      >
        최신순
      </OrderbyButton>
      <OrderbyButton
        onOrder={onOrder}
        id="favorite"
        className="orderby__favorite"
        isLoading={isLoading}
      >
        좋아요순
      </OrderbyButton>
    </div>
  );
}

function DropdownButton({ onOrder, isLoading }) {
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleDropdownClick = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <button
      onClick={handleDropdownClick}
      className="product-section__header__drop-down"
      type="button"
    >
      <img src={dropdownImg} alt="드롭다운 버튼" />
      {openDropdown && (
        <OrderbyButtonList onOrder={onOrder} isLoading={isLoading} />
      )}
    </button>
  );
}

export default function AllProductSection({ onClick, items, isLoading }) {
  const HEADER_TEXT = '판매 중인 상품';

  const onOrder = ({ target }) => {
    const nextOrder = target.id;
    onClick(nextOrder);
  };

  const handleLinkClick = () => {
    window.location.href = './additem';
  };

  return (
    <section className="product-section product-section__all">
      <ProductSectionHeader text={HEADER_TEXT}>
        <CommonButton
          className="product-section__header__button"
          onClick={handleLinkClick}
        >
          상품 등록하기
        </CommonButton>
        <input
          className="product-section__header__input"
          placeholder="🔍 검색할 상품을 입력해주세요"
        />
        <DropdownButton onOrder={onOrder} isLoading={isLoading} />
      </ProductSectionHeader>
      <ProductList className="product-list__all" items={items} />
    </section>
  );
}
