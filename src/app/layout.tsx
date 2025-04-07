import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/__molecules/header/header";
import Signedout from "./components/__atoms/signedout/signedout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Spotify - Web Player: Music for everyone",
  description: "Spotify",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Signedout />
      </body>
    </html>
  );
}
