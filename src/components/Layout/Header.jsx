import React from "react";
import Logo from "../../assets/images/logo/logo.svg";
import { Link, NavLink } from "react-router-dom";

//  5.29 함수는 NavLink 컴포넌트의 style 속성에 전달되어 사용된다.
//  isActive: 이 매개변수는 객체 형태로 전달되며, 현재 링크가 활성화되어 있는지 여부를 나타낸다.
//  isActive가 true이면 해당 링크는 현재 경로와 일치하는 활성 상태
//  현재 링크가 현재 경로와 일치 하면  blue 색상으로 바꾸고 그렇지 않으면 아무것도 표현하지 않는다!

function getLinkStyle({ isActive }) {
  return { color: isActive ? "var(--blue)" : undefined };
}



function Header() {
  return (
    <header className="globalHeader">
      <div className="headerLeft">
        <Link to="/" className="headerLogo" aria-label="홈으로 이동">
          <img src={Logo} alt="판다마켓 로고" width="153" />
        </Link>

        <nav>
          <ul>
            <li>
              <NavLink to="/community" style={getLinkStyle}>
                자유게시판
              </NavLink>
            </li>
            <li>
              <NavLink to="/items" style={getLinkStyle}>
                중고마켓
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <Link to="/login" className="loginLink button">
        로그인
      </Link>
    </header>
  );
}

export default Header;