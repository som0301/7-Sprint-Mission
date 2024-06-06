import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function RootNavigation() {
	const { pathname } = useLocation();
	return (
		<nav>
			<NavLink to={'/board'}>자유게시판</NavLink>
			<NavLink to={'/items'} className={pathname.includes('additem') ? 'active' : ''}>
				중고마켓
			</NavLink>
		</nav>
	);
}

export default RootNavigation;
