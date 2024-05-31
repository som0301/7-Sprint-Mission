import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { getItems } from "../../../api/api";


// 5. 30 반응형에 사이즈에 따라 page 사이즈 값 리턴
const getPageSize = () => {

  // 5. 30 window.innerWidth 브라우저 창(viewport)의 현재 너비(픽셀 단위)를 반환 한다고 한다.
  const width = window.innerWidth;
  if (width < 768) {
    // Mobile viewport
    return 1;
  } else if (width < 1280) {
    // Tablet viewport
    return 2;
  } else {
    // Desktop viewport
    return 4;
  }
};

const BestItems = () => {
  const [ itemList, setItemList ] = useState([]);
  const [ pageSize, setPageSize] = useState(getPageSize);

  // 5. 30 api 에  props로 orderBy와 pageSize 전달 해서  priducts 값을 받아오고 itmeList 값을 변경
  const fetchData = async ({ orderBy, pageSize }) => {
    const products = await getItems({ orderBy, pageSize });
    setItemList(products.list);
  };


  // 5. 30 useEffect를 통해 처음렌더가 될때 브라우저 사이즈를 확인 하고 해당되는 사이즈에 pageSize를 전달 함
  //  코드 실행 순서가  useState 를  먼저  초기화 하고   그다음으로  useEffect가 실행 된다.  기억해야 할것!!
  //  ********생명주기  강의 다시 한번  볼것

  useEffect(() => {
    const pageResize = () => {
      setPageSize(getPageSize())
    };
    
    // widow 에 이벤트 속성 부여 "resize"는 onclick 같은 속성으로 사이즈가 변경 되면 이벤트가 발생됨
    window.addEventListener("resize", pageResize);
    fetchData({orderBy: "favorite", pageSize});

    // 이벤트 초기화 해줌.
    return () => {
      window.removeEventListener("resize", pageResize);
    };
  }, [pageSize]);

  return (
    <div className="bestItemsContainer"> 
      <h1 className="bestItemsTitle">베스트 상품</h1>
      <div>
        {/* 화살표 함수에서 중괄호를 사용하지 않고 소괄호를 사용하는것은 암묵적 값을 반환해서 라고 한다. */}
        {itemList?.map((item) => (
          <ItemCard item={item} key={item.id} />
        ))};
      </div>
    </div>
  );
}


export default BestItems;