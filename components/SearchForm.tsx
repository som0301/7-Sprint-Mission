import Image from "next/image";
import styles from "@/components/SearchForm.module.css";
import search_ic from "@/public/ic_search.svg";

export default function SearchForm() {
  return (
    <form className={styles["search-form"]}>
      <label htmlFor="search" className={styles["search-label"]}>
        <Image
          src={search_ic}
          alt="검색아이콘"
          width="24"
          height="24"
          className={styles["search-img"]}
        />
      </label>
      <input
        className={styles["search-input"]}
        id="search"
        placeholder="검색할 상품을 입력해주세요"
      ></input>
    </form>
  );
}
