import { useEffect, useState } from "react";
import getItems from "../../../api/api";
import BestProductItem from "./BestProductItem";
import useDeviceType from "../../../hooks/useDeviceType";
import { Link } from "react-router-dom";

const ITEM_INIT = 4;
const TABLET_ITEM_NUM = 2;
const MOBILE_ITEM_NUM = 1;

function BestProductList() {
  // 아이템 리스트
  const [items, setItems] = useState([]);
  // 반응형 타입
  const deviceType = useDeviceType();
  // 현재 페이지 아이템 수
  const itemsPerPage =
    deviceType === "mobile"
      ? MOBILE_ITEM_NUM
      : deviceType === "tablet"
      ? TABLET_ITEM_NUM
      : ITEM_INIT;

  const fetchData = async (itemsPerPage) => {
    try {
      const result = await getItems({
        orderBy: "favorite",
        pageSize: itemsPerPage,
      });
      setItems(result.list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(itemsPerPage);
  }, [itemsPerPage]);

  return (
    <section className="best-products">
      <h1>베스트 상품</h1>
      <ul className="list-area">
        {items.map((item) => (
          <Link key={item.id} to={`/items/${item.id}`}>
            <BestProductItem item={item} />
          </Link>
        ))}
      </ul>
    </section>
  );
}

export default BestProductList;
