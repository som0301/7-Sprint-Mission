import ProductList from './ProductList';
import './css/product-section.css';

export default function FavoriteProductSection({ items }) {
  return (
    <section className="product-section product-section__favorite">
      <h2 className="product-section__header-text">베스트 상품</h2>
      <ProductList className="product-list__favorite" items={items} />
    </section>
  );
}
