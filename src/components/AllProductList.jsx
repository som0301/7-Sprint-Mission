import { useState, useEffect } from "react";
import getItems from "../api/api";
import AllProductItem from "./AllProductItem";
import ProductSearch from "./ProductSearch";
import Pagination from "./Pagination";
import { getCustomRound } from "../utils/Utils";
import useDeviceType from "../hooks/useDeviceType";

const PAGE_INIT = 1;
const ITEM_INIT = 10;
const TABLET_ITEM_NUM = 6;
const MOBILE_ITEM_NUM = 4;

function AllProductList() {
  // 아이템 리스트
  const [items, setItems] = useState([]);
  // 전체 아이템의 수
  const [totalCount, setTotalCount] = useState(0);
  // 현재 페이지 아이템 수
  const [itemsPerPage, setItemPerPage] = useState(ITEM_INIT);
  // 페이지 정렬
  const [orderBy, setOrderBy] = useState("recent");
  // 현재 몇번째 페이지인지
  const [currentPage, setCurrentPage] = useState(PAGE_INIT);
  // 현재 총 페이지의 수
  const [pageNumber, setPageNumber] = useState(0);
  // 반응형 타입
  const { isTablet, isMobile, isDesktop } = useDeviceType();

  const fetchData = async ({ orderBy, currentPage }) => {
    let result;
    try {
      result = await getItems({
        orderBy: orderBy,
        pageSize: itemsPerPage,
        page: currentPage,
      });
    } catch (error) {
      console.log(error);
      return;
    } finally {
    }

    setTotalCount(result.totalCount);

    if (isMobile) {
      setItemPerPage(() => MOBILE_ITEM_NUM);
      setPageNumber(getCustomRound(result.totalCount / MOBILE_ITEM_NUM));
    } else if (isTablet) {
      setItemPerPage(() => TABLET_ITEM_NUM);
      setPageNumber(getCustomRound(result.totalCount / TABLET_ITEM_NUM));
    } else {
      setItemPerPage(() => ITEM_INIT);
    }

    const { list } = result;
    setItems(list);
  };

  useEffect(() => {
    fetchData({ orderBy, itemsPerPage, currentPage });
  }, [orderBy, currentPage, isDesktop, isTablet, isMobile, itemsPerPage]);

  const handleOptionChange = (option) => {
    const order = option ? (option === "최신순" ? "recent" : "favorite") : "";

    setOrderBy(order);
  };

  const handlePageChange = (option) => {
    setCurrentPage(option);
  };

  return (
    <section className="all-products">
      <div className="all-products-bar">
        <h1>전체 상품</h1>
        <ProductSearch onOptionChange={handleOptionChange} />
      </div>
      <ul className="list-area all-area">
        <AllProductItem items={items} />
      </ul>
      <div className="pagination">
        <Pagination
          onPageChange={handlePageChange}
          pageNumber={pageNumber}
          currentPage={currentPage}
        />
      </div>
    </section>
  );
}

export default AllProductList;
