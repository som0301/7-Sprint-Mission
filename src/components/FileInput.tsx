import ImgInput from '../styledComponets/ImgInput';
import { ReactNode } from 'react';
import { MouseEvent, ChangeEvent } from 'react';

interface Props {
  name: string;
  children?: ReactNode;
  onChange: (name: string, value: File | null) => void;
}

function FileInput({ name, onChange, children }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const nextValue = files && files.length > 0 ? files[0] : null;
    onChange(name, nextValue);
  };
  return (
    <ImgInput>
      <label htmlFor='file'>{children}</label>
      <input type='file' id='file' onChange={handleChange}></input>
    </ImgInput>
  );
}

export default FileInput;
