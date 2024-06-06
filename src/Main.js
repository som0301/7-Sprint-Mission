import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import App from './App';
import AddItemPage from './pages/AddItemPage';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<App />}
        ></Route>
        <Route
          path="/additem"
          element={<AddItemPage />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
