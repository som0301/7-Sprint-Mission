import Image from "next/image";
import bestProductBadge from "@/public/assets/images/bestProductBadge.png";
import iconHeart from "@/public/assets/images/icon-heart.png";
import { Article } from "@/types/articles";
import styles from "./BestBoard.module.css";

const BestPost: React.FC<Article> = ({
  title,
  image,
  likeCount,
  createdAt,
  writer,
}) => {
  return (
    <div className={styles.bestPost}>
      <div className="bestBadge">
        <Image src={bestProductBadge} alt="bestBadge" width={102} height={30} />
      </div>
      <div className={styles.title}>
        <p>{title}</p>
        {image && (
          <Image src={image} alt="productImage" width={72} height={72} />
        )}
      </div>
      <div className="postFooter">
        <div className="leftFooter">
          <span>{writer.nickname}</span>
          <Image src={iconHeart} alt="Heart-icon" width={13.4} height={11.65} />
          <span>{likeCount}</span>
        </div>
        <div className="rightFooter">
          <span>{createdAt}</span>
        </div>
      </div>
    </div>
  );
};

export default BestPost;
