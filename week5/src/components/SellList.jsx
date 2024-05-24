import "./SellList.css";
import ItemCard from "./ItemCard.jsx";

function SellList({ type = "", items }) {
  const sectionTitle = type === "best" ? "베스트 상품" : "판매 중인 상품";

  return (
    <section className={`SellList ${type}`}>
      <h2 className="SellList-title">{sectionTitle}</h2>
      <div className={`SellList-items ${type}`}>
        {items.map((item) => (
          <ItemCard
            className={type}
            images={item.images}
            name={item.name}
            price={item.price}
            favoriteCount={item.favoriteCount}
          ></ItemCard>
        ))}
      </div>
    </section>
  );
}

export default SellList;
