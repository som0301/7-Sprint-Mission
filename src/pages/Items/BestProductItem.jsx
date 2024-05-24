import React from 'react';
import heartIcon from '../../assets/heartIcon.svg';

const BestProductItem = ({ imgUrl, name, price, favoriteCount }) => {
  return (
    <div>
      <img src="#" alt="아이템이미지" className="item-img" />
      <h3 className="item-name">title</h3>
      <div className="item-price">price</div>
      <div className="item-favorite">
        <img src={heartIcon} alt="좋아요아이콘" />
        <span>800</span>
      </div>
    </div>
  );
};

export default BestProductItem;
