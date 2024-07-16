import BoardComment from "../../components/BoardComment";
import BoardCommentList from "../../components/BoardCommentList";
import Header from "../../components/Header";
import styles from "../../components/BoardDetail.module.css";
import Link from "next/link";
import back from "../../public/back.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import BoardDetailInfo from "../../components/BoardDetailInfo";
import { getArticlesComment, getArticlesId } from "../../lib/api";
import { useEffect, useState } from "react";
import { Article, Comment } from "../../components/type";

interface board {
  articleId: number;
}
interface comment {
  articleId: number;
  limit: number;
}

export default function BoardDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState<Article | null>(null);
  const [comments, setComments] = useState<Comment[] | null>(null);

  async function getBoardList({ articleId }: board) {
    try {
      const response = await getArticlesId({ articleId });
      setArticle(response);
    } catch (error) {
      console.log(error);
    }
  }
  async function getCommemtList({ articleId, limit }: comment) {
    try {
      const response = await getArticlesComment({ articleId, limit });
      setComments(response.list);
    } catch (error) {
      console.log("Error fetching articles:", error);
      throw error;
    }
  }

  useEffect(() => {
    if (id) {
      getBoardList({ articleId: parseInt(id as string) });
      getCommemtList({ articleId: parseInt(id as string), limit: 3 });
    }
  }, [id]);

  return (
    <>
      <Header />
      <div className={styles["board-detail-wrapper"]}>
        <BoardDetailInfo article={article} />
        <BoardComment />
        <BoardCommentList comments={comments} />
        <div className={styles["back-wrapper"]}>
          <Link href="/board">
            <button className={styles.backBtn}>
              목록으로 돌아가기
              <Image src={back} alt="뒤로 가기" width="24" height="24" />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
