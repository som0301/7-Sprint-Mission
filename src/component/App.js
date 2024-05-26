import Header from "./Header";
import { getProducts } from "../Api";
import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import BestProductListItem from "./BestProductList";
import BestProductsList from "./BestProductList";
import "./App.css";
import AllproductsList from "./AllProductList";

function App() {
  const [order, setOrder] = useState("");
  const [items, setItems] = useState([]);
  const [bestProduct, setBestProduct] = useState([]);
  const [allProduct, setAllProduct] = useState([]);

  const bestProductSorted = bestProduct.sort(
    (a, b) => b["favborite"] - a["favorite"]
  );

  const AllProductSorted = allProduct.sort((a, b) => b["recent"] - a["recent"]);

  const handleBestProductLoad = async (options) => {
    const { list } = await getProducts(options);
    //console.log("products", list);
    setBestProduct(list);
    //console.log("items", list);
  };

  const handleAllProductLoad = async (options) => {
    const { list } = await getProducts(options);
    setAllProduct(list);
  };

  useEffect(() => {
    handleBestProductLoad({ orderBy: "favorite", page: 1, pageSize: 4 });
  }, []);

  useEffect(() => {
    handleAllProductLoad({ orderBy: "recent", page: 1, pageSize: 10 });
  }, []);

  return (
    <>
      <Header />
      <main>
        <BestProductsList products={bestProductSorted} />
        <AllproductsList products={AllProductSorted} />
      </main>
    </>
  );
}

export default App;
