import BestArticleList from "./components/BestArticleList";
import AllArticleList from "./components/AllArticleList";
import styles from "./Freeboard.module.scss";

export default function Freeboard() {
  return (
    <div className={styles.main}>
      <BestArticleList />
      <AllArticleList />
    </div>
  );
}
