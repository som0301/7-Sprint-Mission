import Link from "next/link";
import styles from "@/styles/Board.module.css";
import BestPost from "@/components/BestPost";
import SearchForm from "@/components/SearchForm";
import SelectBtn from "@/components/SelectBtn";
import GeneralPost from "@/components/GeneralPost";

export default function Board() {
  return (
    <div className={styles.container}>
      <section className={styles["best-section"]}>
        <h2>베스트 게시글</h2>
        <div className={styles["bestpost-container"]}>
          <BestPost />
          <BestPost />
          <BestPost />
        </div>
      </section>
      <section className={styles["general-section"]}>
        <div className={styles["top-wrap"]}>
          <h2>게시글</h2>
          <Link href="/" className={styles["link"]}>
            <button type="button">글쓰기</button>
          </Link>
        </div>
        <div className={styles["middle-wrap"]}>
          <SearchForm />
          <SelectBtn />
        </div>
        <div className={styles["bottom-wrap"]}>
          <GeneralPost />
          <GeneralPost />
          <GeneralPost />
          <GeneralPost />
        </div>
      </section>
    </div>
  );
}
