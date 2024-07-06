import React from "react";
import "./LoginPage.scss";
import { Link } from "react-router-dom";
import EasyLogin from "../../components/Layout/UI/EasyLogin";
import GoHomeLogo from "../../components/Layout/UI/GoHomeLogo";
import AuthForm from "../../components/Layout/UI/AuthForm";

function LoginPage() {
  return (
    <div className="login-page-main">
      <GoHomeLogo />
      <section className="input">
        <AuthForm mode="login" />
      </section>
      <EasyLogin />
      <section className="goto-page">
        판다마켓이 처음이신가요? <Link to="/signup">회원가입</Link>
      </section>
    </div>
  );
}

export default LoginPage;
