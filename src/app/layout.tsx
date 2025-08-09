import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const coanda = localFont({
  src: [
    {
      path: "../../public/fonts/Coanda-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Coanda-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-coanda",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Musea - Art Museum",
  description: "Discover extraordinary art collections and exhibitions at Musea Art Museum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${coanda.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
