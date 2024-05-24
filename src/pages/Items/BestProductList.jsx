import React, { useEffect, useState } from 'react';
import BestProductItem from './BestProductItem';

const BestProductList = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(
      'https://panda-market-api.vercel.app/products?page=1&pageSize=4&orderBy=favorite'
    )
      .then((response) => response.json())
      .then((result) => setProduct(result.list));
  }, []);

  console.log('ddd', product);
  return (
    <section>
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
