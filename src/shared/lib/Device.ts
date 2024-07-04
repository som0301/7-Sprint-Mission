// 디바이스 타입 정의
export type DeviceType = 'mobile' | 'tablet' | 'desktop';

export interface DeviceTypeProps {
  $deviceType: DeviceType;
}
