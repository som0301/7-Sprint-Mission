import styled from 'styled-components';

import { useDeviceStore } from 'shared/store';

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
  z-index: 2;
  padding: ${({ $deviceType }) => {
    if ($deviceType === 'desktop') return '0 200px';
    if ($deviceType === 'tablet') return '0 34px 0 24px';
    if ($deviceType === 'mobile') return '0 16px';
  }};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  column-gap: ${({ $deviceType }) => {
    if ($deviceType === 'desktop') return '32px;';
    if ($deviceType === 'tablet') return '20px;';
    if ($deviceType === 'mobile') return '16px';
  }};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: ${({ $deviceType }) => ($deviceType === 'mobile' ? '8px' : '39px;')};
`;

export function Header() {
  const { deviceType } = useViewport();

  return (
    <HeaderWrapper $deviceType={deviceType}>
      <Container $deviceType={deviceType}>
        <h1>
          <NavigationLink href='/' text='판다마켓' type='home' />
        </h1>
        <Wrapper $deviceType={deviceType}>
          <NavigationLink href='/freeboard' text='자유게시판' type='nav' />
          <NavigationLink href='/items' text='중고마켓' type='nav' />
        </Wrapper>
      </Container>
      <NavigationLink href='/login' text='로그인' type='login' />
    </HeaderWrapper>
  );
}
