import React from "react";
import kakaotalkLoge from "../../../assets/images/social/kakaotalk-logo.svg";
import googleLoge from "../../../assets/images/social/google-logo.svg";

function EasyLogin() {
  return (
    <section className="easy-login">
      <h3>간편 로그인하기</h3>
      <div>
        <a href="https://www.google.com/" target="_blank">
          <img src={googleLoge} alt="구글" width="42" />
        </a>
        <a href="https://www.kakaocorp.com/page/" target="_blank">
          <img src={kakaotalkLoge} alt="카카오톡" width="42" />
        </a>
      </div>
    </section>
  );
}

export default EasyLogin;
