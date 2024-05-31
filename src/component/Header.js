import headerLogo from "../assets/images/topLogo.png";
import "./Header.css";
import "./Library.css";

function Header() {
  return (
    <header>
      <div className="header-box">
        <img className="header-logo" src={headerLogo} alt="panda" />
        <div className="boards">
          <span className="board">자유게시판</span>
          <a href="/items">
            <span className="board">중고마켓</span>
          </a>
        </div>
        <button className="small-button">로그인</button>
      </div>
    </header>
  );
}

export default Header;
