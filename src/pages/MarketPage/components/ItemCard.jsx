import React from "react";
// 5. 30 ReactComponent as HeartIcon   이부분은 SVG 파일을 React 컴포넌트로 가져올 때는 
// ReactComponent로 내보낸 기본 내보내기를 가져와서 원하는 이름으로 지정할 수 있다고 한다.
import { ReactComponent as HeartIcon } from "../../../assets/images/icons/ic_heart.svg";


function ItemCard({ item }) {
  return (
    <div> 
      <img src={item.images[0]} alt={item.name} className="itemCardImage" />
      <div className="itemContainer">
        <h2 className="itemName">{item.name}</h2>
        {/* .toLocaleString()  JavaScript의 내장 메소드 중 하나로, 숫자를 현지화된 문자열로 변환하는 데 사용   */}
        <p className="itemPrice">{item.price.toLocaleString()}원</p>
        <div className="heartIcon">
          <HeartIcon />
          {item.favoriteCount}
        </div>
      </div>
    </div> 
  );
}

export default ItemCard;