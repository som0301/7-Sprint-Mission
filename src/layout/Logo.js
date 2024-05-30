import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BREAK_POINTS } from '../funcs';
import DesktopLogoImage from '../assets/images/logo/logo.svg';
import MobileLogoImage from '../assets/images/logo/logo-text.png';

const getPageSize = (type, size) => {
	const width = window.innerWidth;
	if (width <= BREAK_POINTS['mobile']) return MobileLogoImage;
	else return DesktopLogoImage;
};

function Logo() {
	const [logoImage, setLogoImage] = useState(getPageSize());

	const handleResize = () => {
		setLogoImage(getPageSize());
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<Link to={'/'}>
			<img src={logoImage} alt='판다마켓 로고' draggable='false' />
		</Link>
	);
}

export default Logo;
