
const ProductCard = ({imageUrl,title,price,lickCount}) => {
  return (
      <div>
        <img src = {imageUrl} alt = "아이폰" style={{
          width:'282px',
          height: '282px',
          borderRadius: '16px',
        }} />
        <div style={{
          display:'flex',
          flexDirection:'column',
          gap:'6px',
        }}>
            <p>{title}</p>
            <p>{price}원</p>
            <div>
              <img src = "images/icons/heart.png" alt = "좋아요"/>
              <p>{lickCount}</p>
            </div>
        </div>
      </div>
  )
}
export default ProductCard;