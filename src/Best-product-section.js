import ProductList from './ProductList';

export default function BestProductSection({ items }) {
  return (
    <section>
      <h2>베스트 상품</h2>
      <ProductList items={items} />
    </section>
  );
}
