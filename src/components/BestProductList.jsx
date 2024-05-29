import "../styles/BestProductList.css";
import heartImg from "../assets/icons/ic_heart.svg";

function BestProductListItem({ item }) {
  return (
    <div className="BestProductListItem">
      <img
        className="BestProductListItem-img"
        src={item.images[0]}
        alt={item.title}
      />
      <div className="BestProductListItem-info">
        <p>{item.name}</p>
        <p className="BestProductListItem-price">
          {Number(item.price).toLocaleString("ko-KR")}원
        </p>
        <div className="BestProductListItem-favorite">
          <img src={heartImg} alt="좋아요수"></img>
          <p>{item.favoriteCount}</p>
        </div>
      </div>
    </div>
  );
}

function BestProductList({ items }) {
  return (
    <div className="BestProductList">
      <p className="BestProductList-title">베스트 상품</p>
      <div className="BestProductList-container">
        {items.map((item) => {
          return <BestProductListItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default BestProductList;
