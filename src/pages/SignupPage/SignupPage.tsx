import React from "react";
import "./SignupPage.css";
import logoImg from "../../assets/images/icons/panda-market-logo.svg";
import EasyLogin from "../../UI/EasyLogin";
import { Link } from "react-router-dom";
import TogglePassword from "../../UI/togglePassword";

function SignupPage() {
  return (
    <div className="signup-page-main">
      <section className="go-home-logo">
        <a href="/">
          <img src={logoImg} alt="판다 마켓 홈" width="396" />
        </a>
      </section>
      <section className="input">
        <form method="post" id="signup" className="form">
          <div className="input-area">
            <label htmlFor="email">이메일</label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="이메일을 입력해주세요"
              required
            />
            <h3 id="email-error" className="error-message email">
              이메일을 입력해주세요.
            </h3>
          </div>
          <div className="input-area">
            <label htmlFor="nickname">닉네임</label>
            <input
              id="nickname"
              name="nickname"
              type="text"
              placeholder="닉네임을 입력해주세요"
              autoComplete="username"
              required
            />
            <h3 id="nickname-error" className="error-message nickname">
              닉네임을 입력해주세요.
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
          <div className="input-area">
            <label htmlFor="password">비밀번호 확인</label>
            <div className="password-input">
              <input
                id="passwordConfirmation"
                name="passwordConfirmation"
                className="password-event"
                type="password"
                placeholder="비밀번호를 다시 한번 입력해주세요"
                autoComplete="current-password"
                required
              />
              <TogglePassword />
            </div>
            <h4
              id="password-check-error"
              className="error-message passwordConfirmation"
            >
              비밀번호를 확인을 입력해주세요.
            </h4>
          </div>
          <button className="button pill-button acc-button">회원가입</button>
        </form>
      </section>
      <EasyLogin />
      <section className="signup">
        이미 회원이신가요? <Link to="/login">로그인</Link>
      </section>
    </div>
  );
}

export default SignupPage;
