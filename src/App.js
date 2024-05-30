import { useEffect, useState } from "react";
import getItems from "./Api";
import BestProductList from "./components/BestProducts";
import AllProductList from "./components/AllProducts";
import Header from "./components/Header";
import "./style/header.css";
import "./app.css";
function App() {
  const [bestProducts, setBestProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  const handleLoadBestProducts = async () => {
    const { list } = await getItems({
      orderBy: "favorite",
      page: 1,
      pageSize: 4,
    });
    setBestProducts(list);
  };

  const handleLoadAllProducts = async () => {
    const { list } = await getItems({
      orderBy: "recent",
      page: 1,
      pageSize: 10,
    });
    setAllProducts(list);
  };

  useEffect(() => {
    handleLoadBestProducts();
    handleLoadAllProducts();
  }, []);

  return (

      <>
      <Header />
      <div className="main-container">
      <div className="best-products-container">
        <BestProductList items={bestProducts} />
      </div>
      <div className="all-products-container">
        <AllProductList items={allProducts} />
      </div>
    </div>
    </>
  );
}

export default App;
