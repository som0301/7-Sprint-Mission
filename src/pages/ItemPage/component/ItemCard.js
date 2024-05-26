import HeartIconUrl from '../../../image/hearticon.svg'

function ItemCard({ item }) {
  return (
    <div className="item-card">
      <img src={item.images[0]} alt={item.name} className="item-card-img" />
      <div className="item-card-description">
        <h2 className="item-name">{item.name}</h2>
        <p className="item-price">{item.price.toLocaleString()}원</p>
        <div className="item-favorite">
          <img src={HeartIconUrl} />
          {item.favoriteCount}
        </div>
      </div>
    </div>
  )
}

export default ItemCard
