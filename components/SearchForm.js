import { useState } from 'react';
import { useRouter } from 'next/router';

import styles from '@/components/SearchForm.module.css';

export default function SearchForm() {
  const router = useRouter();
  const [value, setValue] = useState();

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    router.push(`/boards?q=${value}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.searchContainer}>
        <img
          src='/image/searchIcon.svg'
          className={styles.searchIcon}
          alt='Search Icon'
        />
        <input
          className={styles.searchBar}
          name='q'
          value={value}
          onChange={handleChange}
          type='text'
          placeholder='검색할 상품을 입력해주세요'
        />
      </div>
    </form>
  );
}
