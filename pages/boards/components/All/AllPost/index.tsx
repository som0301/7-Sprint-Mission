import Image from "next/image";
import styles from "./styles.module.scss";
import heartIcon from "@/assets/icons/ic_heart.svg";
import profileImage from "@/assets/icons/ic_profile.svg";
import { Article } from "@/pages/api/articles";
import { useRouter } from "next/router";
interface AllPostProps {
  article: Article;
}

function AllPost({ article }: AllPostProps) {
  const hasImage = !!article.image;
  const router = useRouter();

  const handlePostClick = () => {
    router.push(`/boards/${article.id}`);
  };

  return (
    <div className={styles["container"]} onClick={handlePostClick}>
      <div className={styles["post-top-info"]}>
        <p className={styles["title"]}>{article.title}</p>
        {hasImage && (
          <div className={styles["image-wrapper"]}>
            <Image
              src={article.image}
              alt={article.title}
              width={46}
              height={46}
            />
          </div>
        )}
        {!hasImage && <div className={styles["none-image-wrapper"]}></div>}
      </div>
      <div className={styles["post-bottom-info"]}>
        <div className={styles["user-wrapper"]}>
          <Image src={profileImage} alt="프로필" width={24} height={24} />
          <span className={styles["user-name"]}>{article.writer.nickname}</span>
          <span className={styles["date"]}>
            {new Date(article.createdAt).toLocaleDateString()}
          </span>
        </div>
        <div className={styles["like-wrapper"]}>
          <div className={styles["like-image-wrapper"]}>
            <Image src={heartIcon} alt="좋아요" width={20} height={17} />
          </div>
          <span className={styles["like-count"]}>{article.likeCount}</span>
        </div>
      </div>
    </div>
  );
}

export default AllPost;
