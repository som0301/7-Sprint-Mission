import useWindowSize from "./useWindowSize";

export default function useDevice() {
  const windowSize = useWindowSize();

  const isDesktop = windowSize.width >= 1200;
  const isTablet = windowSize.width >= 768 && windowSize.width < 1200;
  const isMobile = windowSize.width >= 375 && windowSize.width < 768;

  return {
    isDesktop,
    isTablet,
    isMobile,
  };
}
