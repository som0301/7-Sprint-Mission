import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Header } from './Header';
import { Footer } from './Footer';

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
