import { DeviceType } from 'shared/lib';

// 디바이스 타입 반환 함수
export const getDeviceType = (width: number): DeviceType => {
  switch (true) {
    case width < 768:
      return 'mobile';
    case width < 1200:
      return 'tablet';
    default:
      return 'desktop';
  }
};
