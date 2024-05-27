import styles from './itemsnav.module.css';
import logo from '../../../images/logos/logo.png';
import logoSmall from '../../../images/logos/logo-small.svg';
import '../../../css/define.css';
import { classModuleName, reactiveItemCount } from '../../../modules';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const viewLogoStyle = {
  desktop: logo,
  tablet: logo,
  mobile: logoSmall,
};

function ItemsNav() {
  const [mediaState, setMediaState] = useState('desktop');
  const location = useLocation();
  const className = location.pathname === '/items' ? 'nav-link current-location' : 'nav-link';

  const handleSetMediaState = (value) => setMediaState(value);

  reactiveItemCount({ handleSetMediaState });

  useEffect(() => {}, [mediaState]);

  return (
    <nav className={classModuleName('items-nav', styles)}>
      <div className={classModuleName('nav-container', styles)}>
        <a href="/">
          <img src={viewLogoStyle[mediaState]} alt="로고" className={classModuleName('nav-logo', styles)} />
        </a>
        <div className={classModuleName('nav-link-container', styles)}>
          <a href="/" className={classModuleName('nav-link', styles)}>
            자유게시판
          </a>
          <a href="/items" className={classModuleName(className, styles)}>
            중고마켓
          </a>
        </div>
      </div>
      <button type="button" className={classModuleName('nav-button', styles)}>
        로그인
      </button>
    </nav>
  );
}

export default ItemsNav;
