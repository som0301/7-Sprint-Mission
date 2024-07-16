import { ChangeEvent, useState } from "react";
import styles from "./BoardDetail.module.css";

export default function BoardComment() {
  const [value,setValue]=useState('');

  const handleInput=(e:ChangeEvent<HTMLTextAreaElement>)=>{
    setValue(e.target.value);
  }

  return (
    <>
      <section className={styles["comment-wrapper"]}>
        <h2 className={styles.comment}>댓글 달기</h2>
        <textarea
          className={styles["comment-text"]}
          placeholder="댓글을 입력해주세요."
          value={value}
          onChange={handleInput}
        />
        <div className={styles["button-container"]}>
        <button className={styles.commentBtn} disabled={!value}>등록</button>
        </div>
      </section>
    </>
  );
}
