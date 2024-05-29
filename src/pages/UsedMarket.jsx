import "../styles/UsedMarket.css";
import TopNavigation from "../components/TopNavigation";
import ProductList from "../components/ProductList";
import BestProductList from "../components/BestProductList";
import { useEffect, useState } from "react";
import { getProducts } from "../api";
import { useMediaQuery } from "react-responsive";

function UsedMarket() {
  const [items, setItems] = useState([]);
  const [bestItems, setBestItems] = useState([]);
  const [order, setOrder] = useState("recent");
  const [page, setPage] = useState(1);
  const [allProdPageSize, setAllProdPageSize] = useState(10);
  const [totalProdCount, setTotalProdCount] = useState(0);

  const isTablet = useMediaQuery({ query: "(max-width: 1200px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const allProdHandleLoad = async (order, page, pageSize) => {
    const { list, totalCount } = await getProducts(order, page, pageSize);
    setItems(list);
    setTotalProdCount(totalCount);
  };

  const bestProdHandleLoad = async (page, pageSize) => {
    const { list, totalCount } = await getProducts("favorite", page, pageSize);
    setBestItems(list);
    setTotalProdCount(totalCount);
  };

  const handleLoad = (order) => {
    if (!isTablet && !isMobile) {
      // PC
      setAllProdPageSize(() => 10);
      bestProdHandleLoad(1, 4);
      allProdHandleLoad(order, page, 10);
    } else if (isTablet && !isMobile) {
      // Tablet
      setAllProdPageSize(() => 6);
      bestProdHandleLoad(1, 2);
      allProdHandleLoad(order, page, 6);
    } else if (isMobile) {
      // isMobile
      setAllProdPageSize(() => 4);
      bestProdHandleLoad(1, 1);
      allProdHandleLoad(order, page, 4);
    }
  };

  const handleSelect = (selectedValue) => {
    if (selectedValue === "최신순") {
      setOrder("recent");
    } else if (selectedValue === "좋아요순") {
      setOrder("favorite");
    }
    setPage(1);
  };

  const onClickPage = (pageNum) => {
    setPage(pageNum);
  };

  useEffect(() => {
    handleLoad(order);
  }, [isTablet, isMobile, order, page, totalProdCount]);

  return (
    <div className="App">
      <header className="UsedMarket-header">
        <TopNavigation />
      </header>
      <main className="UsedMarket-main">
        <div>
          <BestProductList items={bestItems} className="UsedMarket-best-prod" />
        </div>
        <div>
          <ProductList
            items={items}
            order={order}
            page={page}
            handleSelect={handleSelect}
            onClickPage={onClickPage}
            totalProdCount={totalProdCount}
            allProdPageSize={allProdPageSize}
            className="UsedMarket-all-prod"
          />
        </div>
      </main>
      <footer></footer>
      <body></body>
    </div>
  );
}

export default UsedMarket;
