import "./AddItemPage.css";
import logoImg from "../../assets/images/icons/ic_plus.svg";

function AddItemPage() {
  return (
    <section>
      <form>
        <div className="add-item-bar">
          <h1>상품 등록하기</h1>
          <button>등록</button>
        </div>
        <h2>상품 이미지</h2>
        <div className="add-image-wrapper">
          <img id="add-img" src={logoImg} art="추가하기"></img>
          <span>이미지 등록</span>
        </div>

        <h2>상품명</h2>
        <input
          id="item-title"
          className=""
          placeholder="상품명을 입력해주세요"
        ></input>
        <h2>상품 소개</h2>
        <textarea
          id="item-intro"
          placeholder="상품소개를 입력해주세요"
        ></textarea>
        <h2>판매가격</h2>
        <input id="item-cost" placeholder="판매가격을 입력해주세요"></input>
        <h2>태그</h2>
        <input id="item-tag" placeholder="태그를 입력해주세요"></input>
      </form>
    </section>
  );
}
export default AddItemPage;
