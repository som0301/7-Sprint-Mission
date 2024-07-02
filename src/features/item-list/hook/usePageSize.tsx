import { useViewport } from 'shared/hook/useViewport';

// 페이지 사이즈 반환 커스텀 훅
export function usePageSize(type) {
  const { deviceType } = useViewport();

  const getPageSize = (type) => {
    if (type === 'all') {
      if (deviceType === 'mobile') return 4;
      if (deviceType === 'tablet') return 6;
      if (deviceType === 'desktop') return 10;
    }
    if (type === 'best') {
      if (deviceType === 'mobile') return 1;
      if (deviceType === 'tablet') return 2;
      if (deviceType === 'desktop') return 4;
    }
  };

  const pageSize = getPageSize(type);
  return pageSize;
}
