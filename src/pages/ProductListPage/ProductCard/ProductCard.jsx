import React from 'react';
import { Link } from 'react-router-dom';
import favoriteIcon from '../../../assets/images/icon/ic-favorite.svg';
import './ProductCard.css';

function ProductCard({ item }) {
	const { id, images, name, price, favoriteCount } = item;
	return (
		<Link to={`/items/${id}`} className='productCard'>
			<section className='productCard__img'>
				<img src={images[0]} alt={`${name} 이미지`} draggable='false' />
			</section>
			<section className='productCard__name'>
				<p>{name}</p>
			</section>
			<section className='productCard__price'>
				<span>{price.toLocaleString()}</span>
				<span>원</span>
			</section>
			<section className='productCard__like'>
				<img src={favoriteIcon} alt='좋아요 아이콘' height='16' draggable='false' />
				<p>{favoriteCount}</p>
			</section>
		</Link>
	);
}

export default ProductCard;
