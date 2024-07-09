import { NavLink, Link, useLocation } from 'react-router-dom';
import '../styles/TopNavigation.scss';
import userProfileImg from '../assets/icons/ic_user_profile.svg';

function TopNavigation() {
  const location = useLocation();
  const isAdditemPage = location.pathname === '/additem' ? true : false;
  function getLinkStyle({ isActive }: { isActive: boolean }) {
    return {
      color: isActive ? 'var(--blue-color)' : undefined,
    };
  }
  return (
    <div className='top-navigation-wrapper'>
      <div className='top-navigation'>
        <div className='link-section'>
          <Link to='/'>
            <img className='logo-img' alt='판다마켓 로고' />
          </Link>
          <div className='link-list'>
            <NavLink to='/board' style={getLinkStyle} className='page-focus'>
              자유게시판
            </NavLink>
            <NavLink
              to='/items'
              style={
                isAdditemPage ? { color: 'var(--blue-color)' } : getLinkStyle
              }
            >
              중고마켓
            </NavLink>
          </div>
        </div>
        {isAdditemPage ? (
          <button className='btn-profile'>
            <img src={userProfileImg} alt='기본_사용자_프로필_이미지' />
          </button>
        ) : (
          <NavLink to='/login' className='btn-login element-click'>
            로그인
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default TopNavigation;
