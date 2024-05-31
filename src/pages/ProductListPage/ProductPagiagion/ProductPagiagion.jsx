import React from 'react';
import LeftCaretIcon from '../../../assets/images/icon/caret/ic-caret-L.svg';
import RightCaretIcon from '../../../assets/images/icon/caret/ic-caret-R.svg';
import GreyLeftCaretIcon from '../../../assets/images/icon/caret/ic-caret-L-grey.svg';
import GreyRightCaretIcon from '../../../assets/images/icon/caret/ic-caret-R-grey.svg';
import './ProductPagiagion.css';

const DEFAULT_RANGE = 5;

/**
 * @function getPageRange
 * @description 페이지네이션 범위 생성
 * @param {number} currentPage - 현재 페이지
 * @param {number} totalPageSize - 총 페이지
 * @param {number} maximumRange - 페이지 버튼 숫자
 * @returns {Array} - 페이지넘버를 담은 배열
 */
const getPageRange = (currentPage, totalPageSize, maximumRange) => {
	let startPage = 1;
	if (maximumRange <= currentPage) startPage += Math.floor((currentPage - 1) / maximumRange) * maximumRange;
	let remainPage = totalPageSize - startPage + 1;
	const pageRange = Array.from({ length: Math.min(maximumRange, remainPage) }, (item, index) => index + startPage);
	return pageRange;
};

function ProductPagiagion({ currentPage, totalPageSize, maximumRange = DEFAULT_RANGE, setPage }) {
	const handleClick = (num) => setPage(num);

	const pageRange = getPageRange(currentPage, totalPageSize, maximumRange);

	return (
		<article className='pagination'>
			<section className='pagination__left'>
				<button className='pagination__button' disabled={currentPage === 1} onClick={() => handleClick(Math.max(1, currentPage - 1))}>
					<img src={currentPage === 1 ? GreyLeftCaretIcon : LeftCaretIcon} alt='이전 페이지 아이콘' draggable='false' />
				</button>
			</section>

			<section className='pagination__center'>
				{pageRange?.map((item) => (
					<button key={`page-num-${item}`} className={`pagination__button${item === currentPage ? ' active' : ''}`} onClick={() => handleClick(item)}>
						{item}
					</button>
				))}
			</section>

			<section className='pagination__right'>
				<button className='pagination__button' disabled={currentPage === totalPageSize} onClick={() => handleClick(Math.min(totalPageSize, currentPage + 1))}>
					<img src={currentPage === totalPageSize ? GreyRightCaretIcon : RightCaretIcon} alt='이전 페이지 아이콘' draggable='false' />
				</button>
			</section>
		</article>
	);
}

export default ProductPagiagion;
