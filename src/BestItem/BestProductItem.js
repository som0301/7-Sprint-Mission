import "./BestProductItem.css";

function BestProductItem({ imgUrl, name, price, favoriteCount }) {
  return (
    <li className="itemlist">
      <img src={imgUrl} alt="베스트 상품" className="imgurl" />
      <span>{name}</span>
      <span>{price}</span>
      <span>{favoriteCount}</span>
    </li>
  );
}

export default BestProductItem;
