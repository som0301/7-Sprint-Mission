import S from './AddItemPage.module.css';
import HeaderAddPage from '../components/HeaderAddPage';
import FileInput from '../components/FileInput';

function AddItemPage() {
  return (
    <>
      <HeaderAddPage />
      <main className={S.main_container}>
        <div className={S.main_top}>
          <p className={S.top_label}>상품 등록하기</p>
          <button className={S.top_add_button}>등록</button>
        </div>

        <p className={S.product_add__label}>상품 이미지</p>
        <div className={S.main_product_add}>
          <FileInput />
        </div>

        <div></div>
      </main>
    </>
  );
}

export default AddItemPage;
