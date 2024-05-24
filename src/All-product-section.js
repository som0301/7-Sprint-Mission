import Button from './Button';
import ProductList from './ProductList';
import dropdownImg from './image-resource/panda-drop-down.svg';
import './css/product-section.css';

export default function AllProductSection({ items }) {
  return (
    <section className="product-section product-section__all">
      <div className="product-section__header">
        <h2 className="product-section__header-text">판매 중인 상품</h2>
        <Button>상품 등록하기</Button>
        <input
          className="product-section__header__input"
          placeholder="🔍 검색할 상품을 입력해주세요"
        />
        <button className="product-section__header__drop-down" type="button">
          <img src={dropdownImg} alt="드롭다운 버튼" />
          <div className="drop-down__list__orderby">
            <h3 className="orderby__recent">최신순</h3>
            <h3 className="orderby__favorite">좋아요순</h3>
          </div>
        </button>
      </div>
      <ProductList className="product-list__all" items={items} />
    </section>
  );
}
