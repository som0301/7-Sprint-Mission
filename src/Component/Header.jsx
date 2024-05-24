import Logo from "C:/Users/ouran/Desktop/tmp/7-Sprint-Mission/src/images/logo/panda-market-pandalogo.svg";
import "../style/Header.css";

function Header() {
    return (
        <header>
            <img src={Logo} alt="판다마켓로고"></img>
            <nav>
                <button className="menuList">자유게시판</button>
                <button className="menuList">중고마켓</button>
            </nav>
            <button className="loginButton">로그인</button>
        </header>
    );
}

export default Header;