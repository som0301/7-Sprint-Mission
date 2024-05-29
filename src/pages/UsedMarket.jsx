import "../styles/UsedMarket.css";
import TopNavigation from "../components/TopNavigation";
import ProductList from "../components/ProductList";
import BestProductList from "../components/BestProductList";
import { useEffect, useState } from "react";
import { getProducts } from "../api";
import { useMediaQuery } from "react-responsive";

const PAGE_SIZES = {
  PC: { regular: 10, best: 4 },
  TABLET: { regular: 6, best: 2 },
  MOBILE: { regular: 4, best: 1 },
};

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
      setAllProdPageSize(() => PAGE_SIZES.PC.regular);
      bestProdHandleLoad(1, PAGE_SIZES.PC.best);
      allProdHandleLoad(order, page, PAGE_SIZES.PC.regular);
    } else if (isTablet && !isMobile) {
      // Tablet
      setAllProdPageSize(() => PAGE_SIZES.TABLET.regular);
      bestProdHandleLoad(1, PAGE_SIZES.TABLET.best);
      allProdHandleLoad(order, page, PAGE_SIZES.TABLET.regular);
    } else if (isMobile) {
      // isMobile
      setAllProdPageSize(() => PAGE_SIZES.MOBILE.regular);
      bestProdHandleLoad(1, PAGE_SIZES.MOBILE.best);
      allProdHandleLoad(order, page, PAGE_SIZES.MOBILE.regular);
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
    <div>
      <header className="header">
        <TopNavigation />
      </header>
      <main className="main">
        <div>
          <BestProductList items={bestItems} />
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
          />
        </div>
      </main>
      <footer></footer>
      <body></body>
    </div>
  );
}

export default UsedMarket;
