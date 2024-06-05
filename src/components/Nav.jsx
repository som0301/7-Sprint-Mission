import { Link } from 'react-router-dom';
import CommonButton from './CommonButton';
import useMediaQuery from '../hooks/useMediaQuery';
import logoImgMobile from '../image-resource/panda-logo-mobile.svg';
import logoImg from '../image-resource/panda-logo.svg';

export default function Nav() {
  const [deviceType] = useMediaQuery();
  const isMobile = deviceType === 'Mobile';
  const responsiveLogoImg = isMobile ? logoImgMobile : logoImg;
  return (
    <nav
      className="flex justify-between items-center gap-x-4 sticky top-0
    h-[70px] px-4 border-b border-solid border-gray-200 bg-white z-10"
    >
      <Link to="/">
        <img src={responsiveLogoImg} alt="판다마켓 로고" />
      </Link>
      <ul className="flex items-center gap-x-2 flex-grow font-bold text-base font-primary">
        <Link to="/community">
          <li className="text-gray-600">자유게시판</li>
        </Link>
        <Link to="/items">
          <li className="text-blue">중고마켓</li>
        </Link>
      </ul>
      <Link to="/login">
        <CommonButton>로그인</CommonButton>
      </Link>
    </nav>
  );
}
