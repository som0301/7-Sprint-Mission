import { useEffect, useState } from 'react';
import { debounce } from 'lodash';
import { DeviceType } from 'shared/store';

// 디바이스 타입 및 해당 여부 반환 커스텀 훅
export function useViewport() {
  const getDeviceType = (width: number): DeviceType => {
    switch (true) {
      case width < 768:
        return 'mobile';
      case width < 1200:
        return 'tablet';
      default:
        return 'desktop';
    }
  };

  const [deviceType, setDeviceType] = useState<DeviceType>(() =>
    getDeviceType(window.innerWidth),
  );
  // 리사이즈 핸들러 디바운싱
  const handleResize = debounce(() => {
    const newDeviceType = getDeviceType(window.innerWidth);
    if (newDeviceType !== deviceType) {
      setDeviceType(newDeviceType);
    }
  }, 200);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  const isMobile: boolean = deviceType === 'mobile';
  const isTablet: boolean = deviceType === 'tablet';
  const isDesktop: boolean = deviceType === 'desktop';

  return { deviceType, isMobile, isTablet, isDesktop };
}
