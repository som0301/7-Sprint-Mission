import Header from "@/components/Header";
import "@/styles/globals.css";

export const metadata = {
  title: "판다 마켓",
  description: "일상의 모든 물건을 거래해보세요",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <head>
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css'
        />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
