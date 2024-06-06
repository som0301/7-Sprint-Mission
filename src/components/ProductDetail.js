import { useEffect, useState } from 'react';
import S from './ProductDetail.module.css';

const ProductDetail = ({ onChange }) => {
  const [productName, setProductName] = useState('');
  const [productIntroduction, setProductIntroduction] = useState('');
  const [price, setPrice] = useState('');
  const [tags, setTags] = useState('');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    onChange && onChange(formValid);
  }, [formValid]);

  useEffect(() => {
    const isValid =
      productName.trim() !== '' &&
      productIntroduction.trim() !== '' &&
      price.trim() !== '' &&
      tags.trim() !== '';

    setFormValid(isValid);
  }, [productName, productIntroduction, price, tags]);

  return (
    <>
      <div>
        <label>상품명</label>
        <input
          className={S.product_input}
          type="text"
          placeholder="상품명을 입력해주세요"
          value={productName}
          onChange={e => setProductName(e.target.value)}
        />
      </div>
      <div>
        <label className={S.product_introduce}>상품 소개</label>
        <textarea
          className={S.product_textarea}
          placeholder="상품 소개를 입력해주세요"
          value={productIntroduction}
          onChange={e => setProductIntroduction(e.target.value)}
          style={{ height: 200 }}
        />
      </div>
      <div>
        <label>판매가격</label>
        <input
          className={S.product_input}
          type="text"
          placeholder="판매 가격을 입력해주세요"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
      </div>
      <div>
        <label>태그</label>
        <input
          className={S.product_input}
          type="text"
          placeholder="태그를 입력해주세요"
          value={tags}
          onChange={e => setTags(e.target.value)}
        />
      </div>
    </>
  );
};

export default ProductDetail;
