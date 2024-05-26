import React from 'react';
import ProductSectionHeader from './ProductSectionHeader.js';
import ProductList from './ProductList.js';
import './css/product-section.css';

export default function FavoriteProductSection({ items }) {
  const HEADER_TEXT = '베스트 상품';
  return (
    <section className="product-section product-section__favorite">
      <ProductSectionHeader text={HEADER_TEXT} />
      <ProductList className="product-list__favorite" items={items} />
    </section>
  );
}
