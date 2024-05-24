function BestProductList({ item }) {
  return (
    <div className="BestProductListItem">
      <img className="BestProductList-img" src={images} alt={name} />
      <div>
        <p>{description}</p>
        <h1>`${price}원`</h1>
      </div>
    </div>
  );
}

export default BestProductList;
