import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import HomeLayout from './layouts/HomeLayout';
import Home from './components/Home';
import LoginLayout from './layouts/LoginLayout';
import Login from './components/Login';
import SignUpLayout from './layouts/SignUpLayout';
import SignUp from './components/SignUp';
import ItemsLayout from './layouts/ItemsLayout';
import Items from './components/Items';
import AddItemLayout from './layouts/AddItemLayout';
import AddItem from './components/AddItem';

export default App;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/login" element={<LoginLayout />}>
            <Route index element={<Login />} />
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
      </BrowserRouter>
    </>
  );
}
