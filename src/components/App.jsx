import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SignUp from './pages/login/signup';
import Items from './pages/items/Items';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/items" element={<Items />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
