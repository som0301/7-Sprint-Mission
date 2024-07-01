import { Link } from "react-router-dom";
import facebook from "../../assets/images/social/facebook-logo.svg";
import twitter from "../../assets/images/social/twitter-logo.svg";
import youtube from "../../assets/images/social/youtube-logo.svg";
import instagram from "../../assets/images/social/instagram-logo.svg";
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <footer>
        <p className='copyright'>@codeit - 2024</p>
        <div className='footer-menu'>
          <Link to='/privacy'>Privacy Policy</Link>
          <Link to='/faq'>FAQ</Link>
        </div>
        <div className='sns'>
          <a
            href='https://www.facebook.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={facebook} alt='페이스북' />
          </a>
          <a
            href='https://www.twitter.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={twitter} alt='트위터' />
          </a>
          <a
            href='https://www.youtube.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={youtube} alt='유튜브' />
          </a>
          <a
            href='https://www.instagram.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={instagram} alt='인스타그램' />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
