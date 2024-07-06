import { Link } from "react-router-dom";
import "./Authentication.css";
import logo from "../../assets/logo.svg";
import visibility_off from "../../assets/btn_visibility_off_24px.svg";
import visibility_on from "../../assets/btn_visibility_on_24px.svg";
import google_ic from "../../assets/google-icon.svg";
import kakao_ic from "../../assets/kakao-icon.svg";

const Signup = () => {
  return (
    <div className="body-container">
      <Link to="/" className="auth-logo-link">
        <button className="auth-logo" type="button">
          <img src={logo} alt="판다마켓로고" />
        </button>
      </Link>
      <div className="auth-container">
        <form className="auth-form">
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="이메일을 입력해주세요"
          />
          <label htmlFor="nickname">닉네임</label>
          <input
            type="text"
            id="nickname"
            name="nickname"
            placeholder="닉네임을 입력해주세요"
          />
          <label htmlFor="password">비밀번호</label>
          <div className="input-container">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="비밀번호를 입력해주세요"
            />
            <button className="btn_visibility" type="button">
              <img
                className="eyes-img"
                src={visibility_off}
                alt="비밀번호가리기아이콘"
              />
            </button>
          </div>
          <label htmlFor="password-check">비밀번호 확인</label>
          <div className="input-container">
            <input
              type="password"
              id="password-check"
              name="password-check"
              placeholder="비밀번호를 다시 한 번 입력해주세요"
            />
            <button className="btn_visibility" type="button">
              <img
                className="eyes-img"
                src={visibility_off}
                alt="비밀번호가리기아이콘"
              />
            </button>
          </div>
          <Link to="/login" className="btn_large-link">
            <button className="btn_large" type="submit" disabled>
              회원가입
            </button>
          </Link>
        </form>
        <div className="sns-login">
          <div>간편 로그인하기</div>
          <div className="sns-icon">
            <button
              type="button"
              onClick={() => (location.href = "https://www.google.com/")}
            >
              <img src={google_ic} alt="구글아이콘" />
            </button>
            <button
              type="button"
              onClick={() =>
                (location.href = "https://www.kakaocorp.com/page/")
              }
            >
              <img src={kakao_ic} alt="카톡아이콘" />
            </button>
          </div>
        </div>
        <div className="login-page-move">
          이미 회원이신가요? <Link to="/login">로그인</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
