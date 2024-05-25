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
  const [isMobile, setIsMobile] = useState(true);
  const [isTablet, setIsTablet] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

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

    setIsMobile(mobileMediaQuery.matches);
    setIsTablet(tabletMediaQuery.matches);
    setIsInitialized(true);

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
    if (!isInitialized) return;

    const responsivePageSize = isMobile ? 1 : isTablet ? 2 : 4;
    loadFavoriteItems({
      order: 'favorite',
      pageSize: responsivePageSize,
    });
  }, [isMobile, isTablet, isInitialized]);

  useEffect(() => {
    if (!isInitialized) return;

    const responsivePageSize = isMobile ? 4 : isTablet ? 6 : 10;
    loadAllItems({ order, page, pageSize: responsivePageSize });
  }, [order, page, isMobile, isTablet, isInitialized]);

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
