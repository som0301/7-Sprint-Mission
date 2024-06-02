import { useRef, useState, useEffect } from 'react';
import plusIcon from '../../../assets/ic_plus.svg';

const ImageInput = () => {
  const [imgFile, setImgFile] = useState(null);
  const [imgPreview, setImgPreview] = useState('');
  const fileInputRef = useRef();

  const handleImageChange = (e) => {
    setImgFile(e.target.files[0]);
  };

  const handleImageUproadClick = () => {
    fileInputRef.current.click();
  };

  const handleDeleteClick = () => {
    fileInputRef.current.value = '';
    setImgFile(null);
  };

  useEffect(() => {
    if (!imgFile) return;

    const nextPreview = URL.createObjectURL(imgFile);
    setImgPreview(nextPreview);

    return () => {
      setImgPreview('');
      URL.revokeObjectURL(nextPreview);
    };
  }, [imgFile]);

  return (
    <>
      <label htmlFor="item-image" className="first-label">
        상품 이미지
      </label>
      <input
        type="file"
        id="item-image"
        name="item-image"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageChange}
      />
      <div className="image-container">
        <button
          type="button"
          className="image-btn"
          onClick={handleImageUproadClick}
        >
          <img src={plusIcon} alt="plusicon" />
          <span>이미지 등록</span>
        </button>
        {imgPreview && (
          <div className="preview-wrap">
            <img
              src={imgPreview}
              alt="이미지미리보기"
              className="image-preview"
            />
            <button
              type="button"
              className="image-delete"
              onClick={handleDeleteClick}
            ></button>
          </div>
        )}
      </div>
    </>
  );
};

export default ImageInput;
