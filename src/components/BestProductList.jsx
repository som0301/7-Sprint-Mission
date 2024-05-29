import "../styles/BestProductList.css";
import heartImg from "../assets/icons/ic_heart.svg";

function BestProductListItem({ item }) {
  return (
    <div className="best-product-list-item">
      <img className="img" src={item.images[0]} alt={item.title} />
      <div className="info">
        <p>{item.name}</p>
        <p className="price">{Number(item.price).toLocaleString("ko-KR")}원</p>
        <div className="favorite">
          <img src={heartImg} alt="좋아요수"></img>
          <p>{item.favoriteCount}</p>
        </div>
      </div>
    </div>
  );
}

function BestProductList({ items }) {
  return (
    <div className="best-product-list">
      <p className="title">베스트 상품</p>
      <div className="container">
        {items.map((item) => {
          return <BestProductListItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default BestProductList;
