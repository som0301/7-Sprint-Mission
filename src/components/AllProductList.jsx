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
  // 페이지 정렬
  const [orderBy, setOrderBy] = useState("recent");
  // 현재 몇 번째 페이지인지
  const [currentPage, setCurrentPage] = useState(PAGE_INIT);
  // 반응형 타입
  const { isTablet, isMobile, isDesktop } = useDeviceType();
  // 현재 페이지 아이템 수
  const itemsPerPage = isMobile
    ? MOBILE_ITEM_NUM
    : isTablet
    ? TABLET_ITEM_NUM
    : ITEM_INIT;

  // 전체 페이지 수 계산
  const pageNumber = getCustomRound(totalCount / itemsPerPage);

  const fetchData = async ({ orderBy, currentPage, itemsPerPage }) => {
    try {
      const result = await getItems({
        orderBy,
        pageSize: itemsPerPage,
        page: currentPage,
      });

      setTotalCount(result.totalCount);
      setItems(result.list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData({ orderBy, currentPage, itemsPerPage });
  }, [orderBy, currentPage, isDesktop, isTablet, isMobile]);

  const handleOptionChange = (option) => {
    const order = option === "최신순" ? "recent" : "favorite";
    setOrderBy(order);
  };

  const handlePageChange = (option) => {
    setCurrentPage(option);
  };

  return (
    <section className="all-products">
      <ProductSearch onOptionChange={handleOptionChange} />
      <ul className="list-area all-area">
        {items.map((item) => (
          <AllProductItem key={item.id} item={item} />
        ))}
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
