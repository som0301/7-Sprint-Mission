import React from "react";
import { useMediaQuery } from "react-responsive";

export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({
    query: "(max-width:768px)",
  });

  return <>{isMobile && children}</>;
};

export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({
    query: "(max-width:1199px)",
  });
  return <>{isTablet && children}</>;
};

export const PC = ({ children }) => {
  const isPc = useMediaQuery({
    query: "(min-width:1200px)",
  });

  return <>{isPc && children}</>;
};
