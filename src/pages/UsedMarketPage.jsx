import BestProductList from "../components/BestProductList";
import AllProductList from "../components/AllProductList";
import "../components/ProductPage.css";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const UsedMarketPage = () => {
  const responsiveSizes = {
    isDesktop: useMediaQuery({ minWidth: 1200 }),
    isTablet: useMediaQuery({ minWidth: 768, maxWidth: 1199 }),
    isMobile: useMediaQuery({ maxWidth: 767 }),
  };

  useEffect(() => {}, []);

  return (
    <main>
      <BestProductList responsiveSizes={responsiveSizes} />
      <AllProductList responsiveSizes={responsiveSizes} />
    </main>
  );
};

export default UsedMarketPage;
