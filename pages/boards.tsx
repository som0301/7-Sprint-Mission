import BestPostList from "@/components/Boards/BestPostList";
import GeneralPostList from "@/components/Boards/GeneralPostList";
import Header from "@/components/Header";
import styles from "@/styles/boards.module.css";
export default function Boards() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <BestPostList />
          <GeneralPostList />
        </div>
      </main>
    </>
  );
}
