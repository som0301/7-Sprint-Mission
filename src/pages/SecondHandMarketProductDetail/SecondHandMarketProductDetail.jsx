import React from "react";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import "./SecondHandMarketProductDetail.css";
import ProductDetailSection from "../../components/ProductDetailSection/ProductDetailSection";
import ContactSection from "../../components/ContactSection/ContactSection";
import CommentsSection from "../../components/CommentsSection/CommentsSection";
import { returnIcon } from "../../assets/images";

const ReturnItemsButton = () => {
  return (
    <Link
      to="/items"
      className="second-hand-market-product-detail-return-button"
    >
      <span>목록으로 돌아가기</span>
      <img src={returnIcon} alt="목록으로 돌아가기 버튼 화살표모양 아이콘" />
    </Link>
  );
};

const SecondHandMarketProductDetail = () => {
  return (
    <div className="second-hand-market-product-detail-container">
      <Header />
      <ProductDetailSection />
      <ContactSection />
      <CommentsSection />
      <ReturnItemsButton />
    </div>
  );
};

export default SecondHandMarketProductDetail;
