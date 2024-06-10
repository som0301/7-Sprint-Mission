import useMediaQuery from "./useMediaQuery";

const useResponsive = () => {
  const isDesktop = useMediaQuery("(min-width: 1200px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1199px)");
  const isMobile = useMediaQuery("(max-width: 767px)");

  return { isDesktop, isTablet, isMobile };
};

export default useResponsive;
