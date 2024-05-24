function BestProductListItem({ item }) {
  console.log(item);
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
  console.log(items);
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
