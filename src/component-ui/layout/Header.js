import { Link, NavLink } from 'react-router-dom'
import logoImgUrl from '../../image/logo.svg'
import './Header.css'

function getLinkstyle({ isActive }) {
  return { color: isActive ? 'var(--blue)' : undefined }
}

function Header() {
  return (
    <header>
      <div className="header_nav">
        <Link to="/" className="header_logo">
          <img src={logoImgUrl} alt="판다마켓 로고" />
        </Link>
        <nav>
          <ul>
            <li>
              <NavLink to="/board" style={getLinkstyle}>
                자유게시판
              </NavLink>
            </li>
            <li>
              <NavLink to="/items" style={getLinkstyle}>
                중고마켓
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <Link to="/sigin" className="btn-primary header_btn_signin">
        로그인
      </Link>
    </header>
  )
}

export default Header
