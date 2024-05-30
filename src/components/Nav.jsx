import { Link } from 'react-router-dom';
import CommonButton from './CommonButton';
import logoImgMobile from '../image-resource/panda-logo-mobile.svg';
import logoImg from '../image-resource/panda-logo.svg';
import '../styles/Nav.css';

export default function Nav({ isMobile }) {
  const responsiveLogoImg = isMobile ? logoImgMobile : logoImg;
  return (
    <nav className="nav-bar">
      <Link to="/">
        <img src={responsiveLogoImg} alt="판다마켓 로고" />
      </Link>
      <ul className="nav-bar__menu-list">
        <Link to="">
          <li className="menu-list__community">자유게시판</li>
        </Link>
        <Link to="/item">
          <li className="menu-list__flee-market">중고마켓</li>
        </Link>
      </ul>
      <CommonButton>로그인</CommonButton>
    </nav>
  );
}
