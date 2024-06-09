import back from "../images/back.svg";
import "./ProductDetail.css";
import { getProductId, getProductIdComments } from "../api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductComment from "./ProductComment";
import ProductDetailInfo from "./ProductDetailInfo";
import ProductInqury from "./ProductInqury";
import { Link } from "react-router-dom";

function ProductDetail() {
  const { productId } = useParams();
  const [detailItem, setDetailItem] = useState([]);
  const [ItemComment, setItemComment] = useState([]);

  const getProductDetail = async () => {
    const data = await getProductId({ productId });
    const comment = await getProductIdComments({ productId });
    setDetailItem(data);
    setItemComment(comment);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  console.log(detailItem);
  console.log(ItemComment);

  return (
    <div className="detail-wrapper">
      <ProductDetailInfo detailItem={detailItem} />
      <div className="line"></div>
      <ProductInqury />
      <ProductComment comment={ItemComment} />
      <Link to="/items" className="comment-link">
        <button className="list-button">
          목록으로 돌아가기
          <img
            src={back}
            alt="목록으로 돌아가기"
            width={"24px"}
            height={"24px"}
            className="list-img"
          />
        </button>
      </Link>
    </div>
  );
}

export default ProductDetail;
