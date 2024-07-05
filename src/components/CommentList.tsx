import styles from '../styles/CommentList.module.scss';
import userProfileImg from '../assets/icons/ic_user_profile.svg';
import moreBtnImg from '../assets/icons/ic_more.svg';
import noCommentImg from '../assets/images/img_no_comment.png';
import elapsedTime from '../utils/elapsedTime';
import Button from './Button';
import { Comment } from '../types/comment';

function CommentListItem({ comment }: { comment: Comment }) {
  return (
    <div className={styles['comment-list-item']}>
      <p>{comment['content']}</p>
      <Button className={styles['more-btn']}>
        <img src={moreBtnImg} alt='더보기 이미지' />
      </Button>
      <div className={styles['user-profile']}>
        <img src={userProfileImg} alt='되돌아가기 이미지' />
        <div className={styles['user-info']}>
          <p className={styles['user-name']}>{comment['writer']['nickname']}</p>
          <p className={styles['date']}>{elapsedTime(comment['updatedAt'])}</p>
        </div>
      </div>
    </div>
  );
}

function CommentList({ comments }: { comments: Comment[] }) {
  return comments.length > 0 ? (
    <div className={styles['comment-list']}>
      {comments.map((comment) => {
        return <CommentListItem key={comment.id} comment={comment} />;
      })}
    </div>
  ) : (
    <img
      src={noCommentImg}
      alt='문의 없음 이미지'
      className={styles['no-comment']}
    />
  );
}

export default CommentList;
