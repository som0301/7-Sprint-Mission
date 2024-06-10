import { Outlet } from 'react-router-dom';
import Header from '/src/components/header/Header';
import { Helmet } from 'react-helmet';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>판다마켓 - 홈페이지</title>
      </Helmet>
      <h2> 홈페이지 </h2>
    </>
  );
}

export default HomePage;