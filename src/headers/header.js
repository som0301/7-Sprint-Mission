import logo from "../images/logo.svg";
import "./header.css";

function header() {
  const currentPage = "/items";

  return (
    <header>
      <h1>
        <img src={logo} alt="로고" width={"153px"} height={"51px"} />
        <div className="header-tab">
          <h2>자유게시판</h2>
          <h2 className={currentPage === "/items" ? "activeLink" : "inactiveLink"}>중고마켓</h2>
        </div>
      </h1>
      <button className="login">로그인</button>
    </header>
  );
}

export default header;
