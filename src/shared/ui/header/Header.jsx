import styled from 'styled-components';
import NavigationLink from './NavigationLink';

const HeaderWrapper = styled.header`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    width: 100%;
    top: 0;
    left: 0;
    background: #fff;
    border-bottom: 1px solid #dfdfdf;
    padding: 0 200px;

    @media (min-width: 768px) and (max-width: 1199px) {
        padding-right: 34px;
        padding-left: 24px;
    }

    @media (min-width: 375px) and (max-width: 767px) {
        padding: 0 16px;
    }
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    column-gap: 32px;

    @media (min-width: 768px) and (max-width: 1199px) {
        column-gap: 20px;
    }

    @media (min-width: 375px) and (max-width: 767px) {
        column-gap: 16px;
    }
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    column-gap: 39px;

    @media (min-width: 375px) and (max-width: 767px) {
        column-gap: 8px;
    }
`;

function Header() {
    return (
        <HeaderWrapper>
            <Container>
                <h1>
                    <NavigationLink href="/" text="판다마켓" type="home" />
                </h1>
                <Wrapper>
                    <NavigationLink href="/freeboard" text="자유게시판" type="nav" />
                    <NavigationLink href="/items" text="중고마켓" type="nav" />
                </Wrapper>
            </Container>
            <NavigationLink href="/login" text="로그인" type="login" />
        </HeaderWrapper>
    );
}

export default Header;
