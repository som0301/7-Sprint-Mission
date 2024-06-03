function Dropdown({ filter, changeFilter }) {
  return (
    <>
      <select
        className="all-item-dropdown"
        value={filter}
        onChange={changeFilter}
      >
        <option value="recent">최신순</option>
        <option value="favorite">좋아요순</option>
      </select>
    </>
  );
}

export default Dropdown;
