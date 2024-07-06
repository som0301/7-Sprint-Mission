import React from "react";
import "./SignupPage.css";
import { Link } from "react-router-dom";
import EasyLogin from "../../components/Layout/UI/EasyLogin";
import GoHomeLogo from "../../components/Layout/UI/GoHomeLogo";
import AuthForm from "../../components/Layout/UI/AuthForm";

function SignupPage() {
  return (
    <div className="signup-page-main">
      <GoHomeLogo />
      <section className="input">
        <AuthForm mode="signup" />
      </section>
      <EasyLogin />
      <section className="goto-page">
        이미 회원이신가요? <Link to="/login">로그인</Link>
      </section>
    </div>
  );
}

export default SignupPage;
