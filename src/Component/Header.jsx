import { NavLink } from "react-router-dom";
import Logo from "C:/Users/ouran/Desktop/tmp/7-Sprint-Mission/src/images/logo/panda-market-pandalogo.svg";
import "../style/Header.css";

function Header() {
    return (
        <header>
            <nav>
                <NavLink to="/"><img src={Logo} alt="판다마켓로고" className="headerLogo"></img></NavLink>
                <button id="menuList">자유게시판</button>
                <NavLink to="/items" 
                className={({ isActive  }) => 
                    isActive  ? "activemenu" : undefined }>
                    <button id="menuList" >중고마켓</button>
                </NavLink>
            </nav>
            <button className="loginButton">로그인</button>
        </header>
    );
}

export default Header;