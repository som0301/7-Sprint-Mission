export interface Item {
  id: number
  name: string
  description: string
  price: number
  tags: string[]
  images: string[]
  favoriteCount: number
  createdAt: string
}

export interface ItemListResponse {
  list: Item[]
  totalCount: number
}
