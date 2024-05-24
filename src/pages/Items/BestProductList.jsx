import React from 'react';
import BestProductItem from './BestProductItem';

const BestProductList = () => {
  return (
    <section>
      <h2>베스트 상품</h2>
      <ul className="item-list">
        <li>
          <BestProductItem />
        </li>
        <li>
          <BestProductItem />
        </li>
        <li>
          <BestProductItem />
        </li>
        <li>
          <BestProductItem />
        </li>
      </ul>
    </section>
  );
};

export default BestProductList;
