export interface Writer {
  id: number;
  nickname: string;
}

export interface Article {
  id: number;
  title: string;
  content: string;
  image: string | null;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  writer: Writer;
}

export interface Comment {
  id: number;
  writer: { nickname: string };
  content: string;
  createdAt: string;
}
