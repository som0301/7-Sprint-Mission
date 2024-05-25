import { useState, useEffect } from 'react';
import NavBar from './Nav-bar';
import FavoriteProductSection from './Favorite-product-section';
import AllProductSection from './All-product-section';
import PaginationButtons from './PaginationButtons';
import getItems from './api';
import './css/reset.css';
import './css/global.css';
import './css/App.css';

function App() {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [order, setOrder] = useState('recent');
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [productsError, setProductsError] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // 초기에 isMobile 이랑 isTablet이 false 니까, desktop 사이즈로 데이타 가져오는 이슈: 아마 IIFE로 초기 스테이트값 정해주고 시작하는게 좋을듯.
  // 디펜던시리스트에 isMobile, isTablet 얘네가 있으니까, 데이터를 쓸데 없이 가져오는듯? 객체로 담아서 쓰는건 어떨까?
  // 페이지 값이 너무 높거나 낮아버리는 문제점. 페이지 최소는 1, 최대는 5로 정할까. 페이지 0되는 문제점.

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia('screen and (max-width: 767px)');
    const tabletMediaQuery = window.matchMedia(
      'screen and (min-width: 768px) and (max-width: 1199px)'
    );

    const handleMobileChange = (e) => {
      setIsMobile(e.matches);
    };

    const handleTabletChange = (e) => {
      setIsTablet(e.matches);
    };

    mobileMediaQuery.addListener(handleMobileChange);
    tabletMediaQuery.addListener(handleTabletChange);

    handleMobileChange(mobileMediaQuery);
    handleTabletChange(tabletMediaQuery);
    return () => {
      mobileMediaQuery.removeListener(handleMobileChange);
      tabletMediaQuery.removeListener(handleTabletChange);
    };
  }, []);

  const getValidItems = async (options) => {
    let result;
    try {
      setIsLoading(true);
      result = await getItems(options);
    } catch (error) {
      setProductsError(error);
    } finally {
      setIsLoading(false);
    }
    const { list } = result;
    return list;
  };

  const loadFavoriteItems = async (options) => {
    const list = await getValidItems(options);
    setFavoriteItems(list);
  };

  const loadAllItems = async (options) => {
    const list = await getValidItems(options);
    setAllItems(list);
  };

  const handleOrderClick = (nextOrder) => {
    setOrder(nextOrder);
  };

  const handlePaginationClick = (nextPage) => {
    setPage(nextPage);
  };

  useEffect(() => {
    const responsivePageSize = isMobile ? 1 : isTablet ? 2 : 4;
    loadFavoriteItems({
      order: 'favorite',
      pageSize: responsivePageSize,
    });
  }, [isMobile, isTablet]);

  useEffect(() => {
    const responsivePageSize = isMobile ? 4 : isTablet ? 6 : 10;
    loadAllItems({ order, page, pageSize: responsivePageSize });
  }, [order, page, isMobile, isTablet]);

  return (
    <>
      <NavBar isMobile={isMobile} />
      <FavoriteProductSection items={favoriteItems} />
      <AllProductSection
        items={allItems}
        onClick={handleOrderClick}
        isLoading={isLoading}
      />
      <PaginationButtons
        onClick={handlePaginationClick}
        isLoading={isLoading}
        page={page}
        setPage={setPage}
      />
    </>
  );
}

export default App;
