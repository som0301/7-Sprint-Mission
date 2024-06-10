import logoImage from '/src/assets/logo-image.svg';
import logoText from '/src/assets/logo-text.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useResponsiveApi } from '/src/Responsive';

const SIZES = {
  header: {
    width: '154',
    height: '51',
  },
  sign: {
    width: '396',
    height: '132',
    // desktop: {},
    // tablet: {},
    // mobile: {},
  },
};

function LogoImage({ type }) {
  const { isMobile } = useResponsiveApi();
  return (
    <Link to='/' style={{ textAlign: 'center' }}>
      <StyledImage src={isMobile ? logoText : logoImage} type={type} />
    </Link>
  );
}

const StyledImage = styled.img`
  width: ${({ type }) => SIZES[type].width}px;
  height: ${({ type }) => SIZES[type].height}px;
`;

export default LogoImage;
