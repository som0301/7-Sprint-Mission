import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

interface ContextValue {
  isDesktop: boolean;
  isTablet: boolean;
  isMobile: boolean;
}

const IS_DESKTOP = matchMedia('screen and (min-width: 1200px)').matches;
const IS_TABLET = matchMedia('screen and (max-width: 1199px)').matches;
const IS_MOBILE = matchMedia('screen and (max-width: 767px)').matches;

const ResponsiveContext = createContext<ContextValue>({
  isDesktop: IS_DESKTOP,
  isTablet: IS_TABLET,
  isMobile: IS_MOBILE,
});

export function ResponsiveProvider({ children }: { children: ReactNode }) {
  const [isDesktop, setIsDesktop] = useState(IS_DESKTOP);
  const [isTablet, setIsTablet] = useState(IS_TABLET);
  const [isMobile, setIsMobile] = useState(IS_MOBILE);

  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 1200);
    setIsTablet(769 <= window.innerWidth && window.innerWidth < 1200);
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // unmount 시 실행되는 cleanup 함수
    return () => {
      window.removeEventListener('resize', handleResize);
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
