import iconTwitter from '@assets/images/ic_twitter.svg';
import iconYoutube from '@assets/images/ic_youtube.svg';
import iconFacebook from '@assets/images/ic_facebook.svg';
import iconInstagram from '@assets/images/ic_instagram.svg';
import SNS from './SNS';
import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
  return (
    <footer>
      <div className='footer-content'>
        <div className='copyrights'>
          <p className='copyright footer-text'>@Codeit - 2024</p>
        </div>
        <div className='links'>
          <Link to='/privacy' className='footer-text link'>
            Privacy Policy
          </Link>
          <Link to='/faq' className='footer-text link'>
            FAQ
          </Link>
        </div>
        <div className='social'>
          <SNS
            link='https://www.facebook.com'
            image={iconFacebook}
            alt='페이스북'
          />
          <SNS
            link='https://www.twitter.com'
            image={iconTwitter}
            alt='트위터'
          />
          <SNS
            link='https://www.youtube.com'
            image={iconYoutube}
            alt='유튜브'
          />
          <SNS
            link='https://www.instagram.com'
            image={iconInstagram}
            alt='인스타그램'
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
