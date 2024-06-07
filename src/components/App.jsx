import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SignUp from './pages/login/signup';
import Items from './pages/items/Items';
import ProductDetail from './ui/productdetail/productdetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddItem from './pages/additem/additem';
import { useState, useEffect } from 'react';
import Nav from './ui/nav/nav';

const mediaQueryMobile = window.matchMedia('(min-width: 375px) and (max-width: 767px)');
const mediaQueryTablet = window.matchMedia('(min-width: 768px) and (max-width: 1200px)');
const mediaQueryDesktop = window.matchMedia('(min-width: 1201px)');

function mediaStateInit() {
  if (mediaQueryMobile.matches) {
    return 'mobile';
  } else if (mediaQueryTablet.matches) {
    return 'tablet';
  } else if (mediaQueryDesktop.matches) {
    return 'desktop';
  }
}

function App() {
  const [mediaState, setMediaState] = useState(mediaStateInit());

  const handleSetMediaState = (value) => setMediaState(value);

  function handleMediaQueryChange() {
    if (mediaQueryMobile.matches) {
      handleSetMediaState('mobile');
    } else if (mediaQueryTablet.matches) {
      handleSetMediaState('tablet');
    } else if (mediaQueryDesktop.matches) {
      handleSetMediaState('desktop');
    }
  }

  useEffect(() => {
    mediaQueryMobile.addEventListener('change', handleMediaQueryChange);
    mediaQueryTablet.addEventListener('change', handleMediaQueryChange);
    mediaQueryDesktop.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQueryMobile.removeEventListener('change', handleMediaQueryChange);
      mediaQueryTablet.removeEventListener('change', handleMediaQueryChange);
      mediaQueryDesktop.removeEventListener('change', handleMediaQueryChange);
    };
  }, [mediaState]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav mediaState={mediaState}/>}>
          <Route index element={<Home mediaState={mediaState}/>} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="items">
            <Route index element={<Items mediaState={mediaState} />}/>
            <Route path=':productId' element={<ProductDetail mediaState={mediaState} />}/>
          </Route>
          <Route path="additem" element={<AddItem mediaState={mediaState} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
