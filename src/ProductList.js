import heartImg from './image-resource/panda-product-favorite-count.svg';
function ProductListItem({ item }) {
  const { images, name, price, favoriteCount, description } = item;
  return (
    <>
      <img src={images} alt={description} />
      <h3>{name}</h3>
      <span>{price}원</span>
      <span>
        <img src={heartImg} alt="하트" />
        {favoriteCount}
      </span>
    </>
  );
}

export default function ProductList({ items }) {
  console.log(items);
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <ProductListItem item={item} />
        </li>
      ))}
    </ul>
  );
}
