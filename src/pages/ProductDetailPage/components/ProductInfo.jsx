import "./ProductInfo.css";
import InfoBlock from "../../../components/InfoBlock";
import Tag from "../../../components/Tag";
import FavoriteButton from "./FavoriteButton";
import DividerLine from "../../../components/DividerLine";

function ProductInfo({
  images = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvtLcEbK72DdI2-0yjNOHLvzQeJqLRKhirxA&s",
  name = "",
  price = 0,
  description = "",
  tags = [],
  favoriteCount = 0,
}) {
  return (
    <section class="ProductInfo">
      <img src={images[0]}></img>
      <div className="ProductInfo-detail">
        <div className="ProductInfo-title-area">
          <h2>{name}</h2>
          <p>{`${price.toLocaleString("ko-KR")}원`}</p>
        </div>
        <DividerLine space="16px 0" />
        <div className="ProductInfo-explanation">
          <InfoBlock title="상품 소개">
            <p>{description}</p>
          </InfoBlock>
          <InfoBlock title="상품 태그">
            {tags.map((tag) => (
              <Tag>{tag}</Tag>
            ))}
          </InfoBlock>
        </div>
        <FavoriteButton>{favoriteCount}</FavoriteButton>
      </div>
    </section>
  );
}

export default ProductInfo;
