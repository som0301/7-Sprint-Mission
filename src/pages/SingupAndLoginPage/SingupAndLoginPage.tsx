import React from "react";
import "./SingupAndLoginPage.scss";
import { Link, useLocation } from "react-router-dom";
import EasyLogin from "../../components/Layout/Auth/EasyLogin";
import GoHomeLogo from "../../components/Layout/Auth/GoHomeLogo";
import AuthForm from "../../components/Layout/Auth/AuthForm";

function SingupAndLoginPage() {
  const { pathname } = useLocation();

  interface PageConfig {
    mode: "login" | "signup";
    buttonText: string;
    infoMessage: string;
    goToPage: string;
  }

  const pageConfig: { [key: string]: PageConfig } = {
    login: {
      mode: "login",
      buttonText: "회원가입",
      infoMessage: "판다마켓이 처음이신가요? ",
      goToPage: "/signup",
    },
    signup: {
      mode: "signup",
      buttonText: "로그인",
      infoMessage: "이미 회원이신가요? ",
      goToPage: "/login",
    },
  };

  const currentMode = pathname === "/login" ? "login" : "signup";
  const { mode, buttonText, infoMessage, goToPage } = pageConfig[currentMode];

  return (
    <div className="singup-and-loginpage-main">
      <GoHomeLogo />
      <section className="input">
        <AuthForm mode={mode} />
      </section>
      <EasyLogin />
      <section className="goto-page">
        {infoMessage}
        <Link to={goToPage}>{buttonText}</Link>
      </section>
    </div>
  );
}

export default SingupAndLoginPage;
