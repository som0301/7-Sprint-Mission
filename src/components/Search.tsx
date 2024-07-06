import '@assets/styles/Search.css';

interface Props {
  name?: string;
  className?: string;
}

function Search({ name, className }: Props) {
  return (
    <div className='input-search-div'>
      <input
        name={name}
        className={`input-search ${className}`}
        placeholder='검색할 상품을 입력해주세요'
      ></input>
    </div>
  );
}

export default Search;
