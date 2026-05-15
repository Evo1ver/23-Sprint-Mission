import { nanumSquareFont, santokki } from "@/assets/fonts";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${nanumSquareFont.variable} ${santokki.variable}`}
    >
      <body className="font-nanum bg-gray-50">{children}</body>
    </html>
  );
}
