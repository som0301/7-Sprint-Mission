import styles from './Items.module.css';
import ItemsNav from '../../ui/itemnav/itemsnav';
import BestProductList from '../../ui/bestproductlist/bestproductlist';
import AllProductList from '../../ui/allproductlist/allproductlist';
import { classModuleName, reactiveItemCount } from '../../../modules';
import { useState, useEffect } from 'react';

const mediaQueryMobile = window.matchMedia('(min-width: 375px) and (max-width: 767px)');
const mediaQueryTablet = window.matchMedia('(min-width: 768px) and (max-width: 1200px)');
const mediaQueryDesktop = window.matchMedia('(min-width: 1201px)');

function Items() {
  const [mediaState, setMediaState] = useState('desktop');

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
    <>
      <ItemsNav mediaState={mediaState} />
      <main className={classModuleName('items-main-container', styles)}>
        <BestProductList mediaState={mediaState} />
        <AllProductList mediaState={mediaState} />
      </main>
    </>
  );
}

export default Items;
