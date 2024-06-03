import S from './HeaderAddPage.module.css';
import { PandaFace, PandaProfile } from '../images';

function HeaderAddPage() {
  return (
    <>
      <header>
        <div className={S.header}>
          <div className={S.header_left}>
            <img
              className={S.header_logo}
              src={PandaFace}
              alt="판다얼굴"
            />
            <a className={S.logo_title}>판다마켓</a>
          </div>
          <nav className={S.header_nav}>
            <ul className={S.header_nav__menu}>
              <li>
                <a className={S.free_border}>자유게시판</a>
              </li>
              <li>
                <a className={S.used_market}>중고마켓</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className={S.header_right}>
          <img
            className={S.right_profile}
            src={PandaProfile}
          />
        </div>
      </header>
    </>
  );
}

export default HeaderAddPage;
