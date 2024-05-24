import { Link } from 'react-router-dom';

function RootNavigation() {
	return (
		<nav>
			<Link to={'/'}>자유게시판</Link>
			<Link to={'/items'}>중고마켓</Link>
		</nav>
	);
}

export default RootNavigation;
