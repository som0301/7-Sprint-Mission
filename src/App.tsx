import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '/src/styles/Reset.css';
import './App.css';
import '/src/styles/Button.css';

import ItemsPage from './pages/ItemsPage';
import NotFoundPage from './pages/NotFoundPage';
import AddItemPage from './pages/AddItemPage';
import HomePage from './pages/HomePage';
import BoardPage from './pages/BoardPage';
import { ResponsiveProvider } from './hooks/Responsive';
import ItemDetailPage from './pages/ItemDetailPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Index from './pages';

function App() {
  return (
    <>
      <BrowserRouter>
        <ResponsiveProvider>
          <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/' element={<Index />}>
              <Route index element={<HomePage />} />
              <Route path='board' element={<BoardPage />} />
              <Route path='items' element={<ItemsPage />} />
              <Route
                path='items/:productId'
                element={<ItemDetailPage />}
              ></Route>
              <Route path='additem' element={<AddItemPage />} />
              <Route path='*' element={<NotFoundPage />} />
            </Route>
          </Routes>
        </ResponsiveProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
