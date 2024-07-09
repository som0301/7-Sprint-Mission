export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  tags: string[];
  images: string[];
  ownerId: number;
  favoriteCount: number;
}
