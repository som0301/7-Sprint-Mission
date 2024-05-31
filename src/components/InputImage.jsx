import "./InputImage.css";
import iconPlus from "../assets/images/icon_plus.svg";
import iconDelete from "../assets/images/icon_delete.svg";
import { useState } from "react";
import { useEffect } from "react";

function InputImage({ id, name, onChange }) {
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
    const imageFile = e.target.files[0];
    setCurrentImage(imageFile);
    onChange(id, imageFile);
    e.target.value = null;
  };

  const handleImageDelete = () => {
    setCurrentImage(null);
    onChange(id, null);
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
          <div
            className="InputImage-preview"
            style={{
              backgroundImage: `url(${preview})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <img
              className="InputImage-preview-delete"
              src={iconDelete}
              onClick={handleImageDelete}
            ></img>
          </div>
        )}
      </div>
      <p className="InputImage-warning"></p>
    </form>
  );
}

export default InputImage;
