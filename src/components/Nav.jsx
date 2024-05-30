import { Link } from 'react-router-dom';
import CommonButton from './CommonButton';
import useMediaQuery from '../hooks/useMediaQuery';
import logoImgMobile from '../image-resource/panda-logo-mobile.svg';
import logoImg from '../image-resource/panda-logo.svg';
import '../styles/Nav.css';

export default function Nav() {
  const [deviceType] = useMediaQuery();
  const isMobile = deviceType === 'Mobile';
  const responsiveLogoImg = isMobile ? logoImgMobile : logoImg;
  return (
    <nav className="nav-bar">
      <Link to="/">
        <img src={responsiveLogoImg} alt="판다마켓 로고" />
      </Link>
      <ul className="nav-bar__menu-list">
        <Link to="/community">
          <li className="menu-list__community">자유게시판</li>
        </Link>
        <Link to="/items">
          <li className="menu-list__flee-market">중고마켓</li>
        </Link>
      </ul>
      <CommonButton path="/login">로그인</CommonButton>
    </nav>
  );
}
