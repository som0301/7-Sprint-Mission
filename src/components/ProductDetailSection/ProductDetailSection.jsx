import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsDetail } from "../../api";
import "./ProductDetailSection.css";
import { heartIcon } from "../../assets/images";

const Tag = ({ tag }) => {
  return <span className="product-detail-section-tag">{`#${tag}`}</span>;
};

const ProductDetailSection = () => {
  const [item, setItem] = useState({});
  const { favoriteCount, images, tags, name, description, price } = item;
  const { productId } = useParams();

  const handleLoad = async () => {
    const productData = await getProductsDetail(productId);
    setItem(productData);
  };

  useEffect(() => {
    handleLoad();
  }, [productId]);

  return (
    <div className="product-detail-section-container">
      <img
        className="product-detail-section-image"
        src={images}
        alt={`상품 상세페이지 ${name} 이미지`}
      />
      <div className="product-detail-section-info">
        <h1 className="product-detail-section-info-name">{name} 팔아요</h1>
        <h2 className="product-detail-section-info-price">{price}원</h2>
        <hr />
        <div className="product-detail-section-info-desc">
          <h3>상품소개</h3>
          <p>{description}</p>
        </div>
        <div className="product-detail-section-info-tags">
          <h3>상품 태그</h3>
          <div className="product-detail-section-info-tag-list">
            {tags && tags.map((tag, index) => <Tag key={index} tag={tag} />)}
          </div>
        </div>
        <button className="product-detail-section-info-favorite-button">
          <img
            className="product-detail-section-info-heart-icon"
            src={heartIcon}
            alt="좋아요 기능을 하는 하트모양 아이콘"
          />
          <span className="product-detail-section-info-favorite-count">
            {favoriteCount}
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProductDetailSection;
