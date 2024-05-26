import "../styles/TopNavigation.css";

function TopNavigation() {
  return (
    <div className="TopNavigation-wrapper">
      <div className="TopNavigation">
        <div className="TopNavigation-link-section">
          <a href="/">
            <img className="TopNavigation-logo-img" alt="판다마켓 로고" />
          </a>
          <div className="TopNavigation-link-list">
            <a href="/">자유게시판</a>
            <a href="/" className="TopNavigation-used-market-link">
              중고마켓
            </a>
          </div>
        </div>
        <a
          href="/login"
          className="TopNavigation-btn-login TopNavigation-element-click"
        >
          로그인
        </a>
      </div>
    </div>
  );
}

export default TopNavigation;
