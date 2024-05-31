import "./InputImage.css";
import iconPlus from "../assets/images/icon_plus.svg";
import { attachObjectParticle } from "../modules/js/utils.js";
import { useState } from "react";
import { useEffect } from "react";

function InputImage({ id, name }) {
  const [currentImage, setCurrentImage] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (!currentImage) return;

    const objectURL = URL.createObjectURL(currentImage);
    setPreview(objectURL);

    return () => {
      setPreview();
      URL.revokeObjectURL(objectURL);
    };
  }, [currentImage]);

  const handleImageChange = (e) => {
    setCurrentImage(e.target.files[0]);
  };

  return (
    <form className="InputImage">
      <h2 className="InputImage-title">{name}</h2>
      <div className="InputImage-container">
        <label className="InputImage-regist" for={id}>
          <div>
            <img src={iconPlus}></img>
            <p>이미지 등록</p>
          </div>
        </label>
        <input
          id={id}
          className="InputImage-content"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        {currentImage && (
          <img className="InputImage-preview" src={preview}></img>
        )}
      </div>
      <p className="InputImage-warning"></p>
    </form>
  );
}

export default InputImage;
