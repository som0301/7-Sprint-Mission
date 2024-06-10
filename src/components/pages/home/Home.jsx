import styles from './Home.module.css';
import '../../../css/define.css';
import '../../../fonts/pretendard.css';
import ImgHomeTop from '../../../images/media/Img_home_top.svg';
import ImgHome01 from '../../../images/media/Img_home_01.svg';
import ImgHome02 from '../../../images/media/Img_home_02.svg';
import ImgHome03 from '../../../images/media/Img_home_03.svg';
import ImgHomeBottom from '../../../images/media/Img_home_bottom.png';
import { classModuleName } from '../../../modules';

function Home() {
  return (
    <div className={classModuleName('home-body media',styles)}>
      
      <header className={classModuleName("home-header media",styles)}>
        <div className={classModuleName("container main-container media",styles)}>
          <h2 className={classModuleName("big-message media",styles)}>일상의 모든 물건을 거래해 보세요</h2>
          <a href="/login">
            <button type="button" className={classModuleName("media-headerbutton media",styles)}>
              구경하러 가기
            </button>
          </a>
        </div>
        <div className={classModuleName("container-img header-container-img media",styles)}>
          <img src={ImgHomeTop} alt="Img_home_top" className={classModuleName("header-img media",styles)} />
        </div>
      </header>
      <main className={classModuleName("main main-media",styles)}>
        <div className={classModuleName("container main-media",styles)}>
          <img src={ImgHome01} alt="Img_home_01" className={classModuleName("main-img media",styles)} />
          <div className={classModuleName("main-info main-media",styles)}>
            <p className={classModuleName("main-title main-media",styles)}>Hot item</p>
            <h2 className={classModuleName("main-head main-media",styles)}>인기 상품을 확인해 보세요</h2>
            <p className={classModuleName("main-main main-media",styles)}>
              가장 HOT한 중고거래 물품을 <br />
              판다 마켓에서 확인해 보세요
            </p>
          </div>
        </div>
        <div className={classModuleName("container right main-media",styles)}>
          <div className={classModuleName("main-info right main-media",styles)}>
            <p className={classModuleName("main-title main-media",styles)}>Search</p>
            <h2 className={classModuleName("main-head main-media",styles)}>구매를 원하는 상품을 검색하세요</h2>
            <p className={classModuleName("main-main main-media",styles)}>
              구매하고 싶은 물품은 검색해서 <br />
              쉽게 찾아보세요
            </p>
          </div>
          <img src={ImgHome02} alt="Img_home_02" className={classModuleName("main-img media",styles)} />
        </div>
        <div className={classModuleName("container main-media",styles)}>
          <img src={ImgHome03} alt="Img_home_03" className={classModuleName("main-img media",styles)} />
          <div className={classModuleName("main-info main-media",styles)}>
            <p className={classModuleName("main-title main-media",styles)}>Register</p>
            <h2 className={classModuleName("main-head main-media",styles)}>판매를 원하는 상품을 등록하세요</h2>
            <p className={classModuleName("main-main main-media",styles)}>
              어떤 물건이든 판매하고 싶은 상품을 <br />
              쉽게 등록하세요
            </p>
          </div>
        </div>
      </main>
      <footer className={classModuleName("footer-top footer-media media",styles)}>
        <div className={classModuleName("container footer-container media",styles)} >
          <h2 className={classModuleName("big-message footer-media media",styles)}>
            믿을 수 있는
            <br />
            판다마켓 중고거래
          </h2>
        </div>
        <div className={classModuleName("container-img footer-img-container media",styles)}>
          <img src={ImgHomeBottom} alt="Img_home_bottom" className={classModuleName("footerimg media",styles)} />
        </div>
      </footer>
      <footer className={classModuleName("footer-background media",styles)}>
        <div className={classModuleName("footer-bottom footer-media",styles)}>
          <div className={classModuleName("footer-name-year media",styles)}>
            <p>@codeit - 2024</p>
          </div>
          <div className={classModuleName("footer-tag media",styles)}>
            <a href="privacy.html">Privacy Policy</a>
            <a href="faq.html">FAQ</a>
          </div>
          <div className={classModuleName("footer-link media",styles)}>
            <a href="https://www.facebook.com/" className={classModuleName("icon-facebook media",styles)} target="_blank"></a>
            <a href="https://twitter.com/" className={classModuleName("icon-twitter media",styles)} target="_blank"></a>
            <a href="https://www.youtube.com/" className={classModuleName("icon-youtube media",styles)} target="_blank"></a>
            <a href="https://www.instagram.com/" className={classModuleName("icon-instagram media",styles)} target="_blank"></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
