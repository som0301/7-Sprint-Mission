import Link from "next/link";
import Image from "next/image";
import facebook from "@/assets/images/social/facebook-logo.svg";
import twitter from "@/assets/images/social/twitter-logo.svg";
import youtube from "@/assets/images/social/youtube-logo.svg";
import instagram from "@/assets/images/social/instagram-logo.svg";
import "@/styles/Footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <p className='copyright'>&copy; codeit - 2024</p>
      <div className='footer-menu'>
        <Link href='/privacy'>Privacy Policy</Link>
        <Link href='/faq'>FAQ</Link>
      </div>
      <div className='sns'>
        <a
          href='https://www.facebook.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image src={facebook} alt='페이스북' width={20} height={20} />
        </a>
        <a
          href='https://www.twitter.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image src={twitter} alt='트위터' width={20} height={20} />
        </a>
        <a
          href='https://www.youtube.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image src={youtube} alt='유튜브' width={20} height={20} />
        </a>
        <a
          href='https://www.instagram.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image src={instagram} alt='인스타그램' width={20} height={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
