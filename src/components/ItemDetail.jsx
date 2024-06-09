import { useEffect, useState, useCallback } from "react";
import { getItemDetail } from "../api";
import { useParams } from "react-router-dom";

const itinialItem = {
  name: "",
  description: "",
  price: "",
  tags: [],
  images: [],
  favoriteCount: 0,
};

function ItemDetail({ product }) {
  const { productId } = useParams();
  const [item, setItem] = useState(itinialItem);

  const loadItem = useCallback(async () => {
    const newItem = await getItemDetail(productId);
    setItem(newItem);
  }, [productId]);

  useEffect(() => {
    loadItem(productId);
  }, [productId, loadItem]);

  return (
    <div>
      <img src={item.images[0]} alt={item.name} />
      <div>{item.name}</div>
      <div>{item.description}</div>
      <div>{item.price}</div>
      <div>{item.favoriteCount}</div>
    </div>
  );
}
