import { classModuleName } from '../../../modules';
import { Link } from 'react-router-dom';
import styles from './product.module.css';
import heart from '../../../images/icons/ic_heart.svg';

function Product({ item, width }) {
  const priceChangeKR = new Intl.NumberFormat('ko-KR').format(item.price);

  return (
    <Link to={`/items/${item.id}`} state={{ item: item }}>
      <div style={{ width: `${width}px` }} className={classModuleName('product-container', styles)}>
        <img style={{ height: `${width}px` }} src={item.images} alt={item.name} className={classModuleName('product-image', styles)} />
        <div className={classModuleName('product-information-container', styles)}>
          <p className={classModuleName('product-name', styles)}>{item.name}</p>
          <p className={classModuleName('product-price', styles)}>{priceChangeKR}원</p>
          <div className={classModuleName('product-favorite-container', styles)}>
            <img src={heart} alt="좋아요" className={classModuleName('product-heart', styles)}></img>
            <p className={classModuleName('product-favorite-count', styles)}>{item.favoriteCount}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Product;
