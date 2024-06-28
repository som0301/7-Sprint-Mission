import { useParams } from 'react-router-dom'
import { getProductDetail } from '../../../service/Api'
import HeartIconUrl from '../../../image/hearticon.svg'
import { Item } from '../../../interfaces/item.interface'
import useFetch from '../../../hooks/useFetch'

const INITIAL_ITEM_DETAIL: Item = {
  id: 0,
  name: '',
  description: '',
  price: 0,
  tags: [],
  images: [],
  favoriteCount: 0,
  createdAt: '',
}

function ItemDetailSection() {
  const { productId } = useParams()
  const itemDetail = useFetch<Item>(
    () => getProductDetail(productId),
    INITIAL_ITEM_DETAIL
  )

  return (
    <div className="item-detail-section">
      <img
        src={itemDetail.images[0]}
        alt={itemDetail.name}
        className="item-detail-img"
      />
      <div className="item-detail">
        <div>
          <h1 className="item-detail-name">{itemDetail.name}</h1>
          <div className="item-detail-price">
            {Number(itemDetail.price).toLocaleString()}원
          </div>
          <hr />
          <h2>상품 소개</h2>
          <div className="item-detail-description">
            {itemDetail.description}
          </div>
          <h2>상품 태그</h2>
          <div className="item-detail-tags">
            {itemDetail.tags?.map((tag) => (
              <nav key={itemDetail.id} className="item-detail-tag">
                #{tag}
              </nav>
            ))}
          </div>
        </div>

        <nav className="item-detail-favorite">
          <img src={HeartIconUrl} />
          {itemDetail.favoriteCount}
        </nav>
      </div>
    </div>
  )
}

export default ItemDetailSection
