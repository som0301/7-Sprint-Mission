import { Outlet } from 'react-router-dom';
import Header from '/src/components/header/Header';

function HomePage() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default HomePage;
