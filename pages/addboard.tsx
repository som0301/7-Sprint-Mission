import Header from "../components/Header";
import styles from "../styles/addboard.module.css";
import plus from "../public/plus.svg";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";

export default function Addboard() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    currentImage: null as File | null,
  });
  const [currentImage, setCurrentImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<String | undefined>(
    undefined
  );
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (!currentImage) return;

    const objectURL = URL.createObjectURL(currentImage);
    setPreviewImage(objectURL as string);

    return () => {
      URL.revokeObjectURL(objectURL);
    };
  }, [currentImage]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement

    if (name === "imgUpload" && files?.length) {
      setFormData({ ...formData, currentImage: files[0] });
      setCurrentImage(files[0]);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };


  useEffect(() => {
    const { title, description, currentImage } = formData;
    if (title && description && currentImage) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [formData]);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles["top-wrapper"]}>
          <h1 className={styles["top-wrapper-board"]}>게시글 쓰기</h1>
          <button className={`${styles["register-button"]} ${isDisabled ? styles.disabled : ""}`}>등록</button>
        </div>

        <div className={styles["section-wrapper"]}>
          <section className={styles.section}>
            <h1 className={styles["section-h1"]}>*제목</h1>
            <input
              name="title"
              value={formData.title}
              className={styles["section-input"]}
              placeholder="제목을 입력해주세요"
              onChange={handleChange}
            />
          </section>

          <section className={styles.section}>
            <h1 className={styles["section-h1"]}>*내용</h1>
            <textarea
              name="description"
              value={formData.description}
              className={`${styles["section-input"]} ${styles["textarea-input"]}`}
              placeholder="내용을 입력해주세요"
              onChange={handleChange}
            />
          </section>

          <section className={styles.section}>
            <h1 className={styles["section-h1"]}>이미지</h1>
            <div className={styles["current-wrapper"]}>
              <div className={styles["input-wrapper"]}>
                <input
                  name="imgUpload"
                  className={`${styles["section-input"]} ${styles["img-input"]}`}
                  type="file"
                  onChange={handleChange}
                />
                <div className={styles["img-wrapper"]}>
                  <Image src={plus} width="48" height="48" alt="이미지 등록" />
                  <span className={styles["img-wrapper-span"]}>
                    이미지 등록
                  </span>
                </div>
              </div>
              {currentImage && (
                <Image
                  src={previewImage as string}
                  alt="이전 사진"
                  width="282"
                  height="282"
                />
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
