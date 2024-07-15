import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import axios from '@/lib/axios';
import { isFormValid } from '@/utils/isFormValid';
import { formatDate } from '@/utils/formatDate';
import Comment from '@/components/Comment';
import styles from '@/styles/board.module.css';
import kebabIcon from '@/assets/images/kebabIcon.svg';
import profileImg from '@/assets/images/profileImg.svg';
import likeIcon from '@/assets/images/likeIcon.svg';

export default function Board() {
  const router = useRouter(); // router 객체 생성
  const { id } = router.query; // router.query 객체에서 id 값 가져오기

  const [post, setPost] = useState(null);
  const [comment, setComment] = useState('');

  useEffect(() => {
    if (id) {
      axios
        .get(`/articles/${id}`)
        .then((res) => {
          setPost(res.data);
        })
        .catch((error) => {
          console.error('Failed to fetch post:', error);
        });
    }
  }, [id]);

  if (!post) return <div>Post not found</div>;

  return (
    <div className={styles.boardContainer}>
      {/* 게시글 */}
      <div className={styles.articleContainer}>
        <div className={styles.articleWrapper}>
          <div className={styles.articleTitle}>
            <span>{post.title}</span>
            <Image src={kebabIcon} width={24} height={24} alt='kebob icon' />
          </div>
          <div className={styles.articleInfo}>
            <div className={styles.createInfo}>
              <Image
                className={styles.profileImg}
                src={profileImg}
                width={24}
                height={24}
                alt='profile image'
              />
              <>
                <span className={styles.nickname}>{post.writer.nickname}</span>
                <span className={styles.createdAt}>
                  {formatDate(post.createdAt)}
                </span>
              </>
            </div>
            <div className={styles.likeArticleContainer}>
              <Image src={likeIcon} width={24} height={24} alt='like icon' />
              <span className={styles.likeCount}>123</span>
            </div>
          </div>
        </div>
        <div className={styles.articleContent}>
          <span>{post.content}</span>
        </div>
      </div>
      {/* 댓글 달기 */}
      <div className={styles.commentContainer}>
        <span className={styles.commentTitle}>댓글 달기</span>
        <input
          className={styles.commentInput}
          placeholder='댓글을 입력해주세요.'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></input>
        <button
          className={`${styles.registrationBtn} ${
            isFormValid({ comment }, ['comment']) ? styles.active : ''
          }`}
          disabled={!isFormValid({ comment }, ['comment'])}
        >
          등록
        </button>
      </div>
      {/* 댓글 */}
      <Comment />
    </div>
  );
}
