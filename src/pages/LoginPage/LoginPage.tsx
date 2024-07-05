import React from "react";
import logoImg from "../../assets/images/icons/panda-market-logo.svg";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import EasyLogin from "../../UI/EasyLogin";
import TogglePassword from "../../UI/togglePassword";

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
              <TogglePassword />
            </div>
            <h3 id="password-error" className="error-message password">
              비밀번호를 입력해주세요.
            </h3>
          </div>
          <button className="button pill-button acc-button">로그인</button>
        </form>
      </section>
      <EasyLogin />
      <section className="signup">
        판다마켓이 처음이신가요? <Link to="/signup">회원가입</Link>
      </section>
    </div>
  );
}

export default LoginPage;
