export interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string[];
  images: string[];
  favoriteCount: number;
}

export interface Comment {
  id: number;
  content: string;
  writer: {
    nickname: string;
    image: string;
  };
  createdAt: string;
}