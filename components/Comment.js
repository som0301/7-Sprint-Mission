import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import axios from '@/lib/axios';
import { formatDate } from '@/utils/formatDate';
import ActiveBtn from '@/components/ActiveBtn';
import styles from '@/components/Comment.module.css';
import kebabIcon from '@/assets/images/kebabIcon.svg';
import profileImg from '@/assets/images/profileImg.svg';
import commentEmptyImg from '@/assets/images/commentEmptyImg.png';
import backIcon from '@/assets/images/backIcon.svg';

export default function Comment() {
  const [lists, setLists] = useState([]);

  const router = useRouter();
  const { id: articleId } = router.query; // articleId 가져오기

  useEffect(() => {
    if (articleId) {
      fetchComments(articleId);
    }
  }, [articleId]);

  const fetchComments = async (articleId, limit = 10, cursor = 1) => {
    try {
      const res = await axios.get(`articles/${articleId}/comments`, {
        params: {
          limit: limit,
        },
      });
      console.log('API response:', res.data);
      console.log('API response2:', res.data.list);
      setLists(res.data.list || []);
    } catch (error) {
      console.error('Failed to fetch list:', error);
      console.error(
        'Error details:',
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className={styles.container}>
      {lists.length > 0 ? (
        <div className={styles.commentContainer}>
          {lists.map((list) => (
            <div key={list.id} className={styles.commentWrapper}>
              <div className={styles.comment}>
                <div className={styles.commentTitle}>
                  <span className={styles.commentContent}>{list.content}</span>
                  <Image
                    src={kebabIcon}
                    width={24}
                    height={24}
                    alt='kebob icon'
                  />
                </div>
                <div className={styles.commentWriter}>
                  <Image
                    src={list.writer.image || profileImg}
                    width={32}
                    height={32}
                    alt='comment writer profile image'
                  />
                  <div className={styles.writingInfo}>
                    <span className={styles.nickname}>
                      {list.writer.nickname}
                    </span>
                    <span className={styles.createdAt}>
                      {formatDate(list.createdAt)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.emptyCommentContainer}>
          <Image
            src={commentEmptyImg}
            width={140}
            height={140}
            alt='Image indicating that there are no comments.'
          />
          <span className={styles.emptyCommentMessage}>
            아직 댓글이 없어요,
            <br />
            지금 댓글을 달아보세요!
          </span>
        </div>
      )}
      <div className={styles.backBtnContainer}>
        <Link className={styles.backBtnLink} href='/boards'>
          <ActiveBtn className={styles.backBtn}>
            <span className={styles.backBtnText}>목록으로 돌아가기</span>
            <Image src={backIcon} width={24} height={24} alt='back icon' />
          </ActiveBtn>
        </Link>
      </div>
    </div>
  );
}
