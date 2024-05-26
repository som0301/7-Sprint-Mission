import { useState, useEffect } from "react";
import getItems from "../api/api";
import AllProductItem from "./AllProductItem";
import ProductSearch from "./ProductSearch";
import Pagination from "./Pagination";

const ITEM_INIT = 10;
const PAGE_INIT = 1;

function AllProductList() {
  const [items, setItems] = useState([]);
  // 전체 페이지의 수
  const [totalCount, setTotalCount] = useState(0);
  // 현재 페이지 아이템 수
  // const [itemsPerPage, setItemPerPage] = useState(ITEM_INIT);
  // 페이지 정렬
  const [orderBy, setOrderBy] = useState("recent");

  const fetchData = async (options) => {
    let result;
    try {
      result = await getItems({
        orderBy: options.orderBy,
        pageSize: ITEM_INIT,
        page: PAGE_INIT,
      });
    } catch (error) {
      console.log(error);
      return;
    } finally {
    }

    setTotalCount(result.totalCount);

    const { list } = result;

    console.log("데이타 업뎃");
    console.log(list);

    setItems(list);
  };

  useEffect(() => {
    fetchData({ orderBy });
  }, [orderBy]);

  const handleOptionChange = (option) => {
    const order = option ? (option === "최신순" ? "recent" : "favorite") : "";

    setOrderBy(order);
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
        <Pagination totalCount={totalCount} />
      </div>
    </section>
  );
}

export default AllProductList;
