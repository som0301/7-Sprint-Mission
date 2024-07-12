import Image from "next/image";
import styles from "./BoardDetail.module.css";
import kebab from "../public/kebab.svg";
import profile from "../public/profile.svg";
import { Comment } from "./type";
import empty from "../public/reply_empty.svg";

interface Props {
  comments: Comment[] | null;
}

function timeAgo(dateString: string): string {
  const now = new Date();
  const updatedAt = new Date(dateString);
  const diffInSeconds = Math.floor(
    (now.getTime() - updatedAt.getTime()) / 1000
  );
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInSeconds < 60) {
    return "방금 전";
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes}분 전`;
  } else if (diffInHours < 24) {
    return `${diffInHours}시간 전`;
  } else {
    return `${diffInDays}일 전`;
  }
}

export default function BoardCommentList({ comments }: Props) {
  if (!comments || comments.length === 0) {
    return (
      <div className={styles["empty-wrapper"]}>
        <Image src={empty} width="140" height="140" alt="댓글 없음" />
        <span className={styles["comment-empty"]}>
          아직 댓글이 없어요, <br />
          지금 댓글을 달아보세요!
        </span>
      </div>
    );
  }

  return (
    <div className={styles.container}>

      {comments.map((comment) => (
        <section key={comment.id} className={styles["comment-list"]}>
          <div className={styles["comment-list-wrapper"]}>
            <span className={styles["list-title"]}>{comment.content}</span>
            <div className={styles["img-wrapper"]}>
              <Image src={profile} width="24" height="24" alt="프로필" />
              <div className={styles["user-wrapper"]}>
                {comment.writer && (
                  <>
                    <span
                      className={`${styles["list-span"]} ${styles["list-name"]}`}
                    >
                      {comment.writer.nickname}
                    </span>
                    <span
                      className={`${styles["list-span"]} ${styles["list-date"]}`}
                    >
                      {timeAgo(comment.createdAt)}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
          <Image src={kebab} width="24" height="24" alt="더보기" />
        </section>
        
      ))}
    </div>
  );
}
