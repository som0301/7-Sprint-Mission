import xIcon from "../../assets/images/icons/ic_x.svg";

function ItemTag({ value, onCencle }) {
  function handleCencleClick() {
    onCencle(value);
  }

  return (
    <>
      <div className="tag-box">
        {value}
        <button className="cancel-button" onClick={handleCencleClick}>
          <img src={xIcon} alt="태그 삭제" />
        </button>
      </div>
    </>
  );
}
export default ItemTag;
