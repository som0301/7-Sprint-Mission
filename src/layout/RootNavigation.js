import React from 'react';
import { NavLink } from 'react-router-dom';

function RootNavigation() {
	return (
		<nav>
			<NavLink to={'/board'}>자유게시판</NavLink>
			<NavLink to={'/items'}>중고마켓</NavLink>
		</nav>
	);
}

export default RootNavigation;
