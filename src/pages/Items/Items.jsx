import React, { useState, useEffect } from 'react';
import './items.css';
import BestProductList from './BestProductList';
import AllProductList from './AllProductList';

const Items = () => {
  const [bestPageSize, setBestPageSize] = useState(4);
  const [allPageSize, setAllPageSize] = useState(10);
  const [allTitle, setAllTitle] = useState('');
  const [allTopContainer, setAllTopContainer] = useState('');

  useEffect(() => {
    const handleResize = () => {
      let newBestPageSize;
      let newAllPageSize;

      if (window.innerWidth >= 1200) {
        newBestPageSize = 4;
        newAllPageSize = 10;
        setAllTitle('전체 상품');
        setAllTopContainer('pc_tablet');
      } else if (window.innerWidth >= 768 && window.innerWidth <= 1199) {
        newBestPageSize = 2;
        newAllPageSize = 6;
        setAllTitle('판매 중인 상품');
        setAllTopContainer('pc_tablet');
      } else if (window.innerWidth >= 0 && window.innerWidth <= 767) {
        newBestPageSize = 1;
        newAllPageSize = 4;
        setAllTitle('판매 중인 상품');
        setAllTopContainer('mobile');
      }

      if (newBestPageSize !== bestPageSize) {
        setBestPageSize(newBestPageSize);
      }

      if (newAllPageSize !== allPageSize) {
        setAllPageSize(newAllPageSize);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [bestPageSize, allPageSize]);

  return (
    <div className="container">
      <BestProductList pageSize={bestPageSize} />
      <AllProductList
        pageSize={allPageSize}
        title={allTitle}
        TopContainer={allTopContainer}
      />
    </div>
  );
};

export default Items;
