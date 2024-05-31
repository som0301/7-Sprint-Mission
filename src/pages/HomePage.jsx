import { Outlet } from 'react-router-dom';
import Header from '/src/components/header/Header';
import { Helmet } from 'react-helmet';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>판다마켓 - 일상의 모든 물건을 거래해보세요</title>
      </Helmet>
      <Header />
      <Outlet />
    </>
  );
}

export default HomePage;
