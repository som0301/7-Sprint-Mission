import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { getDataFunc } from '../../../api';
import { BREAK_POINTS } from '../../../funcs';
import ProductCard from '../ProductCard/ProductCard';
import ProductSearch from '../ProductSearch/ProductSearch';
import ProductSort from '../ProductSort/ProductSort';
import ProductPagiagion from '../ProductPagiagion/ProductPagiagion';

const getPageSize = () => {
	const width = window.innerWidth;
	if (width <= BREAK_POINTS['mobile']) return 4;
	else if (width <= BREAK_POINTS['tablet']) return 6;
	else return 12;
};

function AllProducts() {
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(getPageSize());
	const [totalPageSize, setTotalPageSize] = useState(0);
	const [orderBy, setOrderBy] = useState('recent');
	const [items, setItems] = useState([]);
	const [keyword, setKeyword] = useState('');

	const getProduct = async (page, pageSize, orderBy, keyword) => {
		try {
			const result = await getDataFunc({ params: { page, pageSize, orderBy, keyword } });
			setItems(result?.list);
			setTotalPageSize(Math.ceil(result?.totalCount / pageSize));
		} catch (e) {
			console.error(e);
			setError(e.message);
		}
	};

	useEffect(() => {
		getProduct(page, pageSize, orderBy, keyword);

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [page, orderBy, pageSize, keyword]);

	return (
		<article className='products'>
			<section className='products__head'>
				<h1>전체 상품</h1>

				<Link to={'/additem'} className='btn btn--small'>
					상품 등록하기
				</Link>

				<ProductSearch setKeyword={setKeyword} />

				<ProductSort orderBy={orderBy} setOrderBy={setOrderBy} />
			</section>

			<section className='products__body products__body--all'>{isEmpty(items) ? <b>{error}</b> : items.map((item) => <ProductCard key={`all-products-${item.id}`} item={item} />)}</section>

			<section className='products__foot'>
				<ProductPagiagion currentPage={page} totalPageSize={totalPageSize} maximumPage={5} setPage={setPage} />
			</section>
		</article>
	);
}

export default AllProducts;
