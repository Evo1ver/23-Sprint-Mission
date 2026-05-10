import localFont from "next/font/local";

export const nanumSquareFont = localFont({
  src: [
    {
      path: "./NanumSquareR.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./NanumSquareB.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-nanum",
  preload: true,
});
