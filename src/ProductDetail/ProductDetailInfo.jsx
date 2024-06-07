import React from "react";
import heart from "../images/heart.svg";
import morebutton from "../images/morebutton.svg"

const ProductDetailInfo = ({ detailItem }) => {
  return (
    <div className="detailInfo">

      <img src={detailItem.images} alt="상품 상세 사진" width={"486px"} height={"486px"} />

      <div className="Info-wrapper">
        <div className="Info-wrapper-name">
          <h1 className="detailItem-name">{detailItem.name}</h1>
          <img src={morebutton} alt="더보기" />
        </div>
        
        <h1 className="detailItem-price">{detailItem.price}</h1>
        <div className="line"></div>
        <p className="top-wrapper-title">상품 소개</p>
        <span className="detailItem-description">{detailItem.description}</span>
        <p className="top-wrapper-title">상품 태그</p>
        <span className="detailItem-tags">{detailItem.tags}</span>
        <img src={heart} alt="좋아요" />
        {detailItem.favoriteCount}
      </div>
    </div>
  );
};

export default ProductDetailInfo;
