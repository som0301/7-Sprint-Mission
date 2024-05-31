import { useEffect, useState } from "react";
import getItems from "./Api";
import BestProductList from "./components/BestProducts";
import AllProductList from "./components/AllProducts";
import Header from "./components/Header";
import "./style/header.css";
import "./app.css";
import Pagenation from "./components/Pagenation";

function App() {
  const [bestProducts, setBestProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [orderBy, setOrderBy] = useState("recent");
  const [page, setPage] = useState(1);

  const handleLoadBestProducts = async () => {
    const { list } = await getItems({
      orderBy: "favorite",
      page: 1,
      pageSize: 4,
    });
    setBestProducts(list);
  };

  const handleLoadAllProducts = async () => {
    const { list } = await getItems(
      {
        orderBy: orderBy,
        page: page,
        pageSize: 10,
      },
      []
    );
    setAllProducts(list);
  };

  useEffect(() => {
    handleLoadBestProducts();
    handleLoadAllProducts();
  }, [orderBy, page]);

  return (
    <>
      <Header />
      <div className="main-container">
        <div className="best-products-container">
          <BestProductList items={bestProducts} />
        </div>
        <div className="all-products-container">
          <AllProductList
            items={allProducts}
            orderBy={orderBy}
            setOrderBy={setOrderBy}
          />
          <div className="pagenation-container">
            <Pagenation page={page} setPage={setPage} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
