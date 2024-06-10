import "../style/header.css";
import "../style/bestProducts.css";
import heartIcon from "../assets/ic_heart.png";

function BestProductListItem({ item }) {
  return (
    <div className="best-product">
      <img className="best-product-img" src={item.images} alt={item.name} />
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

function BestProductList({ items }) {
  return (
    <>
      <div className="best-product-title"> 베스트 상품 </div>
      <div className="best-products-group">
        {items.map((item) => {
          return <BestProductListItem key={item.id} item={item} />;
        })}
      </div>
    </>
  );
}

export default BestProductList;
