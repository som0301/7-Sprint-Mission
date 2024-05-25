import React, { createContext, useContext, useEffect, useState } from "react";
//import { IS_MOBILE } from "../utils/constants"; // !matchMedia('screen and (min-width: 768px)').matches;

const ResponsiveContext = createContext();
export function ResponsiveProvider({ children }) {
  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 1200);
    setIsTablet(769 <= window.innerWidth && window.innerWidth < 1200);
    setIsMobile(window.innerWidth < 768);
  };
  // 뷰포트 너비가 768px 미만일 경우 MO 모드로 간주한다.
  const IS_DESKTOP = matchMedia("screen and (min-width: 1200px)").matches;
  const IS_TABLET = matchMedia("screen and (max-width: 1199px)").matches;
  const IS_MOBILE = matchMedia("screen and (max-width: 767px)").matches;

  const [isDesktop, setIsDesktop] = useState(IS_DESKTOP);
  const [isTablet, setIsTablet] = useState(IS_TABLET);
  const [isMobile, setIsMobile] = useState(IS_MOBILE);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // unmount 시 실행되는 cleanup 함수
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ResponsiveContext.Provider value={{ isDesktop, isTablet, isMobile }}>
      {children}
    </ResponsiveContext.Provider>
  );
}

// 편의를 위한 useContext 함수
export function useResponsiveApi() {
  return useContext(ResponsiveContext);
}
