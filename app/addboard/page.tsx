"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import FileInput from "@/components/FileInput";
import { AddArticleForm } from "@/types/form";
import Button from "@/components/Button";

const AddBoard: React.FC = () => {
  const [values, setValues] = useState<AddArticleForm>({
    title: "",
    body: "",
    image: "",
  });

  const handleChange = (name: keyof AddArticleForm, value: string | null) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    handleChange(name as keyof AddArticleForm, value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(values);
  };

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const { title, body } = values;
    const isValid = !!title && !!body;
    setIsFormValid(isValid);
  }, [values]);

  return (
    <div className='max-w-[1200px] mx-auto px-4'>
      <header className='flex justify-between items-center py-5'>
        <span className='text-xl font-bold'>게시글 쓰기</span>
        <Button text='등록' disabled={!isFormValid} size='small' width='88px' />
      </header>
      <form className='flex flex-col' onSubmit={handleSubmit}>
        <div className='mb-4'>
          <h2 className='text-lg font-semibold mb-2'>*제목</h2>
          <input
            name='title'
            value={values.title}
            onChange={handleInputChange}
            placeholder='제목을 입력해주세요'
            className='w-full p-4 rounded-xl bg-gray-100'
          />
        </div>
        <div className='mb-4'>
          <h2 className='text-lg font-semibold mb-2'>*내용</h2>
          <textarea
            name='body'
            value={values.body}
            onChange={handleInputChange}
            placeholder='내용을 입력해주세요'
            className='w-full p-4 rounded-xl bg-gray-100 h-48'
          />
        </div>
        <div className='mb-4'>
          <h2 className='text-lg font-semibold mb-2'>상품 이미지</h2>
          <FileInput
            name='image'
            value={values.image}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default AddBoard;
