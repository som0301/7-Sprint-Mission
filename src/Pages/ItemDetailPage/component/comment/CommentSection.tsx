import { useParams } from 'react-router-dom'
import { getComment } from '../../../../service/Api'
import CommentItem from './CommentItem'
import Addcomment from './Addcomment'
import { CommentListResponse } from '../../../../interfaces/comment.interface'
import useFetch from '../../../../hooks/useFetch'

function CommentSection() {
  const { productId } = useParams()
  const fetchComments = useFetch<CommentListResponse>(
    () => getComment(productId),
    {
      list: [],
      totalCount: 0,
    }
  )
  const { list: commentItem } = fetchComments

  return (
    <div className="comment-section">
      <Addcomment />
      {commentItem?.map((comment) => (
        <CommentItem comment={comment} key={comment.id} />
      ))}
    </div>
  )
}

export default CommentSection
