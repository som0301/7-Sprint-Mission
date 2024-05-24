import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import Items from './pages/Items';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/items" element={<Items />} />
    </Routes>
  );
};

export default Router;
