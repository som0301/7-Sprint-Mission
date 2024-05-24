import { useState, useEffect } from "react";
import Header from "/src/components/header/Header";
import BestProductsList from "./components/BestProductsList";
import { getProducts } from "./components/api/api";

import "/src/styles/Reset.css";
import "./App.css";
import AllProductsList from "./components/AllProductsList";
import "/src/styles/Button.css";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const [order, setOrder] = useState("recent");
  const [page, setPage] = useState(1);

  const sortedProducts = allProducts.sort((a, b) => b[order] - a[order]);

  const handleBestProductsLoad = async (options) => {
    const { list } = await getProducts(options);
    setBestProducts(list);
  };

  const handleAllProductsLoad = async (options) => {
    const { list } = await getProducts(options);
    setAllProducts(list);
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
      pageSize: 10,
      page: `${page}`,
    });
  }, [order, page]);

  return (
    <>
      <Header id="header" />
      <main id="main">
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

export default App;

// TODO: 반응형 모바일 로고 변경
// TODO: 페이지네이션 구현
// TODO: 중고마켓 눌렀을때 items로 이동
