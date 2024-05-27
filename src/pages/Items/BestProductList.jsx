import React, { useEffect, useState } from 'react';
import BestProductItem from './BestProductItem';
import { getProductItem } from './api';

const BestProductList = ({ pageSize }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getBestProduct = async () => {
      const data = await getProductItem(1, pageSize, 'favorite');
      setProduct(data.list);
      console.log(data);
    };

    getBestProduct();
  }, [pageSize]);

  return (
    <section className="best-product">
      <h2>베스트 상품</h2>
      <ul className="item-list">
        {product.map((item) => (
          <li key={item.id}>
            <BestProductItem
              imgUrl={item.images[0]}
              name={item.name}
              price={item.price}
              favoriteCount={item.favoriteCount}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BestProductList;
