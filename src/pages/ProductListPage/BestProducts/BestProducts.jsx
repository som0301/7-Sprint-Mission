import React, { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import { getDataFunc } from '../../../api';
import { BREAK_POINTS } from '../../../funcs';
import ProductCard from '../ProductCard/ProductCard';

const getPageSize = () => {
	const width = window.innerWidth;
	if (width <= BREAK_POINTS['mobile']) return 1;
	else if (width <= BREAK_POINTS['tablet']) return 2;
	else return 4;
};

function BestProducts() {
	const [pageSize, setPageSize] = useState(getPageSize());
	const [items, setItems] = useState([]);

	const getProduct = async (pageSize) => {
		try {
			const result = await getDataFunc({ params: { orderBy: 'favorite', pageSize } });
			setItems(result?.list);
		} catch (e) {
			console.error(e);
		}
	};

	const handleResize = () => {
		setPageSize(getPageSize());
	};

	useEffect(() => {
		getProduct(pageSize);

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [pageSize]);

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
