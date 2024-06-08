import { useEffect, useState } from "react";
import "./ProductDetailPage.css";
import { getDeviceType, debounce } from "../../modules/js/utils.js";
import ProductInfo from "./components/ProductInfo.jsx";
import { Link, useParams } from "react-router-dom";
import { getComments, getProductById } from "../../api.js";
import DividerLine from "../../components/DividerLine.jsx";
import CommentForm from "./components/CommentForm.jsx";
import CommentBox from "./components/CommentBox.jsx";
import commentsNotFound from "../../assets/images/img_commentNotFound.svg";
import Button from "../../components/Button.jsx";

const dividerSpace = {
  mobile: "0 0 -8px",
  tablet: "0",
  desktop: "8px 0 0",
};

function ProductDetailPage() {
  const [deviceType, setDeviceType] = useState();
  const [product, setProduct] = useState({});
  const [comments, setComments] = useState([]);
  const { productId } = useParams();

  useEffect(() => {
    handleGetProduct();
    handleGetCommentList();
  }, []);

  useEffect(() => {
    handleResize();
  }, [deviceType]);

  const handleResize = () => {
    const width = window.innerWidth;
    const device = getDeviceType(width);
    setDeviceType(device);
  };

  const handleGetProduct = async () => {
    const product = await getProductById(productId);
    setProduct(product);
  };

  const handleGetCommentList = async () => {
    const { list } = await getComments(productId);
    setComments(list);
  };

  useEffect(() => {
    const debouncedHandleResize = debounce(handleResize, 200);
    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  return (
    <section className="ProductDetailPage">
      <ProductInfo
        images={product.images}
        name={product.name}
        price={product.price}
        description={product.description}
        tags={product.tags}
        favoriteCount={product.favoriteCount}
      ></ProductInfo>
      <DividerLine space={`${dividerSpace[deviceType]}`} />
      <CommentForm></CommentForm>
      {comments.length ? (
        comments.map((comment) => (
          <CommentBox
            content={comment.content}
            updatedAt={comment.updatedAt}
            nickname={comment.writer.nickname}
            image={comment.writer.image}
          ></CommentBox>
        ))
      ) : (
        <img
          className="ProductDetailPage-comments-not-found"
          src={commentsNotFound}
        ></img>
      )}
      <Link to={`/items`}>
        <Button className="button medium">목록으로 돌아가기 ↩️</Button>
      </Link>
    </section>
  );
}

export default ProductDetailPage;
