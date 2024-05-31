function FileInput() {
  return (
    <div>
      <div className="register-title">
        <h2>상품 등록하기</h2>
        <button className="small-button">등록</button>
      </div>
      <div className="product-input">
        <p className="file-input-title">상품 이미지</p>
        <label className="file-input-label" for="input-file" />
        <input type="file" id="input-file"></input>
      </div>
    </div>
  );
}

export default FileInput;
