import heartImg from './image-resource/panda-product-favorite-count.svg';
import './css/product-list.css';

function ProductListItem({ item }) {
  const { images, price, favoriteCount, name } = item;
  return (
    <>
      <img className="product__image" src={images} alt={name} />
      <h4 className="product__name">{name}</h4>
      <span className="product__price">{price}원</span>
      <span className="product__favorite">
        <img className="heart-symbol" src={heartImg} alt="하트" />
        {favoriteCount}
      </span>
    </>
  );
}

export default function ProductList({ className, items }) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li className="product" key={item.id}>
          <ProductListItem item={item} />
        </li>
      ))}
    </ul>
  );
}
