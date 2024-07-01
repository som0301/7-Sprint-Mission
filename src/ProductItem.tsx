import "./ProductItem.css";
import heart from "./images/heart.svg";

function formatNumber(number:number):string {
  return new Intl.NumberFormat("ko-KR").format(number) + "원";
}

interface ProductItemProps{
  imgUrl:string;
  name:string;
  price:number;
  favoriteCount:number;
}

function ProductItem({ imgUrl, name, price, favoriteCount }:ProductItemProps) {
  return (
    <li className="itemlist">
      <img src={imgUrl} alt="상품" className="imgurl" />
      <span className="name">{name}</span>
      <span className="price">{formatNumber(price)}</span>
      <div className="like">
        <img
          src={heart}
          alt="하트"
          className="heart"
          width={"13px"}
          height={"13px"}
        />
        <span className="favoriteCount">{favoriteCount}</span>
      </div>
    </li>
  );
}

export default ProductItem;
