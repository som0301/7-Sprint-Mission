import styles from './Items.module.css';
import ItemsNav from '../../ui/itemnav/itemsnav';
import BestProductList from '../../ui/bestproductlist/bestproductlist';
import AllProductList from '../../ui/allproductlist/allproductlist';
import { classModuleName } from '../../../modules';
import Button from '../../modules/button/button';



function Items({mediaState}) {
  
  return (
    <>
      <main className={classModuleName('items-main-container', styles)}>
        <BestProductList mediaState={mediaState} />
        <AllProductList mediaState={mediaState} />
      </main>
    </>
  );
}

export default Items;
