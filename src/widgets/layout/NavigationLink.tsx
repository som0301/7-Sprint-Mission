import { Link, NavLink } from 'react-router-dom';

import styled, { css } from 'styled-components';

import { DeviceTypeProps } from 'shared/lib';

import MobileLogo from '/images/panda-market-logo-mobile.png';
import Logo from '/images/panda-market-logo.png';

interface NavigationLinkProps extends DeviceTypeProps {
  href: string;
  text: string;
  type: 'home' | 'nav' | 'login';
}

export function NavigationLink({ href, text, type, $deviceType }: NavigationLinkProps) {
  if (type === 'nav') {
    return (
      <StyledNavLink to={href} className={type} $deviceType={$deviceType}>
        {text}
      </StyledNavLink>
    );
  } else {
    return (
      <StyledLink to={href} className={type} $deviceType={$deviceType}>
        {text}
      </StyledLink>
    );
  }
}

const homeStyle = css<DeviceTypeProps>`
  width: ${({ $deviceType }) => ($deviceType === 'mobile' ? '81px' : '153px')};
  height: ${({ $deviceType }) => ($deviceType === 'mobile' ? '40px' : '51px;')};
  background-image: url(${({ $deviceType }) => ($deviceType === 'mobile' ? MobileLogo : Logo)});
  background-size: contain;
  background-repeat: no-repeat;
  text-indent: -9999px;
  overflow: hidden;
  white-space: nowrap;
`;

const navStyle = css<DeviceTypeProps>`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: ${({ $deviceType }) => ($deviceType === 'mobile' ? '16px' : '18px;')};
  line-height: ${({ $deviceType }) => ($deviceType === 'mobile' ? '19.09px' : '21.48px;')};
  color: var(--gray600);
`;

const loginStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 88px;
  height: 42px;
  background: var(--blue);
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  color: #fff;

  &:hover {
    background: #1967d6;
  }
`;

const StyledNavLink = styled(NavLink)<DeviceTypeProps>`
  &.home {
    ${homeStyle}
  }

  &.nav {
    ${navStyle}
  }

  &.login {
    ${loginStyle}
  }

  &.active {
    color: var(--blue);
  }
`;

const StyledLink = styled(Link)<DeviceTypeProps>`
  &.home {
    ${homeStyle}
  }

  &.nav {
    ${navStyle}
  }

  &.login {
    ${loginStyle}
  }
`;
