import useNavigator from '@hooks/useNavigator';
import { Helmet } from 'react-helmet';
import { StyledButton } from '@components/common/Button';

import './HomePage.scss';

import HomeImage01 from '@assets/images/Img_home_01.png';
import HomeImage02 from '@assets/images/Img_home_02.png';
import HomeImage03 from '@assets/images/Img_home_03.png';
import iconTwitter from '@assets/images/ic_twitter.svg';
import iconYoutube from '@assets/images/ic_youtube.svg';
import iconFacebook from '@assets/images/ic_facebook.svg';
import iconInstagram from '@assets/images/ic_instagram.svg';

function HomePage() {
  const handleMovePage = useNavigator();
  return (
    <>
      <Helmet>
        <title>판다마켓 - 홈페이지</title>
      </Helmet>
      <main>
        <div className='sky main-top'>
          <div className='container main-top-panda'>
            <h2 className='title'>
              <span className='new-line'>일상의 모든 물건을</span>
              <span className='new-line'>거래해 보세요</span>
            </h2>
            {/* <button
              className='btn btn-large btn-shop'
              onClick={() => handleMovePage('items')}
            >
              구경하러 가기
            </button> */}
            <StyledButton
              type='button'
              size='large'
              onClick={() => handleMovePage('/items')}
            >
              구경하러 가기
            </StyledButton>
          </div>
        </div>

        <div className='home'>
          <div className='container home-content'>
            <img src={HomeImage01} alt='홈 이미지' className='home-img' />
            <div className='home-text-div'>
              <div className='home-text'>
                <p className='home-banner'>Hot item</p>
                <h2 className='title home-title'>
                  <span className='new-line'>인기 상품을</span>
                  <span className='new-line'>확인해 보세요</span>
                </h2>
                <p className='home-description'>
                  가장 HOT한 중고거래 물품을
                  <br />
                  판다 마켓에서 확인해 보세요
                </p>
              </div>
            </div>
          </div>
          <div className='container home-content'>
            <img src={HomeImage02} alt='홈 이미지' className='home-img' />
            <div className='home-text-div'>
              <div className='home-text'>
                <p className='home-banner'>Search</p>
                <h2 className='title home-title'>
                  <span className='new-line'>구매를 원하는</span>
                  <span className='new-line'>상품을 검색하세요</span>
                </h2>
                <p className='home-description'>
                  구매하고 싶은 물품은 검색해서
                  <br />
                  쉽게 찾아보세요
                </p>
              </div>
            </div>
          </div>
          <div className='container home-content'>
            <img src={HomeImage03} alt='홈 이미지' className='home-img' />
            <div className='home-text-div'>
              <div className='home-text'>
                <p className='home-banner'>Register</p>
                <h2 className='title home-title'>
                  <span className='new-line'>판매를 원하는</span>
                  <span className='new-line'>상품을 등록하세요</span>
                </h2>
                <p className='home-description'>
                  어떤 물건이든 판매하고 싶은 상품을
                  <br />
                  쉽게 등록하세요
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='sky main-bottom'>
          <div className='container main-bottom-panda'>
            <h2 className='title home-title'>
              믿을 수 있는
              <br />
              판다마켓 중고거래
            </h2>
          </div>
        </div>
      </main>
      <footer>
        <div className='footer-content'>
          <div className='footer-companies'>
            <p className='footer-company footer-text'>@Codeit - 2024</p>
          </div>
          <div className='footer-links'>
            <a href='/html/privacy.html' className='footer-text footer-link'>
              Privacy Policy
            </a>
            <a href='/html/faq.html' className='footer-text footer-link'>
              FAQ
            </a>
          </div>
          <div className='footer-imgs'>
            <a href='https://www.facebook.com' target='_blank'>
              <img src={iconFacebook} alt='' />
            </a>
            <a href='https://www.twitter.com' target='_blank'>
              <img src={iconTwitter} alt='' />
            </a>
            <a href='https://www.youtube.com' target='_blank'>
              <img src={iconYoutube} alt='' />
            </a>
            <a href='https://www.instagram.com' target='_blank'>
              <img src={iconInstagram} alt='' />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default HomePage;
