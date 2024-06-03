import { useEffect, useRef, useState } from 'react';
import { FileInputPlusIcon } from '../images';
import S from './FileInput.module.css';

function FileInput() {
  // 1. 이미지 파일 저장하는 곳
  const [imgFile, setImgFile] = useState(null);
  // 2. 미리보기용 이미지 url 저장하는 곳
  const [preview, setPreview] = useState();
  const inputRef = useRef();

  // 3. 이미지 선택 시 이미지 저장
  const handleImgFileChange = e => {
    const nextValue = e.target.files[0];
    setImgFile(nextValue);
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = '';
    setImgFile(null);
  };

  const handlePickInput = () => {
    const inputNode = inputRef.current;
    inputNode.click();
  };
  // 4. imgFile이 변경되면 [imgFile]
  useEffect(() => {
    // 5, imgFile을 지운거라면 아무것도 안해도 됨
    if (!imgFile) {
      return;
    }

    // 6. imgFile 이용하여 미리보기 임시 url 만들기
    const objectURL = URL.createObjectURL(imgFile);
    // 7. 미리보기 임시 url을 state에 넣기
    setPreview(objectURL);

    // 8. 해당 컴포넌트가 unmount 되거나, update 되기 전 기존에 메모리에 저장되어 있던 이미지 미리보기 url을 지운다.
    return () => {
      URL.revokeObjectURL(objectURL);
      setPreview();
    };
  }, [imgFile]);

  return (
    <div>
      <div className={S.fileInput_whole}>
        <div className={S.file_input_container}>
          <div
            className={S.file_input_box}
            onClick={handlePickInput}
          >
            <img
              src={FileInputPlusIcon}
              alt="이미지플러스아이콘"
            />
            <p
              className={S.addImage}
              style={{ fontSize: 10 }}
            >
              이미지 등록
            </p>
          </div>
        </div>

        <div className={`${S.preview_box} ${imgFile ? S.show : ''}`}>
          <img
            className={S.preview_img}
            src={preview}
            alt="이미지 미리보기"
          />
          <button
            className={S.img_delete_button}
            type="button"
            onClick={handleClearClick}
          >
            X
          </button>
        </div>
        <input
          type="file"
          onChange={handleImgFileChange}
          ref={inputRef}
          style={{ display: 'none' }}
        />
      </div>
    </div>
  );
}

export default FileInput;
