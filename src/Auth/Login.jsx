import React from "react";
import "./Auth.css";
import logo from "../images/logo2X.png";
import google from "../images/google-logo.png";
import kakao from "../images/kakao-logo.png";

const Login = () => {
  return (
      <div class="container">
        <h1>
          <a href="index.html">
            <img
              class="logo"
              src={logo}
              alt="판다마켓"
              width="396"
              height="132"
            />
          </a>
        </h1>

        <form method="post" id="signupForm">
          <div class="email-password">
            <div class="input-system">
              <label for="email">이메일</label>
              <input
                class="email-input"
                type="text"
                id="email"
                placeholder="이메일을 입력해주세요"
              />
              <span class="email-error-message"></span>
            </div>
            <div class="input-system">
              <label for="password">비밀번호</label>
              <input
                class="password-input"
                type="password"
                id="password"
                placeholder="비밀번호를 입력해주세요"
              />
              <button
                type="button"
                class="password-button"
                alt="비밀번호 숨김"
              ></button>
              <span class="password-error-message"></span>
            </div>
            <button type="submit" class="login_submit">
              로그인
            </button>
          </div>
        </form>

        <div class="simple-login">
          <div class="simple-login-text">간편 로그인하기</div>
          <div class="icon">
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="google"
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
                class="kakao"
                src={kakao}
                alt="카카오톡"
                width="42"
                height="42"
              />
            </a>
          </div>
        </div>
        <div class="description">
          <span>판다마켓이 처음이신가요?</span>
          <a href="signup.html" class="member">
            회원가입
          </a>
        </div>
      </div>
  );
};

export default Login;
