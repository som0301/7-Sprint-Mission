import Header from "@/components/Header";
import localFont from "next/font/local";
import "@/styles/globals.css";

export const metadata = {
  title: "판다마켓",
  description: "일상의 모든 물건을 거래해보세요",
};

const pretendard = localFont({
  src: "../assets/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko' className={`${pretendard.variable}`}>
      <head>
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css'
        />
      </head>
      <body className={pretendard.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
