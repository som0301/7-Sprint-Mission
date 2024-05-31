import "../style/orderDropdown.css";

function OrderDropdown({ orderBy, setOrderBy }) {
  return (
    <>
      <div className="dropdown-container">
        <select
          className="order-dropdown"
          value={orderBy}
          onChange={(e) => {
            setOrderBy(e.target.value);
          }}
        >
          <option value="recent"> 최신순 </option>
          <option value="favorite"> 좋아요순 </option>
        </select>
      </div>
    </>
  );
}

export default OrderDropdown;
