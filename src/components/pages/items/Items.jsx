import styles from './Items.module.css';
import ItemsNav from '../../ui/itemnav/itemsnav';
import BestProductList from '../../ui/bestproductlist/bestproductlist';
import AllProductList from '../../ui/allproductlist/allproductlist';
import { classModuleName, reactiveItemCount } from '../../../modules';
import { useState, useEffect } from 'react';

const viewBestProductItemCount = {
  desktop: 4,
  tablet: 2,
  mobile: 1,
};

function Items() {
  const [mediaState, setMediaState] = useState('desktop');

  const handleSetMediaState = (value) => setMediaState(value);

  reactiveItemCount({ handleSetMediaState });
  return (
    <>
      <ItemsNav />
      <main className={classModuleName('items-main-container', styles)}>
        <BestProductList mediaState={mediaState} />
        <AllProductList mediaState={mediaState} />
      </main>
    </>
  );
}

export default Items;
