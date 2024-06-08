import styles from './productdetail.module.css';
import { classModuleName } from '../../../modules';
import { useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProductComments } from '../../../api';
import Tag from '../../modules/tag/tag';
import heart from '../../../images/icons/ic_heart.svg';
import back from '../../../images/icons/ic_back.svg';
import Button from './../../modules/button/button';
import Comment from '../../modules/comment/comment';
import inquiryEmpty from '../../../images/media/Img_inquiry_empty.svg';

function ProductDetail() {
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');
  const location = useLocation();
  const { images, name, price, description, tags, id, favoriteCount } = location.state.item;
  const priceChangeKR = new Intl.NumberFormat('ko-KR').format(price);

  const handleLoad = async (options) => {
    let result;
    try {
      result = await getProductComments(options);
    } catch (error) {
      alert(error);
      return;
    } finally {
    }
    const { list } = result;

    setComments(list);
  };

  const handleChange = (e) => {
    const nextValue = e.target.value;
    setCommentInput(nextValue);
  };

  useEffect(() => {
    handleLoad(id);
  }, []);

  return (
    <div className={classModuleName('body', styles)}>
      <div className={classModuleName('main', styles)}>
        <section className={classModuleName('product-container', styles)}>
          <img style={{ height: `486px` }} src={images} alt={name} className={classModuleName('product-image', styles)} />
          <div className={classModuleName('product-info-container', styles)}>
            <h2 className={classModuleName('product-name', styles)}>{name}</h2>
            <p className={classModuleName('product-price', styles)}>{`${priceChangeKR}원`}</p>
            <hr className={classModuleName('line', styles)} />
            <h3 className={classModuleName('product-detail-title', styles)}>상품 소개</h3>
            <p className={classModuleName('product-detail-description', styles)}>{description}</p>
            <h3 className={classModuleName('product-detail-title', styles)}>상품 태그</h3>
            <div className={classModuleName('tag-container', styles)}>
              {tags.map((tag, index) => {
                return <Tag width={6} height={16} index={index} key={index} style={styles} value={tag} canDelete={false} />;
              })}
            </div>
            <div className={classModuleName('favorite-count-container', styles)}>
              <img src={heart} alt="하트 아이콘" />
              <p>{favoriteCount}</p>
            </div>
          </div>
        </section>
        <section className={classModuleName('body-bottom', styles)}>
          <form className={classModuleName('comment-input-form', styles)}>
            <h2>문의 하기</h2>
            <textarea
              value={commentInput}
              onChange={handleChange}
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            ></textarea>
            <div style={{ display: 'grid' }}>
              <Button type="button" isDisable={!commentInput}>
                등록
              </Button>
            </div>
          </form>
          {comments.length ? (
            <div className={classModuleName('comments-container', styles)}>
              {comments.map((comment) => {
                return <Comment key={comment.id} comment={comment} />;
              })}
            </div>
          ) : (
            <div className={classModuleName('inquiry-empty-container', styles)}>
              <img src={inquiryEmpty} alt="수화기를 들고 궁금해하는 판다" />
              <p>아직 문의가 없습니다.</p>
            </div>
          )}
          <Link to="/items">
            <Button inlineStyle={{ borderRadius: '40px', padding: '12px 38px' }}>
              목록으로 돌아가기
              <img src={back} alt="돌아가기" />
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
}

export default ProductDetail;
