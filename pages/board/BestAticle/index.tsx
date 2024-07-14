import styles from './index.module.scss';
import { Article as ArticleType } from '@/types/article.d';
import Image from 'next/image';
import cx from 'clsx';
import { IconLikeHeart, ImageBadgeBest } from '@/public';
import getDateFormat from '@/utils/dateFormat';

interface Props {
  article: ArticleType;
}

const BestArticle = ({ article }: Props) => {
  return (
    <div className={styles.bestArticle}>
      <div className={styles.topSection}>
        <Image
          src={ImageBadgeBest}
          alt='베스트 뱃지 아이콘'
          unoptimized
          className={styles.badgeImg}
        />
      </div>
      <div className={styles.middleSection}>
        <div className={styles.content}>{article?.title}</div>
        <div className={cx(article?.image && styles.articleImgContainer)}>
          {article?.image && (
            <Image
              src={article?.image}
              alt='게시글에 올라온 이미지'
              width={72}
              height={72}
              unoptimized={true}
              className={styles.contentImg}
            />
          )}
        </div>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.leftGroup}>
          <div className={styles.nickname}>{article?.writer?.nickname}</div>
          <Image
            src={IconLikeHeart}
            alt='좋아요 하트 아이콘'
            unoptimized
            className={styles.likeHeart}
          />
          <div className={styles.likeCount}>{article?.likeCount}</div>
        </div>
        <div className={styles.createDate}>
          {getDateFormat(article?.createdAt)}
        </div>
      </div>
    </div>
  );
};

export default BestArticle;
