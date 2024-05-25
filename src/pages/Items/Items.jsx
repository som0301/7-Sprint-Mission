import React from 'react';
import './items.css';
import BestProductList from './BestProductList';
import AllProductList from './AllProductList';

const Items = () => {
  return (
    <div className="container">
      <BestProductList />
      <AllProductList />
    </div>
  );
};

export default Items;
