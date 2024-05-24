import { Link } from "react-router-dom";
import Logo from "C:/Users/ouran/Desktop/tmp/7-Sprint-Mission/src/images/logo/panda-market-pandalogo.svg";
import "../style/Header.css";

function Header() {
    return (
        <header>
            <nav>
                <Link to="/"><img src={Logo} alt="판다마켓로고" className="headerLogo"></img></Link>
                <button className="menuList">자유게시판</button>
                <Link to="/items"><button className="menuList" >중고마켓</button></Link>
            </nav>
            <button className="loginButton">로그인</button>
        </header>
    );
}

export default Header;