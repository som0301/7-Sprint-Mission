import React from 'react';
import BestProducts from './BestProducts/BestProducts';
import AllProducts from './AllProducts/AllProducts';
import './ProductListPage.css';

function ProductListPage() {
	return (
		<div className='inner'>
			<BestProducts />
			<AllProducts />
		</div>
	);
}

export default ProductListPage;
