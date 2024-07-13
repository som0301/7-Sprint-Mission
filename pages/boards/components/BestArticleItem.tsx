import styles from "../Freeboard.module.scss";
import badgeImg from "@/public/images/icons/img_badge.svg";
import favoriteImg from "@/public/images/icons/ic_heart.svg";
import { Post } from "@/types/postTypes";

interface BestPostItemProps {
  post: Post;
}

export default function BestArticleItem({
  post: { createdAt, image, likeCount, title, writer },
}: BestPostItemProps) {
  return (
    <>
      <img src={badgeImg.src} alt="Best 뱃지" />
      <h2>{title}</h2>
      {image && <img src={image} alt="대표 이미지" />}
      <span>{writer.nickname}</span>
      <img src={favoriteImg.src} alt="즐겨찾기" />
      <span>{likeCount}</span>
      <span>{createdAt}</span>
    </>
  );
}
