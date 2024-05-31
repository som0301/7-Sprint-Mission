import "../style/allProducts.css"; // 필요한 스타일 파일을 생성하고 추가하세요.
import heartIcon from "../assets/ic_heart.png";
import OrderDropdown from "./OrderDropdown";

function AllProductListItem({ item }) {
  return (
    <div className="all-product">
      <img className="all-product-img" src={item.images} alt={item.name} />
      <div>
        <h1 className="item-title">{item.name}팝니다</h1>
        <p className="price">{Number(item.price).toLocaleString()}원</p>
        <div className="like">
          <img src={heartIcon} alt="like" />
          {item.favoriteCount}
        </div>
      </div>
    </div>
  );
}

function AllProductList({ items, orderBy, setOrderBy }) {
  return (
    <>
      <div className="all-product-bar">
        <div className="all-product-title"> 전체 상품 </div>
        <div className="all-product-components">
          <input
            class="search-input"
            type="text"
            placeholder="검색할 상품을 입력해주세요"
          />
          <button class="register-product">상품 등록하기</button>
          <OrderDropdown orderBy={orderBy} setOrderBy={setOrderBy} />
        </div>
      </div>
      <div className="all-products-group">
        {items.map((item) => {
          return <AllProductListItem key={item.id} item={item} />;
        })}
      </div>
    </>
  );
}

export default AllProductList;
