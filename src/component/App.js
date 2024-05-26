import Header from "./Header";
import { getProducts } from "../Api";
import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import BestProductListItem from "./BestProductList";
import BestProductsList from "./BestProductList";
import "./App.css";
import AllproductsList from "./AllProductList";
import "./mediaQuary.css";

function App() {
  const [order, setOrder] = useState("");
  const [items, setItems] = useState([]);
  const [bestProduct, setBestProduct] = useState([]);
  const [allProduct, setAllProduct] = useState([]);
  const [bestProductCount, setBestProductCount] = useState(4);
  const [allProductCount, setAllProductCount] = useState(10);

  useEffect(() => {
    const handleScreenSize = () => {
      const width = window.innerWidth;
      if (width <= 767) {
        setBestProductCount(1);
        setAllProductCount(4);
      } else if (768 <= width && width <= 1200) {
        setBestProductCount(2);
        setAllProductCount(6);
      } else {
        setBestProductCount(4);
        setAllProductCount(10);
      }
    };
    handleScreenSize();
    window.addEventListener("resize", handleScreenSize);

    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, []);

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
    handleBestProductLoad({
      orderBy: "favorite",
      page: 1,
      pageSize: bestProductCount,
    });
  }, [bestProductCount]);

  useEffect(() => {
    handleAllProductLoad({
      orderBy: "recent",
      page: 1,
      pageSize: allProductCount,
    });
  }, [allProductCount]);

  return (
    <>
      <Header />
      <main>
        <BestProductsList className="best-items" products={bestProductSorted} />
        <AllproductsList className="All-items" products={AllProductSorted} />
      </main>
    </>
  );
}

export default App;
