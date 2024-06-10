import { classModuleName } from '../../../modules';
import Product from '../../modules/product/product';
import { getProducts } from '../../../api';
import { useState, useEffect } from 'react';
import styles from './bestproductlist.module.css';

const ITEM_WIDTH = {
  desktop: 282,
  tablet: 336,
  mobile: 343,
};

const itemViewMediaState = {
  desktop: 4,
  tablet: 2,
  mobile: 1,
}

function BestProductList({mediaState}) {
  const [items, setItems] = useState([]);
  const [orderBy, setOrderBy] = useState('favorite');
  const [page, setPage] = useState(1);

  const handleLoad = async (options) => {
    let result;
    try {
      result = await getProducts(options);
    } catch (error) {
      console.log(error);
      return;
    } finally {
    }
    const { list } = result;

    setItems(list);
  };

  useEffect(() => {
    handleLoad({ orderBy, pageSize: itemViewMediaState[mediaState], page });
  }, [mediaState]);

  return (
    <section className={classModuleName('best-product-list', styles)}>
      <h2 className={classModuleName('best-product-list-title', styles)}>베스트 상품</h2>
      <div className={classModuleName('best-product-list-container', styles)}>
        {items.map((item) => {
          return <Product key={item.id} item={item} width={ITEM_WIDTH[mediaState]}></Product>;
        })}
      </div>
    </section>
  );
}

export default BestProductList;
