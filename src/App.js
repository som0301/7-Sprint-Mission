// import './App.css';
import { Link, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Items from './components/Items';
import Login from './components/Login';
import { useNavigation } from './components/useNavigation';
import ItemsLayout from './pages/ItemsLayout';
import SignUp from './components/SignUp';
import SignUpLayout from './pages/SignUpLayout';
import AddItem from './components/AddItem';
import AddItemLayout from './pages/AddItemLayout';

export default App;

function App() {
  const { navigate } = useNavigation();
  const handleNavigate = () => {
    navigate('/items');
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />}>
          <Route />
        </Route>
        <Route path="/signup" element={<SignUpLayout />}>
          <Route index element={<SignUp />} />
        </Route>
        <Route path="/items" element={<ItemsLayout />}>
          <Route index element={<Items />} />
        </Route>
        <Route path="/additem" element={<AddItemLayout />}>
          <Route index element={<AddItem />} />
        </Route>
      </Routes>
      <div>
        <Link to="/items">구경하러 가기</Link>
        <button onClick={handleNavigate}>구경하러 가기</button>
      </div>
    </>
  );
}
