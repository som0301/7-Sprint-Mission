import styles from './itemsnav.module.css';
import logo from '../../../images/logos/logo.png';
import logoSmall from '../../../images/logos/logo-small.svg';
import Button from '../../modules/button/button';
import '../../../css/define.css';
import { classModuleName } from '../../../modules';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const viewLogoStyle = {
  desktop: logo,
  tablet: logo,
  mobile: logoSmall,
};

function ItemsNav({ mediaState, rightComponent }) {
  const location = useLocation();
  const className = location.pathname === '/items' || location.pathname === '/additem' ? 'nav-link current-location' : 'nav-link';

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
    {rightComponent}
    </nav>
  );
}

export default ItemsNav;
