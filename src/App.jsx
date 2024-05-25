import { Routes, Route } from 'react-router-dom';
import Items from './pages/Items/index';
import Community from './pages/Community/Community';
import './App.css';
import Header from './Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/items" element={<Items />} />
      </Routes>
    </>
  );
}

const Home = () => {
  return <div>Home Page</div>;
};

export default App;
