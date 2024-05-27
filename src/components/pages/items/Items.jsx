import styles from './Items.module.css';
import ItemsNav from '../../ui/itemnav/itemsnav';
import BestProductList from '../../ui/bestproductlist/bestproductlist';
import AllProductList from '../../ui/allproductlist/allproductlist';
import { classModuleName } from '../../../modules';
import { useState, useEffect } from 'react';

const viewBestProductItemCount = {
  desktop: 4,
  tablet: 2,
  mobile: 1,
};

function Items() {

  return (
    <>
      <ItemsNav />
      <main className={classModuleName('items-main-container', styles)}>
        <BestProductList />
        <AllProductList />
      </main>
    </>
  );
}

export default Items;
