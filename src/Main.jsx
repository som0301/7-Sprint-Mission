import AddItem from './pages/AddItem';
import UsedMarket from './pages/UsedMarket';
import NotFound from './pages/NotFound';
import App from './components/App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/reset.css';
import './styles/global.css';
import Item from './pages/Item';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          {/* <Route index element={<HomePage />} /> */}
          <Route path='items'>
            <Route index element={<UsedMarket />} />
            <Route path=':itemId' element={<Item />} />
          </Route>
          <Route path='additem' element={<AddItem />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
