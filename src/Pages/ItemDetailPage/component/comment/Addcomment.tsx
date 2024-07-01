import { ChangeEvent, FormEvent, useState } from 'react'

function Addcomment() {
  const [addComment, setaddComment] = useState('')

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setaddComment(e.target.value)
  }

  const handleCommentSubmit = (e: FormEvent) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('addComment', addComment)
  }

  return (
    <div className="add-comment-section">
      <hr />
      <div className="add-comment-title">문의 하기</div>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          className="input-comment"
          name="addComment"
          onChange={handleCommentChange}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
        <div className="btn-section">
          <button type="submit" className="btn-submit btn-comment-submit">
            등록
          </button>
        </div>
      </form>
    </div>
  )
}

export default Addcomment
