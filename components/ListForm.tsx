import styles from "./ListForm.module.css";
import heart from "../public/heart.svg";
import Image from "next/image";

export default function ListForm() {
  return (
  <>
  <form className={styles['List-form']}>
    
    <div className={styles['List-wrapper-title']}>
      <span className={styles['List-span']}></span>
      <div className={styles['List-wrapper-img']}>
      {/* <Image /> */}
      </div>
    </div>

    <div className={styles['List-wrapper']}>

      <div className={styles['List-wrapper-name']}>
      {/* <Image /> */}
      <span className={`${styles['List-span']} ${styles.name}`}>총</span>
      <span className={`${styles['List-span']} ${styles.date}`}>2024</span>
      </div>

      <div className={styles['List-wrapper-heart']}>
        <Image src={heart} alt="하트" width="24" height="24" />
        <span className={`${styles['List-span']} ${styles.favoriteCount}`}>99</span>
      </div>

    </div>

  </form>
  </>
  );
}
