import Button from './Button';
import ProductList from './ProductList';

export default function AllProductSection() {
  const allProducts = [];
  return (
    <section>
      <h2>판매 중인 상품</h2>
      <Button>상품 등록하기</Button>
      <ProductList products={allProducts} />
    </section>
  );
}
