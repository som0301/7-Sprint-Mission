import { useMediaQuery } from 'react-responsive';
import { RESPONSIVE_SIZE } from '@/constants';

export const useResponsive = () => {
  const { MOBILE_MAX_WIDTH, TABLET_MAX_WIDTH } = RESPONSIVE_SIZE;
  const isDesktop = useMediaQuery({ minWidth: Number(TABLET_MAX_WIDTH) + 1 });
  const isTablet = useMediaQuery({
    minWidth: Number(MOBILE_MAX_WIDTH) + 1,
    maxWidth: Number(TABLET_MAX_WIDTH),
  });
  const isMobile = useMediaQuery({ maxWidth: Number(MOBILE_MAX_WIDTH) });
  return { isDesktop, isTablet, isMobile };
};
