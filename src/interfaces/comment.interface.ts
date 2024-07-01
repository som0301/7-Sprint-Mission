export interface Comment {
  id: number
  writer: {
    id: number
    nickname: string
    image: string
  }
  content: string
  updatedAt: string
  createdAt: string
}

export interface CommentListResponse {
  list: Comment[]
  totalCount: number
}
