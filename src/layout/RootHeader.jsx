import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import RootNavigation from './RootNavigation';

function RootHeader() {
	return (
		<header id='header'>
			<div className='inner'>
				<section className='header__left'>
					<section className='header__logo'>
						<Logo />
					</section>

					<section className='header__menu'>
						<RootNavigation />
					</section>
				</section>

				<section className='header__buttons'>
					<Link to={'/login'} className='btn btn--small'>
						로그인
					</Link>
				</section>
			</div>
		</header>
	);
}

export default RootHeader;
