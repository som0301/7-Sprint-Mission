import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDataFunc } from '../../api';

function ProductPage() {
	const { itemId } = useParams();
	const [item, setItem] = useState({
		images: '',
		name: '',
		price: 0,
		description: '',
		createdAt: '',
		favoriteCount: 0,
		isFavorite: false,
	});

	const getProduct = useCallback(async () => {
		try {
			const result = await getDataFunc({ id: itemId });
			setItem(result);
		} catch (e) {
			console.error(e);
		}
	}, [itemId]);

	useEffect(() => {
		getProduct();
	}, [getProduct]);

	return (
		<div className='inner'>
			<img src={item.images} alt={`${item.name} 이미지`} draggable='false' />
			<p>제목: {item.name}</p>
			<p>가격: {Number(item.price).toLocaleString()}</p>
			<p>내용: {item.description}</p>
			<p>날짜: {item.createdAt}</p>
			<p>좋아요: {String(item.isFavorite)}</p>
			<p>좋아요수: {item.favoriteCount}</p>
		</div>
	);
}

export default ProductPage;
