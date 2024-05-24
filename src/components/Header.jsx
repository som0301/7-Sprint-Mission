import "./Header.css";
import Button from "./Button.jsx";
import logoIcon from "../assets/images/logo_icon.png";
import logoTextNormal from "../assets/images/logo_text_normal.svg";
import logoTextSmall from "../assets/images/logo_text_small.svg";

function Header({ device }) {
  const logoText = device === "mobile" ? logoTextSmall : logoTextNormal;

  return (
    <header className="Header">
      <div className="Header-logo">
        <img src={logoIcon}></img>
        <img src={logoText}></img>
      </div>
      <nav className="Header-nav-bar">
        <a href="/community">자유게시판</a>
        <a href="/items">중고마켓</a>
      </nav>
      <Button className="small">로그인</Button>
    </header>
  );
}

export default Header;
