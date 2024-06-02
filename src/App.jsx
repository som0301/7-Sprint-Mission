import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Items from './pages/Items/Items';
import AddItem from './pages/Items/AddItem/AddItem';
import Community from './pages/Community/Community';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/community" element={<Community />} />
        <Route path="/items" element={<Items />} />
        <Route path="/additem" element={<AddItem />} />
      </Routes>
    </>
  );
}

export default App;
