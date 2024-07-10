export interface Writer {
  id: number;
  nickname: string;
}

export interface Article {
  content: string;
  createdAt: string;
  id: number;
  image: string | null;
  likeCount: number;
  title: string;
  writer: Writer;
}

export interface ArticleList {
  list: Article[];
}
