import React, { useState } from "react";

const ProductInqury = () => {
  const [isDisabled, setIsDisabled] = useState("");

  return (
    <div className="middle-wrapper">
      <h3 className="inqury">문의하기</h3>
      <textarea
        value={isDisabled}
        className="inqury-box"
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        onChange={(e) => setIsDisabled(e.target.value)}
      />
      <button className="middle-wrapper-button" disabled={!isDisabled}>등록</button>
    </div>
  );
};

export default ProductInqury;
