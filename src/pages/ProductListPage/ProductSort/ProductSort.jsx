import React, { useEffect, useState } from 'react';
import { BREAK_POINTS } from '../../../funcs';
import SortIcon from '../../../assets/images/icon/ic-arrow-down.svg';
import MobileSortIcon from '../../../assets/images/icon/ic-sort.svg';
import './ProductSort.css';

const ORDERBY_TEXT = {
	recent: '최신순',
	favorite: '좋아요순',
};

const getPageSize = () => {
	const width = window.innerWidth;
	if (width <= BREAK_POINTS['mobile']) return MobileSortIcon;
	else return SortIcon;
};

function ProductSort({ orderBy, changeOrderBy }) {
	const [isVisible, setIsVisible] = useState(false);
	const [icon, setIcon] = useState(SortIcon);

	const handleClick = (e) => {
		e.preventDefault();
		changeOrderBy(e.target.dataset.orderby);
		handleToggle();
	};

	const handleToggle = () => {
		setIsVisible(isVisible ? false : true);
	};

	const handleResize = () => {
		setIcon(getPageSize());
	};

	useEffect(() => {
		handleResize();

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<article className='dropdown-list'>
			<button className='dropdown-list__button' onClick={handleToggle}>
				{icon === SortIcon && ORDERBY_TEXT[orderBy]}
				<img src={icon} alt='드롭다운메뉴 아이콘' draggable='false' />
			</button>

			{isVisible && (
				<section className='dropdown-menu'>
					{Object.keys(ORDERBY_TEXT)?.map((item) => (
						<button key={`key-orderby-${item}`} className='dropdown-menu__button' data-orderby={item} onClick={handleClick}>
							{ORDERBY_TEXT[item]}
						</button>
					))}
				</section>
			)}
		</article>
	);
}

export default ProductSort;
