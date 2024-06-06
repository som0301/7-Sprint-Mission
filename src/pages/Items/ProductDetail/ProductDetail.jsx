import { useParams, Link } from 'react-router-dom';
import './ProductDetail.css';
import moreIcon from '../../../assets/ic_kebab.svg';
import heartIcon from '../../../assets/ic_heart_detail.svg';
import backIcon from '../../../assets/ic_back.svg';

const ProductDetail = () => {
  return (
    <div className="product-container">
      <section className="product-info-section">
        <img src="#" alt="상품이미지" className="product-img" />
        <div className="product-info-wrap">
          <div className="product-name-wrap">
            <h2 className="product-name">아이패드 미니 팔아?요</h2>
            <button type="button" className="product-more-btn">
              <img src={moreIcon} alt="더보기버튼" />
            </button>
          </div>
          <div className="product-price">500,000원</div>
          <h3 className="product-description-title">상품 소개</h3>
          <p className="product-description">
            dkd안ㅁ애나애망재ㅏ잴마래ㅔㅏ엠아래메라ㅐ다ㅔㅐㅏ래ㅏ레매ㅏ애ㅔ라매ㅔ람애ㅔㅏ래ㅔ허ㅐㅔㄱ허ㅐㅔ류래ㅡ에ㅐ류ㅡㅇ레우류ㅓㅐㅜ대ㅕㅜㅠㅐ댜서햐ㅓㅎ제ㅐ러
            dkd안ㅁ애나애망재ㅏ잴마래ㅔㅏ엠아래메라ㅐ다ㅔㅐㅏ래ㅏ레매ㅏ애ㅔ라매ㅔ람애ㅔㅏ래ㅔ허ㅐㅔㄱ허ㅐㅔ류래ㅡ에ㅐ류ㅡㅇ레우류ㅓㅐㅜ대ㅕㅜㅠㅐ댜서햐ㅓㅎ제ㅐ러
            dkd안ㅁ애나애망재ㅏ잴마래ㅔㅏ엠아래메라ㅐ다ㅔㅐㅏ래ㅏ레매ㅏ애ㅔ라매ㅔ람애ㅔㅏ래ㅔ허ㅐㅔㄱ허ㅐㅔ류래ㅡ에ㅐ류ㅡㅇ레우류ㅓㅐㅜ대ㅕㅜㅠㅐ댜서햐ㅓㅎ제ㅐ러
            dkd안ㅁ애나애망재ㅏ잴마래ㅔㅏ엠아래메라ㅐ다ㅔㅐㅏ래ㅏ레매ㅏ애ㅔ라매ㅔ람애ㅔㅏ래ㅔ허ㅐㅔㄱ허ㅐㅔ류래ㅡ에ㅐ류ㅡㅇ레우류ㅓㅐㅜ대ㅕㅜㅠㅐ댜서햐ㅓㅎ제ㅐ러
            dkd안ㅁ애나애망재ㅏ잴마래ㅔㅏ엠아래메라ㅐ다ㅔㅐㅏ래ㅏ레매ㅏ애ㅔ라매ㅔ람애ㅔㅏ래ㅔ허ㅐㅔㄱ허ㅐㅔ류래ㅡ에ㅐ류ㅡㅇ레우류ㅓㅐㅜ대ㅕㅜㅠㅐ댜서햐ㅓㅎ제ㅐ러
            dkd안ㅁ애나애망재ㅏ잴마래ㅔㅏ엠아래메라ㅐ다ㅔㅐㅏ래ㅏ레매ㅏ애ㅔ라매ㅔ람애ㅔㅏ래ㅔ허ㅐㅔㄱ허ㅐㅔ류래ㅡ에ㅐ류ㅡㅇ레우류ㅓㅐㅜ대ㅕㅜㅠㅐ댜서햐ㅓㅎ제ㅐ러
            dkd안ㅁ애나애망재ㅏ잴마래ㅔㅏ엠아래메라ㅐ다ㅔㅐㅏ래ㅏ레매ㅏ애ㅔ라매ㅔ람애ㅔㅏ래ㅔ허ㅐㅔㄱ허ㅐㅔ류래ㅡ에ㅐ류ㅡㅇ레우류ㅓㅐㅜ대ㅕㅜㅠㅐ댜서햐ㅓㅎ제ㅐ러
            dkd안ㅁ애나애망재ㅏ잴마래ㅔㅏ엠아래메라ㅐ다ㅔㅐㅏ래ㅏ레매ㅏ애ㅔ라매ㅔ람애ㅔㅏ래ㅔ허ㅐㅔㄱ허ㅐㅔ류래ㅡ에ㅐ류ㅡㅇ레우류ㅓㅐㅜ대ㅕㅜㅠㅐ댜서햐ㅓㅎ제ㅐ러
            dkd안ㅁ애나애망재ㅏ잴마래ㅔㅏ엠아래메라ㅐ다ㅔㅐㅏ래ㅏ레매ㅏ애ㅔ라매ㅔ람애ㅔㅏ래ㅔ허ㅐㅔㄱ허ㅐㅔ류래ㅡ에ㅐ류ㅡㅇ레우류ㅓㅐㅜ대ㅕㅜㅠㅐ댜서햐ㅓㅎ제ㅐ러
            dkd안ㅁ애나애망재ㅏ잴마래ㅔㅏ엠아래메라ㅐ다ㅔㅐㅏ래ㅏ레매ㅏ애ㅔ라매ㅔ람애ㅔㅏ래ㅔ허ㅐㅔㄱ허ㅐㅔ류래ㅡ에ㅐ류ㅡㅇ레우류ㅓㅐㅜ대ㅕㅜㅠㅐ댜서햐ㅓㅎ제ㅐ러
            dkd안ㅁ애나애망재ㅏ잴마래ㅔㅏ엠아래메라ㅐ다ㅔㅐㅏ래ㅏ레매ㅏ애ㅔ라매ㅔ람애ㅔㅏ래ㅔ허ㅐㅔㄱ허ㅐㅔ류래ㅡ에ㅐ류ㅡㅇ레우류ㅓㅐㅜ대ㅕㅜㅠㅐ댜서햐ㅓㅎ제ㅐ러
            dkd안ㅁ애나애망재ㅏ잴마래ㅔㅏ엠아래메라ㅐ다ㅔㅐㅏ래ㅏ레매ㅏ애ㅔ라매ㅔ람애ㅔㅏ래ㅔ허ㅐㅔㄱ허ㅐㅔ류래ㅡ에ㅐ류ㅡㅇ레우류ㅓㅐㅜ대ㅕㅜㅠㅐ댜서햐ㅓㅎ제ㅐ러
          </p>
          <h3 className="product-tag-title">상품 태그</h3>
          <div className="product-tag">#아이패드 미니</div>
          <button className="product-favorite">
            <img src={heartIcon} alt="좋아요아이콘" />
            <span>123</span>
          </button>
        </div>
      </section>
      <section className="product-inquiry-section">
        <label htmlFor="inquiry">문의하기</label>
        <textarea
          name="inquiry"
          id="inquiry"
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
        <button type="button">등록</button>
      </section>
      <section className="product-comment-section">
        <div className="product-comment-wrap">
          <p className="product-comment">오 가방 너무 이쁜데요?</p>
          <div className="product-profile-wrap">
            <img src="#" alt="프로필이미지" className="product-profile-img" />
            <div>
              <div className="product-profile-name">상큼한판다</div>
              <span className="product-profile-time">1시간전</span>
            </div>
          </div>
        </div>
      </section>
      <Link to="/items" className="product-back-link">
        <button type="button" className="product-back-btn">
          <span>목록으로 돌아가기</span>
          <img src={backIcon} alt="뒤로가기아이콘" />
        </button>
      </Link>
    </div>
  );
};

export default ProductDetail;
