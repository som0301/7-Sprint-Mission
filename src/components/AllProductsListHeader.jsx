import Button from "./common/Button";
import Search from "./Search";
import Dropdown from "./Dropdown";

export function AllProductsListHeader({ onClick, order, setOrder }) {
  return (
    <div className="all-products-header">
      <h2 className="products-list-title">전체 상품</h2>
      <div className="search-order-div">
        {/* .search-order-div 이 div에 마땅한 클래스네임을 모르겠다..*/}
        <Search className="input--color" />
        <Button onClick={onClick} className="btn btn-product-register">
          상품 등록하기
        </Button>
        <Dropdown order={order} setOrder={setOrder} />
      </div>
    </div>
  );
}

export function MobileAllProductsListHeader({ onClick, order, setOrder }) {
  return (
    <div className="all-products-header">
      <div className="mobile-header">
        <h2 className="products-list-title">전체 상품</h2>
        <Button onClick={onClick} className="btn btn-product-register">
          상품 등록하기
        </Button>
      </div>
      <div className="search-order-div">
        {/* .search-order-div 이 div에 마땅한 클래스네임을 모르겠다..*/}
        <Search className="input--color" />
        <Dropdown order={order} setOrder={setOrder} />
      </div>
    </div>
  );
}
