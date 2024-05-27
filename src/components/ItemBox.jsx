function ItemBox({ items }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <div key={item.id} className='item-box'>
            <img src={item.images[0]} alt={item.name} className='item-img' />
            <div className='item-info'>
              <div className='item-name'>{item.name}</div>
              <div className='item-price'>{item.price.toLocaleString()}원</div>
              <div className='item-favorite-count'>❤️ {item.favoriteCount}</div>
            </div>
          </div>
        );
      })}
    </ul>
  );
}

export default ItemBox;
