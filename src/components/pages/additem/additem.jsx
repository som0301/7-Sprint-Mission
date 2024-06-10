import Button from './../../modules/button/button';
import styles from './additem.module.css';
import Tag from '../../modules/tag/tag';
import { classModuleName } from '../../../modules';
import { useState, useEffect } from 'react';
import ImageFileInput from './../../modules/imagefileinput/imagefileinput';

const buttonStyle = {
  padding: '11.5px 30px',
};

const INITIAL_VALUES = {
  images: '',
  tags: [],
  price: '',
  description: '',
  name: '',
};

function AddItem({ mediaState }) {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [enableSubmit, setEnableSubmit] = useState(true);

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    if (name === 'price') {
      value = Number(value.replaceAll(',', ''));
      if (value === 0 || isNaN(value)) {
        value = '';
      }
    }
    handleChange(name, value);
  };

  const handleSubmitCheck = () => {
    const keys = Object.keys(values);
    let check = false;
    keys.forEach((e) => {
      if (e === 'images') {
        return;
      }
      if (Array.isArray(values[e])) {
        if (!values[e].length) {
          check = true;
        }
      } else if (!values[e]) {
        check = true;
      }
    });
    return check;
  };

  const handleKeyDownEnter = (e) => {
    if(e.key === 'Enter' && e.target.value) {
      const { name, value } = e.target;
      setValues((prevValues) => ({
        ...prevValues,
        [name] : [...prevValues[name], value]
      }));
      e.target.value = '';
    }
  }

  const handleTagDelete = (deleteKey) => {
    setValues((prevValues) => ({
      ...prevValues,
      tags : prevValues.tags.filter((tag,index) => index !== deleteKey)
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(()=>{
    const check = handleSubmitCheck();
    setEnableSubmit(check);
  },[values]);

  return (
    <>
      <section className={classModuleName('main', styles)}>
        <form className={classModuleName('input-form', styles)}>
          <div className={classModuleName('input-header-container', styles)}>
            <h2>상품 등록하기</h2>
            <Button inlineStyle={buttonStyle} isDisable={enableSubmit} type="submit" name="submit" onClick={handleSubmit}>
              등록
            </Button>
          </div>
          <div className={classModuleName('input-container', styles)}>
            <p>상품 이미지</p>
            <ImageFileInput mediaState={mediaState} name="images" value={values.images} styles={styles} onChange={handleChange} />
          </div>
          <div className={classModuleName('input-container', styles)}>
            <label htmlFor="name">상품명</label>
            <input id="name" onChange={handleInputChange} value={values.name} className={classModuleName('input-value-box', styles)} placeholder="상품명을 입력해주세요" type="text" name="name" />
          </div>
          <div className={classModuleName('input-container', styles)}>
            <label htmlFor="description">상품 소개</label>
            <textarea
              id="description"
              onChange={handleInputChange}
              value={values.description}
              className={classModuleName('input-value-box textarea', styles)}
              placeholder="상품 소개를 입력해주세요"
              type="text"
              name="description"
            />
          </div>
          <div className={classModuleName('input-container', styles)}>
            <label htmlFor="price">판매가격</label>
            <input
              id="price"
              onChange={handleInputChange}
              value={values.price.toLocaleString('ko-KR')}
              className={classModuleName('input-value-box', styles)}
              placeholder="판매 가격을 입력해주세요"
              type="text"
              name="price"
            />
          </div>
          <div className={classModuleName('input-container', styles)}>
            <label htmlFor="tag">태그</label>
            <input id="tag" className={classModuleName('input-value-box', styles)} placeholder="태그를 입력해주세요" type="text" name="tags" onKeyDown={handleKeyDownEnter}/>
          </div>
          <div className={classModuleName('tag-container', styles)}>
            {values.tags.map((tag,index)=>{
              return <Tag index={index} key={index} style={styles} value={tag} onDelete={handleTagDelete}/>
            })}
          </div>
        </form>
      </section>
    </>
  );
}

export default AddItem;
