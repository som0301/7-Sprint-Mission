import styles from './itemsnav.module.css';
import logo from '../../../images/logos/logo.png';
import logoSmall from '../../../images/logos/logo-small.svg';
import Button from '../../modules/button/button';
import '../../../css/define.css';
import { classModuleName } from '../../../modules';
import { useLocation, Link, NavLink } from 'react-router-dom';

const viewLogoStyle = {
  desktop: logo,
  tablet: logo,
  mobile: logoSmall,
};

function getLinkStyle({ isActive }) {
  return {
    color: isActive ? 'var(--color-brand-blue)' : 'var(--color-coolgray-600)',
  };
}

function ItemsNav({ mediaState }) {
  const location = useLocation();
  const currentLocation = location.pathname;

  const currentPageIsLogin = () => {
    if (currentLocation === '/login' || currentLocation === '/signup') return true;
    else return false;
  };

  if (currentPageIsLogin()) {
    console.log(currentLocation);
    return <></>;
  } else {
    return (
      <nav className={classModuleName('items-nav', styles)}>
        <div className={classModuleName('nav-container', styles)}>
          <Link to="/">
            <img src={viewLogoStyle[mediaState]} alt="로고" className={classModuleName('nav-logo', styles)} />
          </Link>
          {currentLocation !== '/' && (
            <div className={classModuleName('nav-link-container', styles)}>
              <NavLink style={getLinkStyle} to="/" className={classModuleName('nav-link', styles)}>
                자유게시판
              </NavLink>
              <NavLink style={getLinkStyle} to="items" className={classModuleName('nav-link', styles)}>
                중고마켓
              </NavLink>
            </div>
          )}
        </div>
        <Link to='/login'>
          <Button>로그인</Button>
        </Link>
      </nav>
    );
  }
}

export default ItemsNav;
