import logoimg from "../assets/logoimg.svg";
import MenuTab from "./MenuTab";
import "../style/header.css";

function Header() {
  return (
    <div className="header">
      <img class="logo-img" src={logoimg} alt="logoImg" />
      {/* <div className="menu-tab"> */}
      <MenuTab />
      {/* </div> */}
    </div>
  );
}

export default Header;
