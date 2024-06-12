import React from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import BestProducts from './BestProducts/BestProducts';
import AllProducts from './AllProducts/AllProducts';
import './ProductListPage.css';

function ProductListPage() {
	const deviceType = useMediaQuery();
	return (
		<div className='inner'>
			<BestProducts deviceType={deviceType} />
			<AllProducts deviceType={deviceType} />
		</div>
	);
}

export default ProductListPage;
