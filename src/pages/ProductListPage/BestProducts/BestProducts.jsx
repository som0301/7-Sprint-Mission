import React, { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import { getProductDataList } from '../../../api/productApi';
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
	const [error, setError] = useState(false);

	const getProductList = async (pageSize) => {
		try {
			setError(false);
			const result = await getProductDataList({ pageSize, orderBy: 'favorite' });
			setItems(result?.list);
		} catch (e) {
			console.error(e);
			setError(e.message);
		}
	};

	useEffect(() => {
		getProductList(pageSize);
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
