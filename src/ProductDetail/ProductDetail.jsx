import back from "../images/back.svg";
import { getProductId, getProductIdComments } from "../api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ProductDetail.css";
import ProductComment from "./ProductComment";
import ProductDetailInfo from "./ProductDetailInfo";
import ProductInqury from "./ProductInqury";

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
    <div>
      <ProductDetailInfo detailItem={detailItem} />
      <ProductInqury />
      <ProductComment comment={ItemComment} />
      <button>
        목록으로 돌아가기
        <img
          src={back}
          alt="목록으로 돌아가기"
          width={"24px"}
          height={"24px"}
        />
      </button>
      
    </div>
  );
}

export default ProductDetail;
