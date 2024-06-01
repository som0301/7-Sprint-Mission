import { ReactComponent as LeftArrow } from '../image/lefticon.svg'
import { ReactComponent as RightArrow } from '../image/righticon.svg'
import './PaginationBar.css'

const PaginationBar = ({ pageTotal, activePage, onPageChange }) => {
  const MAX_VISIBLE_PAGES = 5
  let startPage

  if (pageTotal <= MAX_VISIBLE_PAGES) {
    startPage = 1
  } else {
    startPage = Math.max(activePage - Math.floor(MAX_VISIBLE_PAGES / 2), 1)
    startPage = Math.min(startPage, pageTotal - MAX_VISIBLE_PAGES + 1)
  }

  const pages = Array.from(
    { length: Math.min(MAX_VISIBLE_PAGES, pageTotal - startPage + 1) },
    (_, i) => startPage + i
  )

  return (
    <div className="pagination_bar">
      <button
        className="pagination_btn"
        disabled={activePage === 1}
        onClick={() => onPageChange(activePage - 1)}
      >
        <LeftArrow />
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`pagination_btn ${activePage === page ? 'active' : ''}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className="pagination_btn"
        disabled={activePage === pageTotal}
        onClick={() => onPageChange(activePage + 1)}
      >
        <RightArrow />
      </button>
    </div>
  )
}

export default PaginationBar
