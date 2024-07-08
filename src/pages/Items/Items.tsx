import { useState, useEffect } from "react";
import "./Items.css";
import BestProductList from "./BestProductList";
import AllProductList from "./AllProductList";

const Items = () => {
  const [bestPageSize, setBestPageSize] = useState<number>(4);
  const [allPageSize, setAllPageSize] = useState<number>(10);
  const [allTitle, setAllTitle] = useState<string>("");
  const [allTopContainer, setAllTopContainer] = useState<string>("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setBestPageSize(4);
        setAllPageSize(10);
        setAllTitle("전체 상품");
        setAllTopContainer("pc_tablet");
      } else if (window.innerWidth >= 768 && window.innerWidth <= 1199) {
        setBestPageSize(2);
        setAllPageSize(6);
        setAllTitle("판매 중인 상품");
        setAllTopContainer("pc_tablet");
      } else if (window.innerWidth >= 0 && window.innerWidth <= 767) {
        setBestPageSize(1);
        setAllPageSize(4);
        setAllTitle("판매 중인 상품");
        setAllTopContainer("mobile");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [bestPageSize, allPageSize]);

  return (
    <div className="container">
      <BestProductList pageSize={bestPageSize} />
      <AllProductList
        pageSize={allPageSize}
        title={allTitle}
        TopContainer={allTopContainer}
      />
    </div>
  );
};

export default Items;
