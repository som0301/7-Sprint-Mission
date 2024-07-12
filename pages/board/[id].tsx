import BoardComment from "../../components/BoardComment";
import BoardCommentList from "../../components/BoardCommentList";
import BoardDetailInfo from "../../components/BoardDetailInfo";
import Header from "../../components/Header";
import styles from "../../components/BoardDetail.module.css";

export default function BoardDetail() {
  return (
    <>
      <Header />
      <div className={styles["board-detail-wrapper"]}>
      <BoardDetailInfo />
      <BoardComment />
      <BoardCommentList />
      </div>
    </>
  );
}
