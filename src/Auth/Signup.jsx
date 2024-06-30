import React from "react";
import "./Auth.css";
import logo from "../images/logo2X.png";
import google from "../images/google-logo.png";
import kakao from "../images/kakao-logo.png";


const Signup = () => {
  return (
    <div>
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
                type="text"
                class="email-input"
                id="email"
                placeholder="이메일을 입력해주세요"
              />
              <span class="email-error-message"></span>
            </div>
            <div class="input-system">
              <label for="nickname">닉네임</label>
              <input
                type="text"
                class="nickname-input"
                id="nickname"
                placeholder="닉네임을 입력해주세요"
              />
              <span class="nickname-error-message"></span>
            </div>
            <div class="input-system">
              <label for="passwordInput">비밀번호</label>
              <input
                type="password"
                class="password-input"
                id="passwordInput"
                placeholder="비밀번호를 입력해주세요"
              />
              <span class="password-error-message"></span>
              <button type="button" class="password-button"></button>
            </div>
            <div class="input-system">
              <label for="passwordconfirm">비밀번호 확인</label>
              <input
                type="password"
                class="password-confirm-input"
                id="passwordconfirm"
                placeholder="비밀번호를 다시 한 번 입력해주세요"
              />
              <button
                type="button"
                class="password-confirm-button"
                alt="비밀번호 표시"
              ></button>
              <span class="password-confirm-error-message"></span>
            </div>

            <button type="submit" class="signup_submit">
              회원가입
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
          <span>이미 회원이신가요?</span>
          <a href="login.html" class="member">
            로그인
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
