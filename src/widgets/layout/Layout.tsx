import { Outlet } from 'react-router-dom';

import { Helmet } from 'react-helmet';

import { Footer } from './Footer';
import { Header } from './Header';

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
