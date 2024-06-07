import styles from './productdetail.module.css';
import { classModuleName } from '../../../modules';
import { useLocation } from 'react-router-dom';


function ProductDetail() {
  const location = useLocation();
  const item = location.state.item;

  console.log(item);

  return (
  <div className={classModuleName('main',styles)}>
  </div>
  )
}

export default ProductDetail;