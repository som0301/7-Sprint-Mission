import ProductSectionHeader from './ProductSectionHeader';
import ProductList from './ProductList';
import '../styles/product-section.css';

const HEADER_TEXT = '베스트 상품';

export default function FavoriteProductSection({ items }) {
  return (
    <section className="product-section product-section__favorite">
      <ProductSectionHeader text={HEADER_TEXT} />
      <ProductList className="product-list__favorite" items={items} />
    </section>
  );
}
