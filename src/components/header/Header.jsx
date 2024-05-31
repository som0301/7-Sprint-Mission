import { StyledButton } from '../common/Button';
import TabMenu from './TabMenu';

import LogoImage from './LogoImage';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <div className='header-left'>
        <LogoImage type='header' />
        <TabMenu class='header__tab' />
      </div>
      <StyledButton size='small' onClick={() => navigate('/login')}>
        로그인
      </StyledButton>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 70px;
  width: 100%;
  padding: 0 200px;

  background-color: #ffffff;
  border-bottom: 1px solid;
  border-color: #dfdfdf;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  .header-left {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  @media (max-width: 1199px) {
    padding: 0 24px;

    .header-left {
      gap: 20px;
    }
  }

  @media (max-width: 767px) {
    padding: 0 16px;

    .header-left {
      gap: 16px;
    }
  }
`;

export default Header;
