import { useEffect, useRef, useState } from 'react';
import { classModuleName } from '../../../modules';
import inputImage from '../../../images/others/File_Input_image.svg';

function ImageFileInput({ name, value, onChange, styles }) {
  const [preview, setPreview] = useState();
  const inputRef = useRef();

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = '';
    onChange(name, null);
  };

  useEffect(() => {
    if (!value) return;
    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

    return () => {
      setPreview();
      URL.revokeObjectURL(nextPreview);
    };
  }, [value]);

  return (
    <div className={classModuleName('input-file-container', styles)}>
      <label className={classModuleName('input-file-label', styles)} htmlFor="file">
        <img src={inputImage} alt="이미지 등록" />
      </label>
      <input name="images" id="file" className={classModuleName('input-file', styles)} type="file" accept="image/png, image/jpeg" onChange={handleChange} ref={inputRef} />
      <div className={classModuleName('preview-container', styles)}>
        {value && <img src={preview} alt="이미지 미리보기" className={classModuleName('preview', styles)} />}
        {value && (
          <button onClick={handleClearClick} className={classModuleName('button-delete', styles)}>
            X
          </button>
        )}
      </div>
    </div>
  );
}

export default ImageFileInput;
