import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductData } from '../../api/productApi';
import { isEmpty } from 'lodash';

function ProductPage() {
	const navigate = useNavigate();
	const { itemId } = useParams();
	const [item, setItem] = useState(null);

	const getProduct = useCallback(async () => {
		try {
			const result = await getProductData(itemId);
			setItem(result);
		} catch (e) {
			console.error(e);
			alert(e.message);
			setItem(null);
			navigate('/items');
		}
	}, [itemId, navigate]);

	useEffect(() => {
		getProduct();
	}, [getProduct]);

	return (
		<div className='inner'>
			{!!item && (
				<>
					{isEmpty(item.images) ? <p>등록된 이미지가 없습니다.</p> : <img src={item.images} alt={`${item.name || ''} 이미지`} draggable='false' />}
					<p>제목: {item.name}</p>
					<p>가격: {Number(item.price).toLocaleString()}</p>
					<p>내용: {item.description}</p>
					<p>날짜: {item.createdAt}</p>
					<p>좋아요: {String(item.isFavorite)}</p>
					<p>좋아요수: {item.favoriteCount}</p>
				</>
			)}
		</div>
	);
}

export default ProductPage;
