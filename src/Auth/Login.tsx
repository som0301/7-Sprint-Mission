import React from "react";
import "./Auth.css";
import logo from "../images/logo2X.png";
import google from "../images/google-logo.png";
import kakao from "../images/kakao-logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
      <div className="login-container">

        <div className="login-logo">
          <Link to="/">
            <img
              className="login-logo-img"
              src={logo}
              alt="판다마켓"
              width="396"
              height="132"
            />
          </Link>
        </div>

        <form method="post" id="signupForm">
          <div className="email-password">
            <div className="input-system">
              <label htmlFor="email">이메일</label>
              <input
                className="email-input"
                type="text"
                id="email"
                placeholder="이메일을 입력해주세요"
              />
              <span className="email-error-message"></span>
            </div>
            <div className="input-system">
              <label htmlFor="password">비밀번호</label>
              <input
                className="password-input"
                type="password"
                id="password"
                placeholder="비밀번호를 입력해주세요"
              />
              <button
                type="button"
                className="password-button"
              ></button>
              <span className="password-error-message"></span>
            </div>
            <button type="submit" className="login_submit">
              로그인
            </button>
          </div>
        </form>

        <div className="simple-login">
          <div className="simple-login-text">간편 로그인하기</div>
          <div className="login-icon-wrapper">
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="google"
                src={google}
                alt="구글"
                width="42"
                height="42"
              />
            </a>
            <a
              href="https://www.kakaocorp.com/page/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="kakao"
                src={kakao}
                alt="카카오톡"
                width="42"
                height="42"
              />
            </a>
          </div>
        </div>
        <div className="auth-description">
          <span className="auth-description-text">판다마켓이 처음이신가요?</span>
          <Link to="/signup" className="login-signup">
            회원가입
          </Link>
        </div>
      </div>
  );
};

export default Login;
