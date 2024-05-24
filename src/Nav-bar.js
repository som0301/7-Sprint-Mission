import Button from './Button';
import logoImgMobile from './image-resource/panda-logo-mobile.svg';
// import logoImg from './image-resource/panda-logo.svg';
import './css/Nav-bar.css';

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <img src={logoImgMobile} alt="판다마켓 로고" />
      <ul className="nav-bar__menu-list">
        <li className="menu-list__community">자유게시판</li>
        <li className="menu-list__flee-market">중고마켓</li>
      </ul>
      <Button>로그인</Button>
    </nav>
  );
}
