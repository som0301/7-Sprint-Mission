import '../styles/ProductList.scss';
import { Link } from 'react-router-dom';
import heartImg from '../assets/icons/ic_heart_s.svg';
import ProductController from './ProductController';
import Pagination from './Pagination';
import { Product } from '../types/product';

interface Props {
  items: Product[];
  order: string;
  page: number;
  handleSelect: (selectedValue: string) => void;
  onClickPage: (pageNum: number) => void;
  totalProdCount: number;
  allProdPageSize: number;
}

function ProductListItem({ item }: { item: Product }) {
  return (
    <Link to={'/items/' + item.id}>
      <div className='product-list-item'>
        <img className='imgbox' src={item.images[0]} alt={item.name} />
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
  page,
  handleSelect,
  onClickPage,
  totalProdCount,
  allProdPageSize,
}: Props) {
  return (
    <div className='product-list'>
      <ProductController handleSelect={handleSelect} />
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
