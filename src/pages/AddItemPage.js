import S from './AddItemPage.module.css';
import HeaderAddPage from '../components/HeaderAddPage';
import FileInput from '../components/FileInput';
import ProductDetail from '../components/ProductDetail';
import { useEffect, useState } from 'react';

function AddItemPage() {
  const [checkValid, setCheckValid] = useState(false);

  return (
    <>
      <HeaderAddPage />
      <main className={S.main_container}>
        <div className={S.main_top}>
          <p className={S.top_label}>상품 등록하기</p>
          <button
            className={S.top_add_button}
            disabled={!checkValid}
          >
            등록
          </button>
        </div>

        <p className={S.product_add__label}>상품 이미지</p>
        <div className={S.main_product_add}>
          <FileInput />
        </div>

        <ProductDetail onChange={isValid => setCheckValid(isValid)} />
      </main>
    </>
  );
}

export default AddItemPage;
