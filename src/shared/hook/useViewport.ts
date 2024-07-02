import { useEffect, useState } from 'react';

export function useViewport() {
  const getDeviceType = (width) => {
    if (width < 768) {
      return 'mobile';
    }
    if (width < 1200) {
      return 'tablet';
    }
    if (width >= 1200) {
      return 'desktop';
    }
  };

  const [deviceType, setDeviceType] = useState(
    getDeviceType(window.innerWidth),
  );

  const isMobile = deviceType === 'mobile';
  const isTablet = deviceType === 'tablet';
  const isDesktop = deviceType === 'desktop';

  useEffect(() => {
    const handleResize = () => {
      setDeviceType(getDeviceType(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { deviceType, isMobile, isTablet, isDesktop };
}
