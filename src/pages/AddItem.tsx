import '../styles/AddItem.scss';
import blueXIc from '../assets/icons/ic_x_blue.svg';
import plusIc from '../assets/icons/ic_plus.svg';
import { useEffect, useState } from 'react';
import FileInput from '../components/FileInput';
import Tag from '../components/Tag';
import Button from '../components/Button';
import { ChangeEvent, MouseEvent, KeyboardEvent, FormEvent } from 'react';

interface Values {
  title: string;
  discription: string;
  price: string;
  tag: string;
  imgFile: File | null;
}

function AddItem() {
  const [tags, setTags] = useState<string[]>([]);
  const [preview, setPreview] = useState<string | null>(null);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [values, setValues] = useState<Values>({
    title: '',
    discription: '',
    price: '',
    tag: '',
    imgFile: null,
  });

  useEffect(() => {
    if (!values.imgFile) return;
    const blob = new Blob([values.imgFile], { type: 'image/jpeg' });
    const nextPreview = URL.createObjectURL(blob);
    setPreview(nextPreview);
    return () => {
      setPreview(null);
      URL.revokeObjectURL(nextPreview);
    };
  }, [values.imgFile]);

  useEffect(() => {
    const isComplete =
      (Object.keys(values) as (keyof Values)[])
        .filter((key) => key !== 'tag')
        .filter((key) => key !== 'imgFile')
        .every((key) => values[key]) && tags.length > 0;

    setIsFormComplete(isComplete);
  }, [values, tags]);

  const handleFileInputChange = (name: string, value: File | null) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleImgDelete = () => {
    setPreview(null);
    setValues((prevValues) => ({
      ...prevValues,
      imgFile: null,
    }));
  };

  const handleDeleteTag = (e: MouseEvent) => {
    const target = e.currentTarget as HTMLButtonElement;
    setTags(tags.filter((element) => element !== target.name));
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleTagInput = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const target = e.target as HTMLInputElement;
      !tags.includes(target.value) && setTags([...tags, target.value]);
      setValues((prevValues) => ({
        ...prevValues,
        tag: '',
      }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className='add-item'>
      <form id='add-item-form' onSubmit={handleSubmit}>
        <div className='header'>
          <p className='title'>상품 등록하기</p>
          <button
            type='submit'
            className={'btn-register'}
            disabled={!isFormComplete}
          >
            등록
          </button>
        </div>
        <div className='img'>
          <label htmlFor='add-img' className='input-label'>
            상품 이미지
          </label>
          <div className='img-container'>
            <div className='add-img'>
              <FileInput
                name='imgFile'
                // value={values.imgFile}
                onChange={handleFileInputChange}
              >
                <img src={plusIc} alt='플러스_아이콘' />
                <p>이미지 등록</p>
              </FileInput>
            </div>
            {preview && (
              <div className='added-img'>
                <img
                  src={preview}
                  alt='이미지 미리보기'
                  className='upload-img'
                />
                <Button onClick={handleImgDelete}>
                  <img src={blueXIc} alt='삭제 버튼' className='btn-delete' />
                </Button>
              </div>
            )}
          </div>
        </div>
        <label htmlFor='title' className='input-label'>
          상품명
        </label>
        <input
          id='title'
          name='title'
          value={values.title}
          placeholder='상품명을 입력해주세요'
          onChange={handleChange}
        />
        <label htmlFor='discription' className='input-label'>
          상품 소개
        </label>
        <textarea
          id='discription'
          name='discription'
          value={values.discription}
          placeholder='상품 소개를 입력해주세요'
          onChange={handleChange}
        />
        <label htmlFor='price' className='input-label'>
          판매가격
        </label>
        <input
          id='price'
          name='price'
          value={values.price}
          placeholder='판매 가격을 입력해주세요'
          type='number'
          onChange={handleChange}
        />
        <label htmlFor='tag' className='input-label'>
          태그
        </label>
        <input
          id='tag'
          name='tag'
          value={values.tag}
          placeholder='태그를 입력해주세요'
          onChange={handleChange}
          onKeyDown={handleTagInput}
        />
        <div className='tag-container'>
          {tags.map((item) => {
            // console.log(item);
            return (
              <Tag name={item} key={item} onDeleteClick={handleDeleteTag}></Tag>
            );
          })}
        </div>
      </form>
    </div>
  );
}

export default AddItem;
