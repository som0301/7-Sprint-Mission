import "../pages/MarketPage.css";
import { Link } from "react-router-dom";

function ItemBox({ items, type }) {
  return (
    <ul className={`item-list ${type}`}>
      {items.map((item) => (
        <li key={item.id} className='item'>
          <Link to={`/items/${item.id}`} className='item-link'>
            <div className='item-box'>
              <img src={item.images[0]} alt={item.name} className='item-img' />
              <div className='item-info'>
                <div className='item-name'>{item.name}</div>
                <div className='item-price'>
                  {item.price.toLocaleString()}원
                </div>
                <div className='item-favorite-count'>
                  ♡ {item.favoriteCount}
                </div>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default ItemBox;
