import React, { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import { getDataFunc } from '../../../api';
import useMediaQuery from '../../../hooks/useMediaQuery';
import ProductCard from '../ProductCard/ProductCard';

const PAGE_SIZES = {
	mobile: 1,
	tablet: 2,
	desktop: 4,
};

function BestProducts() {
	const mediaQuery = useMediaQuery();
	const pageSize = PAGE_SIZES[mediaQuery];
	const [items, setItems] = useState([]);

	const getProduct = async (pageSize) => {
		try {
			const result = await getDataFunc({ params: { orderBy: 'favorite', pageSize } });
			setItems(result?.list);
		} catch (e) {
			console.error(e);
		}
	};

	useEffect(() => {
		getProduct(pageSize);
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
