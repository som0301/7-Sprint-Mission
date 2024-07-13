export interface Post {
  content: string;
  createdAt: string;
  id: number;
  image: string | null;
  likeCount: number;
  title: string;
  updatedAt: string;
  writer: {
    id: number;
    nickname: string;
  };
}

export interface PostApiData {
  page?: number;
  pageSize?: number;
  orderBy?: "recent" | "like";
}
