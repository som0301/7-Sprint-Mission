import { NavLink, useLocation  } from "react-router-dom";
import Logo from "../../src/images/logo/panda-market-pandalogo.svg";
import "../../src/style/header.css";
import { useEffect, useRef } from "react";
import maskIcon from "../../src/images/home/maskicon.png"

function Header() {
    const location = useLocation();
    const marketAction = location.pathname === `/items` || location.pathname === `/additem`;
    const mask = useRef();
    const loginButton = useRef();

    useEffect(()=> {
        if(location.pathname === `/additem`) {
            mask.current.style.setProperty("display", "block");
            loginButton.current.style.setProperty("display", "none");
        }
        else {
            mask.current.style.setProperty("display", "none");
            loginButton.current.style.setProperty("display", "block");
        }
    }, [location.pathname]);

    return (
        <header>
            <nav>
                <NavLink to="/"><img src={Logo} alt="판다마켓로고" className="headerLogo"></img></NavLink>
                <button id="menuList">자유게시판</button>
                <NavLink to="/items" className={ marketAction ? "activemenu" : undefined }>
                    <button id="menuList" >중고마켓</button>
                </NavLink>
            </nav>
            <button className="loginButton" ref={loginButton}>로그인</button>
            <img src={maskIcon} className="mask" ref={mask} alt="사용자" />
        </header>
    );
}

export default Header;