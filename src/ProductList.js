import heartImg from './image-resource/panda-product-favorite-count.svg';
import './css/product-list.css';

function ProductListItem({ item }) {
  const { id, images, price, favoriteCount, name } = item;
  return (
    <li className="product" key={id}>
      <img className="product__image" src={images} alt={name} />
      <h4 className="product__name">{name}</h4>
      <span className="product__price">{price}원</span>
      <span className="product__favorite">
        <img className="heart-symbol" src={heartImg} alt="하트" />
        {favoriteCount}
      </span>
    </li>
  );
}

export default function ProductList({ className, items }) {
  console.log(items);
  return (
    <ul className={className}>
      {items.map((item) => (
        <ProductListItem item={item} />
      ))}
    </ul>
  );
}
