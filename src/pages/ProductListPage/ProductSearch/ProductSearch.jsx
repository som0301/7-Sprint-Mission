import React, { useState } from 'react';
import SearchIcon from '../../../assets/images/icon/ic-search.svg';
import './ProductSearch.css';

function ProductSearch({ setKeyword }) {
	const [value, setValue] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		setKeyword(value);
	};

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<form className='search-form' onSubmit={handleSubmit}>
			<label htmlFor='searchFormInput'>
				<img src={SearchIcon} alt='검색 아이콘' />
				<input type='text' id='searchFormInput' placeholder='검색할 상품을 입력해주세요' value={value} onChange={handleChange} draggable='false' />
			</label>
		</form>
	);
}

export default ProductSearch;
