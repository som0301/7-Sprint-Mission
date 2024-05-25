import logoimg from "../assets/logoimg.svg";
import MenuTab from "./MenuTab";
import "../style/header.css";

function Header() {
  return (
    <div className="header">
      <div className="logo-menutab">
        <img class="logo-img" src={logoimg} alt="logoImg" />
        <MenuTab />
      </div>
      <button>로그인</button>
    </div>
  );
}

export default Header;
