import { useState, useEffect } from 'react';
import NavBar from './Nav-bar';
import FavoriteProductSection from './Favorite-product-section';
import AllProductSection from './All-product-section';
import getItems from './api';
import './css/reset.css';
import './css/global.css';
import './css/App.css';

function App() {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [order, setOrder] = useState('recent');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [productsError, setProductsError] = useState(null);
  const [isMobile, setIsMobile] = useState(true);
  const [isTablet, setIsTablet] = useState(false);

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

  const handleOrderClick = (e) => {
    const nextOrder = e.target.name;
    setOrder(nextOrder);
  };

  const loadFavoriteItems = async (options) => {
    const list = await getValidItems(options);
    setFavoriteItems(list);
  };

  const loadAllItems = async (options) => {
    const list = await getValidItems(options);
    setAllItems(list);
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
    loadAllItems({ order, page, pageSize: responsivePageSize, search });
  }, [order, isMobile, isTablet]);

  return (
    <>
      <NavBar isMobile={isMobile} />
      <FavoriteProductSection items={favoriteItems} />
      <AllProductSection items={allItems} onClick={handleOrderClick} />
    </>
  );
}

export default App;
