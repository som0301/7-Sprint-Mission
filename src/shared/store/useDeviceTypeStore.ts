import { create } from 'zustand';

import { DeviceType, getDeviceType } from 'shared/lib';

// 스토어 인터페이스 정의
interface DeviceTypeState {
  deviceType: DeviceType;
  setDeviceType: (width: number) => void;
}

const useDeviceTypeStore = create<DeviceTypeState>((set) => ({
  // 상태 초기화
  deviceType: getDeviceType(window.innerWidth),

  // 액션 정의
  setDeviceType: (width: number) => {
    set({ deviceType: getDeviceType(width) });
  },
}));

export const useDeviceType = () => useDeviceTypeStore((state) => state.deviceType);
export const useSetDeviceType = () => useDeviceTypeStore((state) => state.setDeviceType);
