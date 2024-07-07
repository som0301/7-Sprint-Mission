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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
