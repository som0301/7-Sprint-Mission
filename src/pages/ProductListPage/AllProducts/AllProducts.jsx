import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { getProductDataList } from '../../../api/productApi';
import useMediaQuery from '../../../hooks/useMediaQuery';
import ProductCard from '../ProductCard/ProductCard';
import ProductSearch from '../ProductSearch/ProductSearch';
import ProductSort from '../ProductSort/ProductSort';
import ProductPagiagion from '../ProductPagiagion/ProductPagiagion';

const PAGE_SIZES = {
	mobile: 4,
	tablet: 6,
	desktop: 12,
};

function AllProducts() {
	const mediaQuery = useMediaQuery();
	const pageSize = PAGE_SIZES[mediaQuery];
	const [page, setPage] = useState(1);
	const [totalPageSize, setTotalPageSize] = useState(0);
	const [orderBy, setOrderBy] = useState('recent');
	const [items, setItems] = useState([]);
	const [keyword, setKeyword] = useState('');
	const [error, setError] = useState(undefined);

	const getProductList = async (page, pageSize, orderBy, keyword) => {
		try {
			setError(undefined);
			const result = await getProductDataList({ page, pageSize, orderBy, keyword });
			setItems(result?.list);
			setTotalPageSize(Math.ceil(result?.totalCount / pageSize));
		} catch (e) {
			setError(e.message || '잠시후에 다시 시도해주세요.');
			console.error(e);
			setPage(1);
			setItems([]);
			setTotalPageSize(0);
		}
	};

	useEffect(() => {
		getProductList(page, pageSize, orderBy, keyword);
	}, [page, pageSize, orderBy, keyword]);

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
