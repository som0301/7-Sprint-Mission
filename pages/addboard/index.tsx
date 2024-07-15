import Image from "next/image";
import styles from "./styles.module.scss";
import plusIcon from "@/assets/icons/ic_plus.svg";
import { useRef } from "react";

function AddBoard() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileInputClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return (
    <div className={styles["container"]}>
      <div className={styles["add-post-container"]}>
        <label className={styles["add-post"]}>게시글 쓰기</label>
        <button className={styles["add-post-button"]} disabled>
          등록
        </button>
      </div>
      <div className={styles["title-container"]}>
        <label className={styles["title"]} htmlFor="title">
          *제목
        </label>
        <input
          className={styles["title-input"]}
          type="text"
          id="title"
          placeholder="제목을 입력해주세요"
        />
      </div>
      <div className={styles["content-container"]}>
        <label className={styles["content"]}>*내용</label>
        <textarea
          className={styles["content-textarea"]}
          placeholder="내용을 입력해주세요"
        />
      </div>
      <div className={styles["add-image-container"]}>
        <label className={styles["add-image"]} htmlFor="image-upload">
          이미지
        </label>
        <div
          className={styles["add-image-wrapper"]}
          onClick={handleFileInputClick}
        >
          <input
            className={styles["add-image-input"]}
            ref={fileInputRef}
            type="file"
            id="image-upload"
            placeholder="이미지 등록"
          />
          <Image
            className={styles["plus-image-icon"]}
            src={plusIcon} 
            alt="플러스"
            width={48}
            height={48}
          />
          <span className={styles["add-image-span"]}>이미지 등록</span>
        </div>
      </div>
    </div>
  );
}

export default AddBoard;
