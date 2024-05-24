import "../style/header.css";

function BestProductListItem({ item }) {
  return (
    <div className="BestProductListItem">
      <img
        className="BestProductListItem-img"
        src={item.images}
        alt={item.name}
      />
      <div>
        <h1>{item.name}팝니다</h1>
        <p>{item.price}</p>
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
