import styles from './index.module.scss';
import Image from 'next/image';
import { IconMagnifier } from '@/public';

const SearchBar = () => {
  return (
    <div className={styles.searchInput}>
      <Image src={IconMagnifier} alt='돋보기 아이콘' />
      <input placeholder='검색할 상품을 입력해주세요' />
    </div>
  );
};

export default SearchBar;
