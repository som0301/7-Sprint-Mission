import iconSearch from "/src/assets/ic_search.svg";
import "/src/styles/Search.css";

function Search({ name, className }) {
  return (
    <div className="input-search-div">
      <input
        name={name}
        className="input-search"
        placeholder="검색할 상품을 입력해주세요"
      ></input>
    </div>
  );
}

export default Search;
