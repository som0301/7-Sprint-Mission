export interface Writer {
  id: number;
  nickname: string;
  image: string | null;
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

export interface Comment {
  content: string;
  createdAt: string;
  id: number;
  writer: Writer;
}
