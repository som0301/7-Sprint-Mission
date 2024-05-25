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
  const INITIAL_DEVICETYPE = {
    isMobile: true,
    isTablet: false,
  };
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [order, setOrder] = useState('recent');
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [productsError, setProductsError] = useState(null);
  const [deviceType, setDeviceType] = useState(INITIAL_DEVICETYPE);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia('screen and (max-width: 767px)');
    const tabletMediaQuery = window.matchMedia(
      'screen and (min-width: 768px) and (max-width: 1199px)'
    );

    const handleMobileChange = (e) => {
      console.log('isMobile: ' + e.matches);
      const nextIsMobile = e.matches;
      setDeviceType((prevType) => ({
        ...prevType,
        isMobile: nextIsMobile,
      }));
    };

    const handleTabletChange = (e) => {
      console.log('isTablet: ' + e.matches);
      const nextIsTablet = e.matches;
      setDeviceType((prevType) => ({
        ...prevType,
        isTablet: nextIsTablet,
      }));
    };

    mobileMediaQuery.addListener(handleMobileChange);
    tabletMediaQuery.addListener(handleTabletChange);

    handleMobileChange(mobileMediaQuery);
    handleTabletChange(tabletMediaQuery);
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
    const { isMobile, isTablet } = deviceType;
    const responsivePageSize = isMobile ? 1 : isTablet ? 2 : 4;
    loadFavoriteItems({
      order: 'favorite',
      pageSize: responsivePageSize,
    });
  }, [deviceType, isInitialized]);

  useEffect(() => {
    if (!isInitialized) return;

    const { isMobile, isTablet } = deviceType;
    const responsivePageSize = isMobile ? 4 : isTablet ? 6 : 10;
    loadAllItems({ order, page, pageSize: responsivePageSize });
  }, [order, page, deviceType, isInitialized]);

  return (
    <>
      <NavBar isMobile={false} />
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
