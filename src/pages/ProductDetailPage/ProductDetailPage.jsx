import { useParams } from "react-router-dom";
import { getItemDetails as getProductDetails } from "../../api/api";
import { useEffect, useState } from "react";
import ProductDetails from "./components/ProductDetails";
import CommentsSection from "./components/CommentsSection";

function ProductDetailPage() {
  // 해당 페이지의 productId를 받아옴
  const { productId } = useParams();

  /* const [productDetails, setProductDetails] = useState({});로 설정했더니
  {Object.keys(productDetails).length > 0 && (<ProductDetails productDetails={productDetails} />)} 는 가능하지만
  {productDetails && <ProductDetails productDetails={productDetails} />} 식으로 표현이 불가함.
  그 이유가 초기에 productDetails가 빈 객체이므로 {productDetails && <ProductDetails productDetails={productDetails} />}에서는
  항상 참(true)으로 평가가 되고
  데이터를 가져와서 각 속성을 설정하는 과정에서 비동기 처리를 완료하기 전에 ProductDetails 컴포넌트가 렌더링되기 때문에 에러가 발생
  빈 객체에는 images, tags, name, price, description 등의 속성이 없으므로 해당 속성에 접근할 때 undefined가 반환되어 에러가 발생
  간단하게 처리 가능한데 돌고 돌았음..
  */

  // 상품 상세 내용을 서버에서 받아올 객체
  const [productDetails, setProductDetails] = useState(null);
  const [productComments, setProductComments] = useState(null);

  const fetchData = async () => {
    try {
      const productDetailsResult = await getProductDetails({
        productId,
      });

      const productCommentResult = await getProductDetails({
        productId,
        comments: true,
      });

      /* 데이터를 받아온 후에 validatedProductDetails 생성. 값이 없을 때 발생하는 오류 방지였으나 값이 없을 때 렌더링 방지 후 필요없음을 깨달음
      const validatedProductDetails = {
        images: result?.images || [],
        tags: result?.tags || [],
        name: result?.name || "",
        price: result?.price || "",
        description: result?.description || "",
      };
      setProductDetails(validatedProductDetails); 
      */

      setProductDetails(productDetailsResult);
      setProductComments(productCommentResult);

      console.log(productCommentResult);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [productId]);

  return (
    <section>
      {/* {Object.keys(productDetails).length > 0 && (
        <ProductDetails productDetails={productDetails} />
      )} 원래는 이렇게 했으나 더 깔끔하게 변경하고 싶었음*/}
      {/* ProductDetails 값이 있을 때만 컴포넌트를 렌더링 */}
      {productDetails && <ProductDetails productDetails={productDetails} />}
      <CommentsSection />
    </section>
  );
}

export default ProductDetailPage;
