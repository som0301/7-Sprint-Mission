import React, { useState, useMemo } from 'react';
import useMediaQuery from '../../../hooks/useMediaQuery';
import SortIcon from '../../../assets/images/icon/ic-arrow-down.svg';
import MobileSortIcon from '../../../assets/images/icon/ic-sort.svg';
import './ProductSort.css';

const ORDERBY_TEXT = {
	recent: '최신순',
	favorite: '좋아요순',
};

function ProductSort({ orderBy, setOrderBy }) {
	const mediaQuery = useMediaQuery();
	const icon = useMemo(() => {
		switch (mediaQuery) {
			case 'mobile':
				return MobileSortIcon;
			default:
				return SortIcon;
		}
	}, [mediaQuery]);
	const [isVisible, setIsVisible] = useState(false);

	const handleToggle = () => setIsVisible(isVisible ? false : true);

	const handleClick = (e) => {
		e.preventDefault();
		setOrderBy(e.target.dataset.orderby);
		handleToggle();
	};

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
