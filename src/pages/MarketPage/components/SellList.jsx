import "./SellList.css";
import ItemCard from "./ItemCard.jsx";
import Button from "../../../components/Button.jsx";
import { Link } from "react-router-dom";

function SellList({ type = "", items }) {
  const sectionTitle = type === "best" ? "베스트 상품" : "판매 중인 상품";

  return (
    <section className={`SellList ${type}`}>
      <div className="SellList-header">
        <h2 className="SellList-title">{sectionTitle}</h2>

        {!type && (
          <Link to="/additem">
            <Button className="button small">상품 등록하기</Button>
          </Link>
        )}
      </div>
      <div className={`SellList-items ${type}`}>
        {items.map((item) => (
          <Link to={`/items/${item.id}`}>
            <ItemCard
              className={type}
              images={item.images}
              name={item.name}
              price={item.price}
              favoriteCount={item.favoriteCount}
            ></ItemCard>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default SellList;
