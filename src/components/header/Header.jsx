import Button, { StyledButton } from '../common/Button';
import TabMenu from './TabMenu';

import LogoImage from './LogoImage';
import LogoText from './LogoText';
import { useState } from 'react';

import { useResponsiveApi } from '../../Responsive';

function Header() {
  const { isMobile } = useResponsiveApi();
  return (
    <header>
      <div className='header-left'>
        {!isMobile ? (
          <LogoImage id='header-logo' />
        ) : (
          <LogoText id='header-logo' />
        )}
        <TabMenu class='header__tab' />
      </div>
      <StyledButton size='small'>로그인</StyledButton>
    </header>
  );
}

export default Header;
