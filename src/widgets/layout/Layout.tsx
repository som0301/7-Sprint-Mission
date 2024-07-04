import { Outlet } from 'react-router-dom';

import { Helmet } from 'react-helmet';

import { Footer } from './Footer';
import { Header } from './Header';

// Header, Footer, Outlet을 렌더링하는 Layout 컴포넌트
export function Layout() {
  return (
    <>
      <Helmet>
        <title>판다 마켓</title>
      </Helmet>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
