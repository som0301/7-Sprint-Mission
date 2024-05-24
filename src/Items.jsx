import { useState, useEffect } from "react";
import Header from "/src/components/header/Header";
import BestProductsList from "./components/BestProductsList";
import { getProducts } from "./components/api/api";

import "/src/styles/Reset.css";
import "./App.css";
import AllProductsList from "./components/AllProductsList";
import "/src/styles/Button.css";

function Items({ isMobile }) {
  const [allProducts, setAllProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const [order, setOrder] = useState("recent");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const sortedProducts = allProducts.sort((a, b) => b[order] - a[order]);

  const handleBestProductsLoad = async (options) => {
    const { list } = await getProducts(options);
    setBestProducts(list);
  };

  const handleAllProductsLoad = async (options) => {
    const { list } = await getProducts(options);
    setAllProducts(list);
  };

  window.onresize = () => {
    setWindowSize(window.innerWidth);

    if (windowSize >= 1200) setPageSize(10);
    else if (1200 > windowSize && windowSize >= 768) setPageSize(6);
    else setPageSize(4);
  };

  useEffect(() => {
    handleBestProductsLoad({
      orderBy: "favorite",
      pageSize: 4,
      page: 1,
    });
  }, []);

  useEffect(() => {
    handleAllProductsLoad({
      orderBy: `${order}`,
      pageSize: `${pageSize}`,
      page: `${page}`,
    });
  }, [order, page, pageSize]);

  return (
    <>
      <Header className="header" />
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
