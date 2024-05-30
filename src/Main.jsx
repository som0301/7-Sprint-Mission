import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ItemsPage from './pages/ItemsPage';
import AddItemPage from './pages/AddItemPage';
import App from './App';

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="items" element={<ItemsPage />} />
          <Route path="additem" element={<AddItemPage />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
