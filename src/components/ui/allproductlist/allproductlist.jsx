import { classModuleName } from '../../../modules';
import styles from './allproductlist.module.css';
import { getProducts } from '../../../api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import searchIcon from '../../../images/icons/ic_search.svg';
import CustomSelect from './../customselect/customselect';
import Product from '../../modules/product/product';
import SelectPage from './../selectpage/selectpage';
import Button from '../../modules/button/button';

const ITEM_WIDTH = {
  desktop: 221,
  tablet: 221,
  mobile: 168,
};

const itemViewMediaState = {
  desktop: 10,
  tablet: 6,
  mobile: 4,
};

const itemViewMediaTitle = {
  desktop: '전체 상품',
  tablet: '판매 중인 상품',
  mobile: '판매 중인 상품',
};

function ReactiveHeader({ mediaState, orderBy, handleOrderBySelect, keyword, handleInputChange, handleInputBlur }) {
  if (mediaState === 'mobile') {
    return (
      <div className={classModuleName('header', styles)}>
        <h2 className={classModuleName('title', styles)}>{itemViewMediaTitle[mediaState]}</h2>
        <div className={classModuleName('search-container', styles)}>
          <label htmlFor="search">
            <img className={classModuleName('icon', styles)} src={searchIcon} alt="searchIcon" />
          </label>
          <input id="search" value={keyword} onChange={handleInputChange} className={classModuleName('search', styles)} name="search" type="text" placeholder="검색할 상품을 입력해주세요" />
        </div>
        <button className={classModuleName('search-submit', styles)} name="submit" type="submit">
          상품 등록하기
        </button>
        <CustomSelect onChange={handleOrderBySelect} orderBy={orderBy} mediaState={mediaState} />
      </div>
    );
  } else {
    return (
      <div className={classModuleName('header', styles)}>
        <h2 className={classModuleName('title', styles)}>{itemViewMediaTitle[mediaState]}</h2>
        <div className={classModuleName('header-right', styles)}>
          <div className={classModuleName('search-container', styles)}>
            <label htmlFor="search">
              <img className={classModuleName('icon', styles)} src={searchIcon} alt="searchIcon" />
            </label>
            <input
              id="search"
              value={keyword}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              className={classModuleName('search', styles)}
              name="search"
              type="text"
              placeholder="검색할 상품을 입력해주세요"
            />
          </div>
          <Link to='/additem'>
            <Button className="search-submit" cssStyle={styles} name="submit" type="submit">
              상품 등록하기
            </Button>
          </Link>
          <CustomSelect onChange={handleOrderBySelect} orderBy={orderBy} mediaState={mediaState} />
        </div>
      </div>
    );
  }
}

function AllProductList({ mediaState }) {
  const [items, setItems] = useState([]);
  const [orderBy, setOrderBy] = useState('recent');
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState('');

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
  };

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleInputBlur = () => {
    handleLoad({ orderBy, page, pageSize: itemViewMediaState[mediaState], keyword });
  };

  useEffect(() => {
    handleLoad({ orderBy, page, pageSize: itemViewMediaState[mediaState], keyword });
  }, [orderBy, page, mediaState]);

  return (
    <section className={classModuleName('allproductList-body', styles)}>
      <ReactiveHeader mediaState={mediaState} orderBy={orderBy} handleOrderBySelect={handleOrderBySelect} keyword={keyword} handleInputChange={handleInputChange} handleInputBlur={handleInputBlur} />
      <div className={classModuleName('product-list', styles)}>
        {items.map((item) => {
          return <Product key={item.id} item={item} width={ITEM_WIDTH[mediaState]}></Product>;
        })}
      </div>
      <footer>
        <SelectPage onChange={handlePageSelect} page={page} />
      </footer>
    </section>
  );
}

export default AllProductList;
