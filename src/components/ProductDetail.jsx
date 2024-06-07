import styles from '../styles/ProductDetail.module.scss';
import heartImg from '../assets/icons/ic_heart_m.svg';
import moreBtnImg from '../assets/icons/ic_more.svg';
import Button from './Button';

function ProductDetail({ product }) {
  return (
    <div className={styles['product-detail']}>
      <img
        src={product.images[0]}
        alt='상품 이미지'
        className={styles['img']}
      />
      <div className={styles['info']}>
        <div className={styles['info-top']}>
          <h1 className={styles['title']}>{product.name}</h1>
          <Button className={styles['more-btn']}>
            <img src={moreBtnImg} alt='더보기 이미지' />
          </Button>
          <p className={styles['price']}>
            {Number(product.price).toLocaleString('ko-KR')}원
          </p>
          <div className={styles['description']}>
            <h2>상품 소개</h2>
            <p>{product.description}</p>
          </div>
          <div className={styles['tag-section']}>
            <h2>상품 태그</h2>
            <p className={styles['tag-container']}>
              {product.tags?.map((tag) => {
                return (
                  <span className={styles['tag']} key={tag}>
                    {'#' + tag}
                  </span>
                );
              })}
            </p>
          </div>
        </div>
        <div className={styles['info-bottom']}>
          <Button className={styles['favorite-btn']}>
            <img
              name={name}
              src={heartImg}
              alt='삭제 버튼'
              className='tag-btn-delete'
            />
            <p>{product.favoriteCount}</p>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
