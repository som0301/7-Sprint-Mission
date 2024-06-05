import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailProduct } from '../components/api/api';
import DetailProduct from '../components/DetailProduct';

function ItemDetailPage() {
  const { productId } = useParams();
  const [detailProduct, setDetailProduct] = useState({});

  const handleDetailProduct = async (productId) => {
    const product = await getDetailProduct(productId);
    setDetailProduct(product);
  };

  useEffect(() => {
    handleDetailProduct(productId);
  }, []);

  return (
    <main>
      <DetailProduct product={detailProduct} />
      <hr />
    </main>
  );
}

export default ItemDetailPage;
