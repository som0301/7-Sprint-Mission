import "../style/header.css";
import "../style/bestProducts.css";

function BestProductListItem({ item }) {
  return (
    <div className="BestProductListItem">
      <img
        className="BestProductListItem-img"
        src={item.images}
        alt={item.name}
      />
      <div>
        <h1 className="item-title">{item.name}팝니다</h1>
        <p className="price">{item.price}원</p>
        <p>{item.favoriteCount}</p>
      </div>
    </div>
  );
}

function BestProductList({ items }) {
  return (
    <div>
      {items.map((item) => {
        return (
          <li>
            <BestProductListItem item={item} />
          </li>
        );
      })}
    </div>
  );
}

export default BestProductList;
