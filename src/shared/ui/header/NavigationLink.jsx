import { Link, NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const homeStyle = css`
    width: 153px;
    height: 51px;
    background-image: url('src/shared/assets/image/panda-market-logo.png');
    background-size: contain;
    background-repeat: no-repeat;
    text-indent: -9999px;
    overflow: hidden;
    white-space: nowrap;

    @media (min-width: 375px) and (max-width: 767px) {
        width: 81px;
        height: 40px;
        background-image: url('src/shared/assets/image/panda-market-logo-mobile.png');
    }
`;

const navStyle = css`
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 700;
    line-height: 21.48px;
    color: var(--gray600);

    @media (min-width: 375px) and (max-width: 767px) {
        font-size: 16px;
        line-height: 19.09px;
    }
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

const StyledNavLink = styled(NavLink)`
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

const StyledLink = styled(Link)`
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

function NavigationLink({ href, text, type }) {
    if (type === 'nav') {
        return (
            <StyledNavLink to={href} className={type}>
                {text}
            </StyledNavLink>
        );
    }
    if (type !== 'nav') {
        return (
            <StyledLink to={href} className={type}>
                {text}
            </StyledLink>
        );
    }
}

export default NavigationLink;
