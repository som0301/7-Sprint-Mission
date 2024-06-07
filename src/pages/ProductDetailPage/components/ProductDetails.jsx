import ProductInformation from "./ProductInformation";

const ProductDetails = ({ productDetails }) => {
  /* 부모 컴포넌트에서 받은 productDetails.images에 값이 없을 때 오류가 발생하여 아래 내용으로 설정
  const productImage = productDetails?.images?.[0]; 해서 src에 할당
  다른 방법으로는
  const {
    images = [],
  } = productDetails || {}; 도 가능함
  그런데 자식에서 개별로 검사하는 것보다 애초에 부모 ProductDetailPage.jsx에서
  productDetails 값을 넘겨줄 때 값이 없는지 체크해야 효율적일수도? 그래서 부모에서 검사하기로 함.
  */

  console.log(productDetails);

  const productImage = productDetails.images[0];

  return (
    <div className="ProductDetails">
      <img src={productImage} alt="상품 이미지" />
      <ProductInformation productDetails={productDetails} />
    </div>
  );
};

export default ProductDetails;
