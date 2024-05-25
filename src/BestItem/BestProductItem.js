import "./BestProductItem.css";
import heart from '../images/heart.svg';

function BestProductItem({ imgUrl, name, price, favoriteCount }) {
  return (
    <li className="itemlist">
      <img src={imgUrl} alt="베스트 상품" className="imgurl" />
      <span className="name">{name}</span>
      <span className="price">{price}</span>
      <div className="like">
      <img src={heart} alt="하트" className="heart" width={"13px"} height={"13px"}/> 
      <span className="favoriteCount">{favoriteCount}</span>
      </div>
    </li>
  );
}

export default BestProductItem;
