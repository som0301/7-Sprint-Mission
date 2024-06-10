import ItemsNav from './../itemnav/itemsnav';
import { Outlet } from 'react-router-dom';

function Nav({mediaState}) {
  return (
    <>
      <ItemsNav mediaState={mediaState}/>
      <Outlet />
    </>
  );
}

export default Nav;
