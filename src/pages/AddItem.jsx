import "../styles/AddItem.css";
import sampleImg from "../assets/images/img_sample.png";
import blueXIc from "../assets/icons/ic_x_blue.svg";
import grayXIc from "../assets/icons/ic_x_gray.svg";
import plusIc from "../assets/icons/ic_plus.svg";
import { useEffect, useState } from "react";
import FileInput from "../components/FileInput";

function AddItem() {
  const [preview, setPreview] = useState(null);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [values, setValues] = useState({
    title: "",
    discription: "",
    price: "",
    tag: "",
    imgFile: null,
  });

  useEffect(() => {
    if (!values.imgFile) return;
    const blob = new Blob([values.imgFile], { type: "image/jpeg" });
    const nextPreview = URL.createObjectURL(blob);
    setPreview(nextPreview);
    return () => {
      setPreview();
      URL.revokeObjectURL(nextPreview);
    };
  }, [values.imgFile]);

  useEffect(() => {
    for (const key in values) {
      if (!values[key]) return;
    }
    setIsFormComplete(true);
  }, [values]);

  const handleFileInputChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className="add-item">
      <form id="add-item-form" method="post">
        <div className="header">
          <p className="title">상품 등록하기</p>
          <button
            type="submit"
            className={"btn-register"}
            disabled={!isFormComplete}
          >
            등록
          </button>
        </div>
        <div className="img">
          <label className="input-label">상품 이미지</label>
          <div className="img-container">
            <div className="add-img">
              <FileInput
                name="imgFile"
                value={values.imgFile}
                onChange={handleFileInputChange}
              >
                <img src={plusIc} alt="플러스_아이콘" />
                <p>이미지 등록</p>
              </FileInput>
            </div>
            {preview && (
              <div className="added-img">
                <img
                  src={preview}
                  alt="이미지 미리보기"
                  className="upload-img"
                />
                <img
                  src={blueXIc}
                  alt="삭제 버튼"
                  className="btn-delete"
                  onClick={() => setPreview(null)}
                />
              </div>
            )}
          </div>
        </div>
        <label htmlFor="title" className="input-label">
          상품명
        </label>
        <input
          id="title"
          name="title"
          value={values.title}
          placeholder="상품명을 입력해주세요"
          onChange={handleChange}
        />
        <label htmlFor="discription" className="input-label">
          상품 소개
        </label>
        <textarea
          id="discription"
          name="discription"
          value={values.discription}
          placeholder="상품 소개를 입력해주세요"
          onChange={handleChange}
        />
        <label htmlFor="price" className="input-label">
          판매가격
        </label>
        <input
          id="price"
          name="price"
          value={values.price}
          placeholder="판매 가격을 입력해주세요"
          onChange={handleChange}
        />
        <label htmlFor="tag" className="input-label">
          태그
        </label>
        <input
          id="tag"
          name="tag"
          value={values.tag}
          placeholder="태그를 입력해주세요"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default AddItem;
