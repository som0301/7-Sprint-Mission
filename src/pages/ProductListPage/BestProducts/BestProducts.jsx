import React, { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import { getProductDataList } from '../../../api/productApi';
import ProductCard from '../ProductCard/ProductCard';

const PAGE_SIZES = {
	mobile: 1,
	tablet: 2,
	desktop: 4,
};

function BestProducts({ deviceType }) {
	const pageSize = PAGE_SIZES[deviceType];
	const [items, setItems] = useState([]);
	const [error, setError] = useState(undefined);

	const getProductList = async (pageSize) => {
		try {
			setError(undefined);
			const result = await getProductDataList({ pageSize, orderBy: 'favorite' });
			setItems(result?.list);
		} catch (e) {
			setError(e.message);
			console.error(e);
			setItems([]);
		}
	};

	useEffect(() => {
		if (deviceType !== undefined) getProductList(pageSize);
	}, [deviceType, pageSize]);

	return (
		<article className='products'>
			<section className='products__head'>
				<h1>베스트 상품</h1>
			</section>

			<section className='products__body products__body--best'>{isEmpty(items) ? <b>{error}</b> : items.map((item) => <ProductCard key={`best-products-${item.id}`} item={item} />)}</section>
		</article>
	);
}

export default BestProducts;
