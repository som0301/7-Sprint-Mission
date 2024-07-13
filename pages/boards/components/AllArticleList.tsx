import styles from "../Freeboard.module.scss";
import AllArticleItem from "./AllArticleItem";

export default function AllArticleList() {
  const posts = ["맥북", "심심풀이", "모각공"];
  return (
    <section className={styles["posts"]}>
      <button>글쓰기</button>
      <input />
      <h1 className={styles.title}>게시글</h1>
      {posts.map((value, index) => (
        <AllArticleItem key={index} value={value} />
      ))}
    </section>
  );
}
