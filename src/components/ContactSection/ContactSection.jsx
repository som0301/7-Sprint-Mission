import React, { useState } from "react";
import "./ContactSection.css";

const ContactSection = () => {
  const [contactText, setContactText] = useState("");

  const handleChangeTextArea = (e) => {
    setContactText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="contact-section-container" onSubmit={handleSubmit}>
      <h2 className="contact-section-title">문의하기</h2>
      <textarea
        className="contact-section-textarea"
        name="contact"
        id="contact"
        value={contactText}
        onChange={handleChangeTextArea}
        placeholder="개인정보를 공유 및 요청하거나, 명예훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
      />
      <button disabled={!contactText} className="contact-section-button">
        등록
      </button>
    </form>
  );
};

export default ContactSection;
