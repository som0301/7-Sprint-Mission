import { Article } from "@/types/articles";
import styles from "./GeneralPost.module.css";
import Image from "next/image";
import iconHeart from "@/public/assets/images/icon-heart.png";

const GeneralPost: React.FC<Article> = ({
  title,
  createdAt,
  writer,
  image,
  likeCount,
}) => {
  return (
    <div className={styles.generalPost}>
      <div className={styles.mainContent}>
        <h2>{title}</h2>
        {image && (
          <Image src={image} alt="productImage" width={72} height={72} />
        )}
      </div>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          {writer.nickname}
          {createdAt}
        </div>
        <div className={styles.footerRight}>
          <Image src={iconHeart} alt="Heart-icon" width={20} height={17} />
          <span>{likeCount}</span>
        </div>
      </div>
    </div>
  );
};

export default GeneralPost;
