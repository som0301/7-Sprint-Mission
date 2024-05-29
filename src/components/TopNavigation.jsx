import "../styles/TopNavigation.css";

function TopNavigation() {
  return (
    <div className="top-navigation-wrapper">
      <div className="top-navigation">
        <div className="link-section">
          <a href="/">
            <img className="logo-img" alt="판다마켓 로고" />
          </a>
          <div className="link-list">
            <a href="/">자유게시판</a>
            <a href="/" className="used-market-link">
              중고마켓
            </a>
          </div>
        </div>
        <a href="/login" className="btn-login element-click">
          로그인
        </a>
      </div>
    </div>
  );
}

export default TopNavigation;
