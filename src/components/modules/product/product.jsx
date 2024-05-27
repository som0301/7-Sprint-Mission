import { classModuleName } from '../../../modules';
import styles from './product.module.css';
import heart from '../../../images/icons/ic_heart.svg';

function Product({ images, name, price, favoriteCount, width }) {
  const priceChangeKR = new Intl.NumberFormat('ko-KR').format(price);

  return (
    <div style={{ width: `${width}px` }} className={classModuleName('product-container', styles)}>
      <img style={{ height: `${width}px` }} src={images} alt={name} className={classModuleName('product-image', styles)} />
      <div className={classModuleName('product-information-container', styles)}>
        <p className={classModuleName('product-name', styles)}>{name}</p>
        <p className={classModuleName('product-price', styles)}>{priceChangeKR}원</p>
        <div className={classModuleName('product-favorite-container', styles)}>
          <img src={heart} alt="좋아요" className={classModuleName('product-heart', styles)}></img>
          <p className={classModuleName('product-favorite-count', styles)}>{favoriteCount}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
