import { DeviceType } from 'shared/store';
import { useDeviceStore } from 'shared/store/useDeviceStore';

// 상품 목록 타입 정의
type ItemType = 'all' | 'best';

const DEFAULT_PAGE_SIZE: number = 10;

// 페이지 사이즈 반환 커스텀 훅
export function usePageSize(type: ItemType) {
  const { deviceType } = useDeviceStore();

  const pageSizeMap: { [key in ItemType]: { [key in DeviceType]: number } } = {
    all: {
      mobile: 4,
      tablet: 6,
      desktop: 10,
    },
    best: {
      mobile: 1,
      tablet: 2,
      desktop: 4,
    },
  };

  const pageSize = pageSizeMap[type][deviceType] ?? DEFAULT_PAGE_SIZE;

  return pageSize;
}
