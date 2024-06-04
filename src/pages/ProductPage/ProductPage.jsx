import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductInfo } from '../../api';
import { isEmpty } from 'lodash';

function ProductPage() {
	const { itemId } = useParams();
	const [item, setItem] = useState(null);
	const [error, setError] = useState(false);

	const getProduct = useCallback(async () => {
		try {
			setError(false);
			const result = await getProductInfo(itemId);
			setItem(result);
		} catch (e) {
			setError(e.message);
			console.error(e);
			setItem(null);
		}
	}, [itemId]);

	useEffect(() => {
		getProduct();
	}, [getProduct]);

	return (
		<div className='inner'>
			{isEmpty(item) ? (
				<b>{error || '제품 데이터를 가져오는데 실패했습니다.'}</b>
			) : (
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
