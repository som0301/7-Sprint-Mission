import searchImg from "@/public/images/icons/ic_search.svg";
import styles from "./SearchInput.module.scss";

export default function SearchInput() {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        placeholder="검색할 상품을 입력해주세요"
      />
      <img className={styles.search} src={searchImg.src} alt="검색 돋보기" />
    </div>
  );
}
