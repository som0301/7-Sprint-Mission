import useNavigator from '@hooks/useNavigator';
import { Helmet } from 'react-helmet';
import { StyledButton } from '@components/common/Button';

import './HomePage.scss';

import HomeImage01 from '@assets/images/Img_home_01.png';
import HomeImage02 from '@assets/images/Img_home_02.png';
import HomeImage03 from '@assets/images/Img_home_03.png';
import Footer from '@components/footer/Footer';
import HomeContent from './HomeContent';

function HomePage() {
  const handleMovePage = useNavigator();

  return (
    <>
      <Helmet>
        <title>판다마켓 - 홈페이지</title>
      </Helmet>

      <main className='main'>
        <div className='sky main-top'>
          <div className='container main-top-panda'>
            <h2 className='title'>
              <span className='new-line'>일상의 모든 물건을 </span>
              <span className='new-line'>거래해 보세요</span>
            </h2>
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
          <HomeContent
            image={HomeImage01}
            banner='Hot item'
            title1='인기 상품을'
            title2='확인해 보세요'
            description1='가장 HOT한 중고거래 물품을'
            description2='판다 마켓에서 확인해 보세요'
          />
          <HomeContent
            image={HomeImage02}
            banner='Search'
            title1='구매를 원하는'
            title2='상품을 검색하세요'
            description1='구매하고 싶은 물품은 검색해서'
            description2='쉽게 찾아보세요'
          />
          <HomeContent
            image={HomeImage03}
            banner='Register'
            title1='판매를 원하는'
            title2='상품을 등록하세요'
            description1='어떤 물건이든 판매하고 싶은 상품을'
            description2='쉽게 등록하세요'
          />
        </div>
        <div className='sky main-bottom'>
          <div className='container main-bottom-panda'>
            <h2 className='title'>
              믿을 수 있는
              <br />
              판다마켓 중고거래
            </h2>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
