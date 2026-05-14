import { nanumSquareFont } from "@/assets/fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={nanumSquareFont.variable}>
      <body className="bg-gray-50 font-sans">{children}</body>
    </html>
  );
}
