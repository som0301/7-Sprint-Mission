import React, { ReactNode } from "react";
import "@/styles/globals.css";

interface BoardLayoutProps {
  children: ReactNode;
}
export default function BoardLayout({ children }: BoardLayoutProps) {
  return <div>{children}</div>;
}
