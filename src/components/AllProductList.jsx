import { useState, useEffect } from "react";
import getItems from "../api/api";
import AllProductItem from "./AllProductItem";
import ProductSearch from "./ProductSearch";
import "./ProductPage.css";

const ITEM_INIT = 10;
const PAGE_INIT = 1;

function AllProductList() {
  const [items, setItems] = useState([]);

  const fetchData = async (options) => {
    let result;
    try {
      result = await getItems({
        orderBy: "recent",
        pageSize: ITEM_INIT,
        page: PAGE_INIT,
      });
    } catch (error) {
      console.log(error);
      return;
    } finally {
    }

    const { list } = result;
    setItems(list);
    console.log(list);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="all-products">
      <div className="all-products-bar">
        <h1>전체 상품</h1>
        <ProductSearch />
      </div>
      <ul className="list-area all-area">
        <AllProductItem items={items} />
      </ul>
    </section>
  );
}

export default AllProductList;
