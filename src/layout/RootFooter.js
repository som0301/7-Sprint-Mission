import React from 'react';
import { Link } from 'react-router-dom';
import facebookIcon from '../assets/images/sns/ic-facebook-white.svg';
import twitterIcon from '../assets/images/sns/ic-twitter-white.svg';
import youtubeIcon from '../assets/images/sns/ic-youtube-white.svg';
import instagramIcon from '../assets/images/sns/ic-instagram-white.svg';

function RootFooter() {
	return (
		<footer id='footer'>
			<div className='inner'>
				<p className='copyright'>©codeit - 2024</p>

				<div className='guide'>
					<Link to={'/privacy'}>Privacy Policy</Link>
					<Link to={'/faq'}>FAQ</Link>
				</div>

				<ul className='sns_link'>
					<li>
						<a href='https://www.facebook.com/' target='_blank' rel='noreferrer noopener'>
							<img src={facebookIcon} alt='페이스북 아이콘' draggable='false' />
						</a>
					</li>
					<li>
						<a href='https://twitter.com/' target='_blank' rel='noreferrer noopener'>
							<img src={twitterIcon} alt='트위터 아이콘' draggable='false' />
						</a>
					</li>
					<li>
						<a href='https://www.youtube.com/' target='_blank' rel='noreferrer noopener'>
							<img src={youtubeIcon} alt='유튜브 아이콘' draggable='false' />
						</a>
					</li>
					<li>
						<a href='https://www.instagram.com/' target='_blank' rel='noreferrer noopener'>
							<img src={instagramIcon} alt='인스타그램 아이콘' draggable='false' />
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}

export default RootFooter;
