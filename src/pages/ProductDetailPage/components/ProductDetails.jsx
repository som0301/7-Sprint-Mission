import ProductInformation from "./ProductInformation";

const ProductDetails = ({ productDetails }) => {
  const productImage = productDetails.images[0];

  return (
    <div className="productDetailsWrapper">
      <div className="productDetails">
        <img id="productImage" src={productImage} alt="상품 이미지" />
        <ProductInformation productDetails={productDetails} />
      </div>
      <div id="centerLine" className="dividerLine"></div>
    </div>
  );
};

export default ProductDetails;
