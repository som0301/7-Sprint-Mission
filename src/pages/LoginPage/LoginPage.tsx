import React from "react";
import logoImg from "../../assets/images/icons/panda-market-logo.svg";
import "./LoginPage.css";
import visibilityOn from "../../assets/images/icons/btn_visibility_on.svg";
import visibilityOff from "../../assets/images/icons/btn_visibility_off.svg";
import kakaotalkLoge from "../../assets/images/social/kakaotalk-logo.svg";
import googleLoge from "../../assets/images/social/google-logo.svg";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="login-page-main">
      <section className="go-home-logo">
        <a href="/">
          <img src={logoImg} alt="판다 마켓 홈" width="396" />
        </a>
      </section>
      <section className="input">
        <form method="post" id="login" className="form">
          <div className="input-area">
            <label htmlFor="email">이메일</label>
            <input
              id="email"
              name="email"
              placeholder="이메일을 입력해주세요"
              autoComplete="email"
              required
            />
            <h3 id="email-error" className="error-message email">
              이메일을 입력해주세요.
            </h3>
          </div>
          <div className="input-area">
            <label htmlFor="password">비밀번호</label>
            <div className="password-input">
              <input
                id="password"
                name="password"
                className="password-event"
                type="password"
                placeholder="비밀번호를 입력해주세요"
                autoComplete="current-password"
                required
              />
              <button className="visibility-button" type="button">
                <img
                  className="visibility-off"
                  src={visibilityOff}
                  alt="비밀번호 가리기"
                  width="24"
                />
                <img
                  className="visibility-on"
                  src={visibilityOn}
                  alt="비밀번호 보이기"
                  width="24"
                />
              </button>
            </div>
            <h3 id="password-error" className="error-message password">
              비밀번호를 입력해주세요.
            </h3>
          </div>
          <button className="button pill-button acc-button">로그인</button>
        </form>
      </section>
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
      <section className="signup">
        판다마켓이 처음이신가요? <Link to="/signup">회원가입</Link>
      </section>
    </div>
  );
}

export default LoginPage;
