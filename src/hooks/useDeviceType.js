import { useState, useEffect } from "react";

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState({
    isMobile: window.innerWidth <= 767,
    isTablet: window.innerWidth >= 768 && window.innerWidth <= 1199,
    isDesktop: window.innerWidth >= 1200,
  });

  useEffect(() => {
    const handleResize = () => {
      setDeviceType({
        isMobile: window.innerWidth <= 767,
        isTablet: window.innerWidth >= 768 && window.innerWidth <= 1199,
        isDesktop: window.innerWidth >= 1200,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getDeviceType = ({ isTablet, isMobile, isDesktop }) => {
    if (isTablet) {
      return "tablet";
    } else if (isMobile) {
      return "mobile";
    } else if (isDesktop) {
      return "desktop";
    } else {
      return "unknown";
    }
  };

  return {
    ...deviceType,
    getDeviceType: () => getDeviceType(deviceType),
  };
};

export default useDeviceType;
