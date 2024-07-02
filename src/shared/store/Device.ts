// 디바이스 타입 정의
export type DeviceType = 'mobile' | 'tablet' | 'desktop';

// 반응형 레이아웃 및 조건부 렌더링을 위한 타입 정의
export interface DeviceTypeState {
  deviceType: DeviceType;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  setDeviceType: (width: number) => void;
}
