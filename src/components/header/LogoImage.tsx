import logoImage from '@assets/logo-image.svg';
import logoText from '@assets/logo-text.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useResponsiveApi } from '@hooks/Responsive';

const SIZES = {
  header: {
    width: '154',
    height: '51',
  },
  sign: {
    width: '396',
    height: '132',
  },
} as const;

type SizeType = keyof typeof SIZES;
interface ImageProps {
  type: SizeType; // type을 SizeType으로 제한합니다.
}

function LogoImage({ type }: ImageProps) {
  const { isMobile } = useResponsiveApi();
  return (
    <Link to='/' style={{ textAlign: 'center' }}>
      <StyledImage src={isMobile ? logoText : logoImage} type={type} />
    </Link>
  );
}

const StyledImage = styled.img<ImageProps>`
  width: ${({ type }) => SIZES[type].width}px;
  height: ${({ type }) => SIZES[type].height}px;
`;

export default LogoImage;
