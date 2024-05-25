import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './pages/Home/Home';
import Items from './pages/Items/Items';
import Community from './pages/Community/Community';
import Login from './pages/Login/Login';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/items" element={<Items />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
