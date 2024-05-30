import { classModuleName } from '../../../modules';
import styles from './allproductlist.module.css';
import { getProducts } from '../../../api';
import { useState, useEffect } from 'react';
import searchIcon from '../../../images/icons/ic_search.svg';
import CustomSelect from './../customselect/customselect';
import Product from '../../modules/product/product';
import SelectPage from './../selectpage/selectpage';

const ITEM_WIDTH = {
  desktop: 221,
  tablet: 221,
  mobile: 168,
};

const itemViewMediaState = {
  desktop: 10,
  tablet: 6,
  mobile: 4,
}

const itemViewMediaTitle = {
  desktop: '전체 상품',
  tablet: '판매 중인 상품',
  mobile: '판매 중인 상품',
}

function AllProductList({mediaState}) {
  const [items, setItems] = useState([]);
  const [orderBy, setOrderBy] = useState('recent');
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

  const handleOrderBySelect = (value) => {
    const nextValue = value;
    setOrderBy(nextValue);
  };

  const handlePageSelect = (value) => {
    const nextPage = value;
    setPage(nextPage);
  }

  useEffect(() => {
    handleLoad({ orderBy, page, pageSize: itemViewMediaState[mediaState]});
  }, [orderBy, page, mediaState]);

  return (
    <section className={classModuleName('allproductList-body', styles)}>
      <div className={classModuleName('header', styles)}>
        <h2 className={classModuleName('title', styles)}>{itemViewMediaTitle[mediaState]}</h2>
        <div className={classModuleName('header-right', styles)}>
          <form className={classModuleName('form', styles)}>
            <div className={classModuleName('search-container', styles)}>
              <label htmlFor="search">
                <img className={classModuleName('icon', styles)} src={searchIcon} alt="searchIcon" />
              </label>
              <input id="search" className={classModuleName('search', styles)} name="search" type="search" placeholder="검색할 상품을 입력해주세요" />
            </div>
            <button className={classModuleName('search-submit', styles)} name="submit" type="submit">
              상품 등록하기
            </button>
          </form>
          <CustomSelect onChange={handleOrderBySelect} orderBy={orderBy} mediaState={mediaState}/>
        </div>
      </div>
      <div className={classModuleName('product-list', styles)}>
        {items.map(({ images, name, price, favoriteCount, id }) => {
          return <Product key={id} images={images} name={name} price={price} favoriteCount={favoriteCount} width={ITEM_WIDTH[mediaState]}></Product>;
        })}
      </div>
      <footer>
        <SelectPage onChange={handlePageSelect} page={page}/>
      </footer>
    </section>
  );
}

export default AllProductList;
