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
    <div className="best-product-box">
      {items.map((item) => {
        return (
          <div>
            <BestProductListItem item={item} />
          </div>
        );
      })}
    </div>
  );
}

export default BestProductList;
