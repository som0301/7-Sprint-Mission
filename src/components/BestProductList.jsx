import { useState } from "react";
import getItems from "../api";

function BestProductList() {
  const handleLoad = async (options) => {
    let result;
    try {
      result = await getItems("favorite", 0, 0);
      console.log(result.list);
    } catch (error) {
      console.log(error);
      return;
    } finally {
    }
  };

  handleLoad();
  // const { list } = result;

  return (
    <section>
      <div>베스트 상품</div>
    </section>
  );
}

export default BestProductList;
