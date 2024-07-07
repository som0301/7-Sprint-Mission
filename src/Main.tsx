import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddItem from './pages/AddItem';
import UsedMarket from './pages/UsedMarket';
import NotFound from './pages/NotFound';
import App from './components/App';
import Item from './pages/Item';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='items'>
            <Route index element={<UsedMarket />} />
            <Route path=':itemId' element={<Item />} />
          </Route>
          <Route path='additem' element={<AddItem />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
