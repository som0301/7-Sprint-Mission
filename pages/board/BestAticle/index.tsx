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
          alt='사용자 프로필 아이콘'
          unoptimized
          className={styles.badgeImg}
        />
      </div>
      <div className={styles.middleSection}>
        <div className={styles.content}>
          맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?
        </div>
        <div className={cx(article.image && styles.articleImgContainer)}>
          {article.image && (
            <Image
              src={article.image}
              alt='게시글에 올라온 이미지'
              width={72}
              height={72}
              // fill
              unoptimized={true}
              // style={{ objectFit: 'contain' }}
              className={styles.contentImg}
            />
          )}
        </div>

        <div className={styles.contentImg}></div>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.leftGroup}>
          <div className={styles.nickname}>총명한판다</div>
          <Image
            src={IconLikeHeart}
            alt='좋아요 하트 아이콘'
            unoptimized
            className={styles.likeHeart}
          />
          <div className={styles.likeCount}>10</div>
        </div>
        <div className={styles.createDate}>{getDateFormat('2020-07-16')}</div>
      </div>
    </div>
  );
};

export default BestArticle;
