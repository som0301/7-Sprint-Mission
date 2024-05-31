import Button from '../common/Button';
import TabMenu from './TabMenu';

import LogoImage from './LogoImage';
import LogoText from './LogoText';

const flexColumnStyle = {
  display: 'flex',
  displayDirction: 'column',
  alignItems: 'center',
  gap: '32px',
};

function Header({ isMobile }) {
  return (
    <header>
      <div style={flexColumnStyle}>
        {isMobile ? (
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
