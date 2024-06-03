import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

function ItemsLayout() {
  return (
    <div>
      <NavBar />

      <Outlet />

      <footer></footer>
    </div>
  );
}

export default ItemsLayout;
