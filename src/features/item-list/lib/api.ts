// 매개변수 타입 정의
export interface GetItemsParams {
  page: number;
  pageSize: number;
  order: 'favorite' | 'recent';
  search?: string;
}

// API 타입 정의
export interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string[];
  images: string[];
  ownerId: number;
  favoriteCount: number;
  createdAt: string;
  updatedAt: string;
}

//응답 타입 정의
export interface GetItemsResponse {
  list: Item[];
  totalCount: number;
}
