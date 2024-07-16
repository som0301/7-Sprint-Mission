export interface Writer {
  id: number;
  nickname: string;
}

export interface Article {
  id: number;
  title: string;
  content: string;
  image?: any; //모르겠습니다..
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  writer: Writer;
}
