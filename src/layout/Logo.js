import { Link } from 'react-router-dom';
import LogoImage from '../assets/images/logo/logo.svg';

function Logo() {
	return (
		<Link to={'/'}>
			<img src={LogoImage} alt='판다마켓 로고' draggable='false' />
		</Link>
	);
}

export default Logo;
