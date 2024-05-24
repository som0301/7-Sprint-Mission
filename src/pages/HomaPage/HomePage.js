import { Link } from 'react-router-dom';
import './HomePage.css';
import imageHomeTop from '../../assets/images/home/img-home-top.png';
import imageIntroduce1 from '../../assets/images/home/img-home-01.png';
import imageIntroduce2 from '../../assets/images/home/img-home-02.png';
import imageIntroduce3 from '../../assets/images/home/img-home-03.png';
import imageHomeBottom from '../../assets/images/home/img-home-bottom.png';

function HomePage() {
	return (
		<>
			<section className='visual visual--top'>
				<div className='inner'>
					<p>
						일상의 모든 물건을&nbsp;
						<br />
						거래해 보세요
					</p>
					<Link to={'/items/'} className='btn btn_large'>
						구경하러 가기
					</Link>
					<img src={imageHomeTop} alt='판다마켓 메인비주얼' draggable='false' />
				</div>
			</section>
			<section className='introduce'>
				<div className='inner'>
					<article>
						<img src={imageIntroduce1} alt='Hot item 이미지' draggable='false' />
						<div>
							<b>Hot item</b>
							<h5>
								인기 상품을&nbsp;
								<br />
								확인해 보세요
							</h5>
							<p>
								가장 HOT한 중고거래 물품을
								<br />
								판다 마켓에서 확인해 보세요
							</p>
						</div>
					</article>
					<article>
						<img src={imageIntroduce2} alt='Search 이미지' draggable='false' />
						<div>
							<b>Search</b>
							<h5>
								구매를 원하는&nbsp;
								<br />
								상품을 검색하세요
							</h5>
							<p>
								구매하고 싶은 물품은 검색해서&nbsp;
								<br />
								쉽게 찾아보세요
							</p>
						</div>
					</article>
					<article>
						<img src={imageIntroduce3} alt='Register 이미지' draggable='false' />
						<div>
							<b>Register</b>
							<h5>
								판매를 원하는&nbsp;
								<br />
								상품을 등록하세요
							</h5>
							<p>
								어떤 물건이든 판매하고 싶은 상품을&nbsp;
								<br />
								쉽게 등록하세요
							</p>
						</div>
					</article>
				</div>
			</section>
			<section className='visual visual--bottom'>
				<div className='inner'>
					<p>
						믿을 수 있는&nbsp;
						<br />
						판다마켓 중고거래
					</p>
					<img src={imageHomeBottom} alt='판다마켓 서브비주얼' draggable='false' />
				</div>
			</section>
		</>
	);
}

export default HomePage;
