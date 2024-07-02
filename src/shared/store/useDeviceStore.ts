import { useEffect } from 'react';
import { debounce } from 'lodash';
import { create } from 'zustand';
import { DeviceType, DeviceTypeState } from 'shared/store';

// 디바이스 타입 및 해당 여부 반환 함수
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

// 초기 상태 설정
const initialDeviceType = getDeviceType(window.innerWidth);

export const useDeviceStore = create<DeviceTypeState>((set) => ({
  // 보관할 상태 초기값
  deviceType: initialDeviceType,
  isMobile: initialDeviceType === 'mobile',
  isTablet: initialDeviceType === 'tablet',
  isDesktop: initialDeviceType === 'desktop',

  // 상태 업데이트
  setDeviceType: (width: number) => {
    const newDeviceType = getDeviceType(width);
    set({
      deviceType: newDeviceType,
      isMobile: newDeviceType === 'mobile',
      isTablet: newDeviceType === 'tablet',
      isDesktop: newDeviceType === 'desktop',
    });
  },
}));

// 상태값 업데이트를 위한 리사이즈 핸들러
export const useDeviceType = () => {
  const { setDeviceType } = useDeviceStore();

  // 디바운싱 적용
  useEffect(() => {
    const handleResize = debounce(() => {
      setDeviceType(window.innerWidth);
    }, 200);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setDeviceType]);
};
