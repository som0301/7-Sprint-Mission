import { Link } from 'react-router-dom';
import Logo from '../../layout/Logo';
import '../../assets/css/sign.css';

function LoginPage() {
	return (
		<main id='signupPage'>
			<article className='login'>
				<section className='login__head'>
					<Logo />
				</section>
				<section className='login__body'>
					<form method='get' action='/pages/items/'>
						<article className='input-box'>
							<label htmlFor='login_email'>이메일</label>
							<input type='text' name='email' id='login_email' placeholder='이메일을 입력해주세요' autoComplete='true' />
						</article>
						<article className='input-box'>
							<label htmlFor='login_password'>비밀번호</label>
							<div>
								<input type='password' name='password' id='login_password' placeholder='비밀번호를 입력해주세요' />
								<button type='button' className='btn_visibility'>
									<img src='/assets/images/icon/ic-visibility-off.svg' alt='비가시성 아이콘' draggable='false' />
								</button>
							</div>
						</article>
						<button type='submit' name='login' className='btn btn_large' disabled={true}>
							<span>로그인</span>
						</button>
					</form>
				</section>
				<section className='login__foot'>
					<article className='login-external'>
						<h6>간편 로그인하기</h6>
						<div className='external-sites'>
							<a href='https://www.google.com/' target='_blank' rel='noreferrer noopener'>
								<img src='/assets/images/sns/ic-google-circle.png' alt='google 원형 아이콘' draggable='false' />
							</a>
							<a href='https://www.kakaocorp.com/page/' target='_blank' rel='noreferrer noopener'>
								<img src='/assets/images/sns/ic-kakao-circle.png' alt='kakao 원형 아이콘' draggable='false' />
							</a>
						</div>
					</article>
					<div className='login__signup'>
						<p>
							판다마켓이 처음이신가요? <Link to={'/signup'}>회원가입</Link>
						</p>
					</div>
				</section>
			</article>
		</main>
	);
}

export default LoginPage;
