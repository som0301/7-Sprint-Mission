import "../style/pagenation.css";

function Pagenation({ setPage }) {
  return (
    <div className="page-button-group">
      <button
        className="page-button"
        onClick={() => {
          setPage(1);
        }}
      >
        &lt;
      </button>

      <button
        className="page-button"
        onClick={() => {
          setPage(1);
        }}
      >
        1
      </button>

      <button
        className="page-button"
        onClick={() => {
          setPage(2);
        }}
      >
        2
      </button>

      <button
        className="page-button"
        onClick={() => {
          setPage(3);
        }}
      >
        3
      </button>

      <button
        className="page-button"
        onClick={() => {
          setPage(4);
        }}
      >
        4
      </button>

      <button
        className="page-button"
        onClick={() => {
          setPage(5);
        }}
      >
        5
      </button>
      <button
        className="page-button"
        onClick={() => {
          setPage(6);
        }}
      >
        &gt;
      </button>
    </div>
  );
}

export default Pagenation;
