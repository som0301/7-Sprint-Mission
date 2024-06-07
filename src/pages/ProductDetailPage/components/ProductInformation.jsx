import { getCommasToNumber } from "../../../utils/Utils";
import ProductTags from "./ProductTags";
import favoriteImg from "../../../assets/images/icons/ic_heart.svg";
import kebabImg from "../../../assets/images/icons/ic_kebab.svg";

const ProductInfo = ({
  productDetails: { tags, name, price, description, favoriteCount },
}) => {
  price = getCommasToNumber(price);

  return (
    <div className="ProductInfo">
      <h1>{name}</h1>
      <img src={kebabImg} alt="더보기" />
      <h2>{price}원</h2>
      <h3>상품 소개</h3>
      <p>{description}</p>
      <h3>상품 태그</h3>
      <div className="Tags">
        {tags.map((tag, index) => (
          <ProductTags key={index} tag={tag} />
        ))}
      </div>
      <img src={favoriteImg} alt="좋아요 수" />
      <h3>{favoriteCount}</h3>
    </div>
  );
};

export default ProductInfo;
