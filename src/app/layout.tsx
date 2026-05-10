import { nanumSquareFont } from "@/assets/fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={nanumSquareFont.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
