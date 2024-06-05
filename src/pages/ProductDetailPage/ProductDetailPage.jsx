import { useParams } from "react-router-dom";
import { getItemsDetail } from "../../api/api";
import { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails";

function ProductDetailPage() {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState([]);

  const fetchData = async () => {
    try {
      const result = await getItemsDetail({
        productId: productId,
      });
      setProductDetails(result);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("테스트 : ");
  console.log(productDetails);

  useEffect(() => {
    fetchData();
  }, [productId]);

  return (
    <div>
      <h2>Product Detail Page</h2>
      <p>Product ID: {productId}</p>
      <ProductDetails />
    </div>
  );
}

export default ProductDetailPage;
