import '../styles/Home.scss';
import { Link } from 'react-router-dom';
import facebookIcon from '../assets/icons/ic_facebook.svg';
import youtubeIcon from '../assets/icons/ic_youtube.svg';
import instagramIcon from '../assets/icons/ic_instagram.svg';
import twitterIcon from '../assets/icons/ic_twitter.svg';
import hotItemImg from '../assets/images/img_hot_item.png';
import searchImg from '../assets/images/img_search.png';
import registerImg from '../assets/images/img_register.png';
import onePandaImg from '../assets/images/img_one_panda.png';
import twoPandaImg from '../assets/images/img_two_panda.png';

function Home() {
  return (
    <div className='home-page'>
      <header>
        <section className='header-main'>
          <div className='header-main-phrase'>
            <h1>일상의 모든 물건을 거래해 보세요</h1>
            <Link to='/items'>
              <div className='link-to-product-list element-click'>
                구경하러 가기
              </div>
            </Link>
          </div>
          <img src={onePandaImg} alt='인사하는 판다 그림' />
        </section>
      </header>
      <main>
        <section className='card text-align-left'>
          <img src={hotItemImg} alt='인기 상품 그림' />
          <div className='card-info'>
            <div className='card-title'>Hot item</div>
            <h1>인기 상품을 확인해 보세요</h1>
            <p className='card-description'>
              가장 HOT한 중고거래 물품을
              <br />
              판다 마켓에서 확인해 보세요
            </p>
          </div>
        </section>
        <section className='card text-align-right'>
          <div className='card-info'>
            <div className='card-title'>Search</div>
            <h1>구매를 원하는 상품을 검색하세요</h1>
            <p className='card-description'>
              구매하고 싶은 물품은 검색해서
              <br />
              쉽게 찾아보세요
            </p>
          </div>
          <img src={searchImg} alt='검색 그림' />
        </section>
        <section className='card text-align-left'>
          <img src={registerImg} alt='등록 그림' />
          <div className='card-info'>
            <div className='card-title'>Register</div>
            <h1>판매를 원하는 상품을 등록하세요</h1>
            <p className='card-description'>
              어떤 물건이든 판매하고 싶은 상품을
              <br />
              쉽게 등록하세요
            </p>
          </div>
        </section>
      </main>
      <footer>
        <section className='banner-bottom'>
          <h1>
            믿을 수 있는
            <br />
            판다마켓 중고거래
          </h1>
          <img src={twoPandaImg} alt='두 판다가 대화하는 그림' />
        </section>
        <section className='footer-bottom-line'>
          <div className='copyright'>@codeit - 2024</div>
          <div className='information'>
            <Link to='/privacy'>Privacy Policy</Link>
            <Link to='/faq'>FAQ</Link>
          </div>
          <div className='sns-link'>
            <a href='https://www.facebook.com' target='_blank' rel='noreferrer'>
              <img src={facebookIcon} alt='페이스북 아이콘' />
            </a>
            <a href='https://twitter.com' target='_blank' rel='noreferrer'>
              <img src={twitterIcon} alt='트위터 아이콘' />
            </a>
            <a href='https://www.youtube.com' target='_blank' rel='noreferrer'>
              <img src={youtubeIcon} alt='유튜브 아이콘' />
            </a>
            <a
              href='https://www.instagram.com'
              target='_blank'
              rel='noreferrer'
            >
              <img src={instagramIcon} alt='인스타 아이콘' />
            </a>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default Home;
