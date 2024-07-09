interface Writer {
  id: number;
  nickname: string;
  image: string;
}

export interface Comment {
  id: number;
  writer: Writer;
  updatedAt: string;
  createdAt: string;
  content: string;
}
