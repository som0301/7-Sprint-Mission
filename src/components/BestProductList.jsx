import { useEffect, useState } from "react";
import getItems from "../api/api";
import BestProductItem from "./BestProductItem";
import useDeviceType from "../hooks/useDeviceType";

const ITEM_INIT = 4;
const TABLET_ITEM_NUM = 2;
const MOBILE_ITEM_NUM = 1;
function BestProductList() {
  // 아이템 리스트
  const [items, setItems] = useState([]);
  // 현재 페이지 아이템 수
  const [itemsPerPage, setItemPerPage] = useState(ITEM_INIT);
  // 반응형 타입
  const { isTablet, isMobile, isDesktop } = useDeviceType();

  const fetchData = async ({ itemsPerPage }) => {
    let result;
    try {
      result = await getItems({ orderBy: "favorite", pageSize: itemsPerPage });
    } catch (error) {
      console.log(error);
      return;
    } finally {
    }

    const { list } = result;
    setItems(list);

    if (isMobile) setItemPerPage(() => MOBILE_ITEM_NUM);
    else if (isTablet) {
      setItemPerPage(() => TABLET_ITEM_NUM);
    } else {
      setItemPerPage(() => ITEM_INIT);
    }
  };

  useEffect(() => {
    fetchData({ itemsPerPage });
  }, [itemsPerPage, isTablet, isMobile, isDesktop]);

  return (
    <section className="best-products">
      <h1>베스트 상품</h1>
      <ul className="list-area">
        <BestProductItem items={items} />
      </ul>
    </section>
  );
}

export default BestProductList;
