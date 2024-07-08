export interface Product {
  id: number;
  images: string;
  favoriteCount: number;
  name: string;
  description: string;
  price: number;
  tags: string[];
}

export interface ApiResponse {
  list: Product[];
  totalCount: number;
}
