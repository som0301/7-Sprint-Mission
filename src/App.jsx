import React from 'react';
import Header from './components/Header';
import BestProduct from './components/BestProduct';
import AllProduct from './components/AllProduct';
import Style from './App.module.css';

function App() {
  return (
    <div>
      <Header />
      <main>
        <BestProduct />
        <AllProduct />
      </main>
    </div>
  );
}

export default App;
