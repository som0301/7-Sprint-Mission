import '../styles/ProductList.scss';
import { Link } from 'react-router-dom';
import heartImg from '../assets/icons/ic_heart_s.svg';
import ProductController from '../components/ProductController';
import Pagination from '../components/Pagination';

function ProductListItem({ item }) {
  return (
    <Link to={'/items/' + item.id}>
      <div className='product-list-item'>
        <img className='imgbox' src={item.images[0]} alt={item.title} />
        <div className='info'>
          <p>{item.name}</p>
          <p className='price'>
            {Number(item.price).toLocaleString('ko-KR')}원
          </p>
          <div className='favorite'>
            <img src={heartImg} alt='좋아요수'></img>
            <p>{item.favoriteCount}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

function ProductList({
  items,
  order,
  page,
  handleSelect,
  onClickPage,
  totalProdCount,
  allProdPageSize,
}) {
  return (
    <div className='product-list'>
      <ProductController order={order} handleSelect={handleSelect} />
      <div className='container'>
        {items?.map((item) => {
          return <ProductListItem key={item.id} item={item} />;
        })}
      </div>
      <Pagination
        page={page}
        onClickPage={onClickPage}
        totalProdCount={totalProdCount}
        allProdPageSize={allProdPageSize}
      />
    </div>
  );
}

export default ProductList;
