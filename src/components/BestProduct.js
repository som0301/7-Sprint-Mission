// BestProduct.js
import React, { useEffect, useState } from 'react';
import Style from './BestProduct.module.css';
import { getProductList } from '../utils/Getproduct';
import { favoriteCount } from '../utils/FavoriteCount';

function BestProduct() {
  const [bestItems, setBestItems] = useState([]);

  const fetchBestList = async () => {
    const { list } = await getProductList({
      page: 1,
      pageSize: 4,
      orderBy: 'favorite',
    });

    setBestItems(list);
  };

  useEffect(() => {
    fetchBestList();
  }, []);

  const handleBestFavoriteCount = async id => {
    const favorite = await favoriteCount(id);
    console.log(favorite);
    if ('message' in favorite) {
    }
    fetchBestList();
  };

  return (
    <>
      <div className={Style.main_product_bestproduct}>
        <h1 className={Style.main_product_bestproduct_title}>베스트 상품</h1>
        <ul className={Style.main_best_product}>
          {bestItems?.map(({ id, images, name, price, favoriteCount }) => {
            return (
              <li key={id}>
                <img
                  src={images[0]}
                  width={280}
                  height={280}
                />
                <div className={Style.main_product_detail}>
                  <p className={Style.product_description}>{name}</p>
                  <p className={Style.product_price}>
                    {price.toLocaleString()}
                  </p>
                  <button onClick={() => handleBestFavoriteCount(id)}>
                    {favoriteCount}
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default BestProduct;
