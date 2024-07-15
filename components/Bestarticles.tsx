import style from "@/styles/BestArticles.module.scss";

interface ArticlesProps {
    id: number;
    title: string;
    content: string;
    image: File | null;
    likeCount: number;
    createAt: Date;
    updateAt: Date;
    writer: {
      id: number;
      nickname: string;
    };
  }
  

function BestArticles(articlesList: ArticlesProps[]) {
  return (
    <div className={style.bestarticleslayer}>
      <p>베스트 게시글</p>
      <div></div>
      <div>
        <div>
          <p>게시글</p>
          <button>글쓰기</button>
          <div>
            <input></input>
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}

export default BestArticles;
