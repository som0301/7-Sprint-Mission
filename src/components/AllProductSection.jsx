import CommonButton from './CommonButton';
import ProductSectionHeader from './ProductSectionHeader';
import ProductList from './ProductList';
import useToggle from '../hooks/useToggle';
import dropdownImg from '../image-resource/panda-drop-down.svg';
import '../styles/product-section.css';

const HEADER_TEXT = '판매 중인 상품';

function OrderbyButton({ onOrder, id, className, isLoading, children }) {
  const handleClick = (e) => {
    if (!isLoading) {
      onOrder(e);
    }
  };
  return (
    <button onClick={handleClick} id={id} className={className}>
      {children}
    </button>
  );
}

function OrderbyButtonList({ handleOrderClick, isLoading }) {
  const onOrder = ({ target }) => {
    const nextOrder = target.id;
    handleOrderClick(nextOrder);
  };

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

function DropdownButton({ handleOrderClick, isLoading, order }) {
  const [isDropdownOpen, toggleDropdown] = useToggle();
  const isFavorite = order === 'favorite';

  return (
    <div className="drop-down__wrapper">
      <button
        onClick={toggleDropdown}
        className="product-section__header__drop-down"
        type="button"
      >
        <h3 className="dropdown-header">
          {isFavorite ? '좋아요순' : '최신순'}
          <span className="dropdown-header__emoji">👇</span>
        </h3>
        <img className="dropdown-image" src={dropdownImg} alt="드롭다운 버튼" />
      </button>
      {isDropdownOpen && (
        <OrderbyButtonList
          handleOrderClick={handleOrderClick}
          isLoading={isLoading}
        />
      )}
    </div>
  );
}

export default function AllProductSection({
  handleOrderClick,
  items,
  isLoading,
  order,
}) {
  return (
    <section className="product-section product-section__all">
      <ProductSectionHeader text={HEADER_TEXT}>
        <CommonButton
          className="product-section__header__button"
          path="/additem"
        >
          상품 등록하기
        </CommonButton>
        <input
          className="product-section__header__input"
          placeholder="🔍 검색할 상품을 입력해주세요"
        />
        <DropdownButton
          handleOrderClick={handleOrderClick}
          isLoading={isLoading}
          order={order}
        />
      </ProductSectionHeader>
      <ProductList className="product-list__all" items={items} />
    </section>
  );
}
