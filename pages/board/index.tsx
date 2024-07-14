import styles from './index.module.scss';
import Button from '@/components/Button';
import BestArticle from './BestAticle';
import Article from './Article';
import { Article as ArticleType } from '@/types/article.d';
import SearchBar from './SearchBar';
import SelectBox from './SelectBox';
import items from './mock.json';
import itemsBest from './mock-best.json';

const temArticle: ArticleType = {
  id: 1,
  title: '임시 제목',
  content: '임시 내용',
  image: null,
  likeCount: 1,
  createdAt: '2024-07-14',
  updatedAt: '2024-07-14',
  writer: { id: 7, nickname: '임시 닉네임' },
};

const SELECT_ORDER = {
  RECENT: '최신순',
  FAVORITE: '좋아요순',
};

const handleSelect = (selectedValue: string) => {
  if (selectedValue === SELECT_ORDER.RECENT) {
    // setOrder('recent');
  } else if (selectedValue === SELECT_ORDER.FAVORITE) {
    // setOrder('favorite');
  }
  // setPage(1);
};

const BoardPage = () => {
  const selectList = ['최신순', '좋아요순'];

  return (
    <div className={styles.boardPage}>
      <div className={styles.bestArticles}>
        <div className={styles.header}>
          <div className={styles.title}>베스트 게시글</div>
          <div className={styles.aticleContainer}>
            {itemsBest.list?.map((article) => {
              return (
                <BestArticle key={article.id} article={article}></BestArticle>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.normalArticles}>
        <div className={styles.header}>
          <div className={styles.title}>게시글</div>
          <Button skin='skyBlue' className={styles.btnWrite}>
            글쓰기
          </Button>
        </div>
        <div className={styles.controlBar}>
          <SearchBar />
          <SelectBox selectList={selectList} handleSelect={handleSelect} />
        </div>
        <div className={styles.aticleContainer}>
          {items.list?.map((article) => {
            return <Article key={article.id} article={article}></Article>;
          })}
        </div>
      </div>
    </div>
  );
};

export default BoardPage;
