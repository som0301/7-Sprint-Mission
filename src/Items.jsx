import { useState, useEffect } from "react";
import Header from "/src/components/header/Header";
import BestProductsList from "./components/BestProductsList";
import { getProducts } from "./components/api/api";

import "/src/styles/Reset.css";
import "./App.css";
import AllProductsList from "./components/AllProductsList";
import "/src/styles/Button.css";

import { useResponsiveApi } from "./Responsive";

function Items() {
  const [allProducts, setAllProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const [order, setOrder] = useState("recent");
  const [page, setPage] = useState(1);

  // const [windowSize, setWindowSize] = useState(window.innerWidth);
  // const [pageSize, setPageSize] = useState(10);

  const { isDesktop, isTablet } = useResponsiveApi();
  const allProductsPageSize = isDesktop ? 10 : isTablet ? 6 : 4;
  const bestProductsPageSize = isDesktop ? 4 : isTablet ? 2 : 1;

  const sortedProducts = allProducts.sort((a, b) => b[order] - a[order]);

  const handleBestProductsLoad = async (options) => {
    const { list } = await getProducts(options);
    setBestProducts(list);
  };

  const handleAllProductsLoad = async (options) => {
    const { list } = await getProducts(options);
    setAllProducts(list);
  };

  // window.onresize = () => {
  //   setWindowSize(window.innerWidth);

  //   console.log(windowSize); // 임시

  //   if (windowSize >= 1200) setPageSize(10);
  //   else if (1200 > windowSize && windowSize >= 768) setPageSize(6);
  //   else setPageSize(4);
  // };

  useEffect(() => {
    handleBestProductsLoad({
      orderBy: "favorite",
      pageSize: `${bestProductsPageSize}`,
      page: 1,
    });
  }, [bestProductsPageSize]);

  useEffect(() => {
    handleAllProductsLoad({
      orderBy: `${order}`,
      pageSize: `${allProductsPageSize}`,
      page: `${page}`,
    });
  }, [order, page, allProductsPageSize]);

  return (
    <>
      {/* <Header className="header" /> */}
      <main>
        <BestProductsList
          className="best-products-list"
          products={bestProducts}
        />
        <AllProductsList
          handleProductsLoad={handleAllProductsLoad}
          page={page}
          setPage={setPage}
          order={order}
          setOrder={setOrder}
          className="all-products-list"
          products={sortedProducts}
        />
      </main>
    </>
  );
}

export default Items;
