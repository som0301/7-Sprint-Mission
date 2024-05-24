import { Link } from 'react-router-dom';
import Logo from '../../layout/Logo';
import '../../assets/css/sign.css';

function SignupPage() {
	return (
		<main id='signupPage'>
			<article className='login'>
				<section className='login__head'>
					<Logo />
				</section>
				<section className='login__body'>
					<form method='get' action='/pages/login/'>
						<article className='input-box'>
							<label htmlFor='login_email'>이메일</label>
							<input type='text' name='email' id='login_email' placeholder='이메일을 입력해주세요' autoComplete='true' />
						</article>
						<article className='input-box'>
							<label htmlFor='login_nickname'>닉네임</label>
							<input type='text' name='nickname' id='login_nickname' placeholder='닉네임을 입력해주세요' />
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
						<article className='input-box'>
							<label htmlFor='login_password_check'>비밀번호 확인</label>
							<div>
								<input type='password' name='password_check' id='login_password_check' placeholder='비밀번호를 다시 한 번 입력해주세요' />
								<button type='button' className='btn_visibility'>
									<img src='/assets/images/icon/ic-visibility-off.svg' alt='비가시성 아이콘' draggable='false' />
								</button>
							</div>
						</article>
						<button type='submit' name='sign' className='btn btn_large' disabled={true}>
							<span>회원가입</span>
						</button>
					</form>
				</section>
				<section className='login__foot'>
					<article className='login-external'>
						<h6>간편 로그인하기</h6>
						<div className='external-sites'>
							<a href='https://www.google.com/' target='_blank' rel='noreferrer noopener'>
								<img src='/assets/images/sns/ic-google-circle.png' alt='google 로그인 아이콘' draggable='false' />
							</a>
							<a href='https://www.kakaocorp.com/page/' target='_blank' rel='noreferrer noopener'>
								<img src='/assets/images/sns/ic-kakao-circle.png' alt='kakao 로그인 아이콘' draggable='false' />
							</a>
						</div>
					</article>
					<div className='login__signup'>
						<p>
							이미 회원이신가요? <Link to={'/login'}>로그인</Link>
						</p>
					</div>
				</section>
			</article>
		</main>
	);
}

export default SignupPage;
