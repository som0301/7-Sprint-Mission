import styles from './index.module.scss';
import { Article as ArticleType } from '@/types/article.d';
import Image from 'next/image';
import cx from 'clsx';
import { IconUserProfile, IconLikeHeart } from '@/public';
import getDateFormat from '@/utils/dateFormat';

interface Props {
  article: ArticleType;
}

const Article = ({ article }: Props) => {
  return (
    <div className={styles.article}>
      <div className={styles.top}>
        <div className={styles.title}>{article?.title}</div>
        <div className={cx(article?.image && styles.articleImgContainer)}>
          {article?.image && (
            <Image
              src={article?.image}
              alt='게시글에 올라온 이미지'
              width={72}
              height={72}
              unoptimized={true}
              className={styles.articleImg}
            />
          )}
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.userProfileGroup}>
          <Image
            src={IconUserProfile}
            alt='사용자 프로필 아이콘'
            unoptimized
            className={styles.profileImg}
          />
          <div className={styles.nickname}>{article?.writer?.nickname}</div>
          <div className={styles.createDate}>
            {getDateFormat(article?.createdAt)}
          </div>
        </div>

        <div className={styles.likeGroup}>
          <Image
            src={IconLikeHeart}
            alt='좋아요 하트 아이콘'
            unoptimized
            className={styles.likeHeart}
          />
          <div className={styles.likeCount}>{article?.likeCount}</div>
        </div>
      </div>
    </div>
  );
};

export default Article;
