import styles from './comment.module.css';
import { classModuleName, elapseTimeCal } from '../../../modules';

function Comment({ comment }) {
  const { nickname, image } = comment.writer;
  const [elapseDay, elapseHour] = elapseTimeCal(comment.updatedAt);

  return (
    <div className={classModuleName('comment-container', styles)}>
      <p>{comment.content}</p>
      <div className={classModuleName('comment-user-container', styles)}>
        <img src={image} alt={`${nickname}이미지`}/>
        <div className={classModuleName('comment-user-info', styles)}>
          <p className={classModuleName('nickname', styles)}>{nickname}</p>
          <p className={classModuleName('elapse-time', styles)}>{`${elapseDay}일 ${elapseHour}시간 전`}</p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
