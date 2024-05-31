import Header from "../../component/Header";
import { getProducts } from "../../Api";
import { useEffect, useState } from "react";
import BestProductsList from "./BestProductList";
import "./Items.css";
import AllproductsList from "./AllProductList";
import PageNation from "./PageNation";

function Items() {
  const [bestProduct, setBestProduct] = useState([]);
  const [allProduct, setAllProduct] = useState([]);
  const [bestProductCount, setBestProductCount] = useState(4);
  const [allProductCount, setAllProductCount] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

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
    setBestProduct(list);
  };

  const handleAllProductLoad = async (options) => {
    const { list } = await getProducts(options);
    setAllProduct(list);
  };

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    handleBestProductLoad({
      orderBy: "favorite",
      page: currentPage,
      pageSize: bestProductCount,
    });
  }, [bestProductCount, currentPage]);

  useEffect(() => {
    handleAllProductLoad({
      orderBy: "recent",
      page: currentPage,
      pageSize: allProductCount,
    });
  }, [allProductCount, currentPage]);

  return (
    <>
      <Header />
      <main>
        <BestProductsList className="best-items" products={bestProductSorted} />
        <AllproductsList className="All-items" products={AllProductSorted} />
        <PageNation currentPage={currentPage} onPageChange={onPageChange} />
      </main>
    </>
  );
}

export default Items;

//1. "/items" : 상품페이지
//2. "/addItem" : 상품 등록 페이지
