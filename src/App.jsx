import Nav from './components/Nav';
import './styles/reset.css';
import './styles/App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default App;
