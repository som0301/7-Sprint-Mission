import '@styles/ProductItem.css';
import iconHeartEmpty from '@assets/ic_heart_empty_small.svg';
import { useNavigate } from 'react-router-dom';
//import iconHeartFill from "/src/assets/ic_heart_fill.svg"; // 나중에 채워진 하트

interface Props {
  id: number;
  className: string;
  src: string;
  name: string;
  price: string;
  favoriteCount: string;
}

function ProductItem({
  id,
  className,
  src,
  name,
  price,
  favoriteCount,
}: Props) {
  let priceComma = price.toLocaleString();
  const navigate = useNavigate();

  const handleItemClick = (product: any) => {
    navigate(`${product.id}`);
  };

  return (
    <div
      className={`product-item ${className}`}
      onClick={() => handleItemClick({ id })}
    >
      <img className='product-image' src={src} />
      <div className='product-inform'>
        <p className='product-name'>{name}</p>
        <p className='product-price'>{`${priceComma}원`}</p>
        <div className='product-icon-heart-div'>
          <img src={iconHeartEmpty} alt='하트' />
          <p className='product-favorite-count'>{favoriteCount}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
