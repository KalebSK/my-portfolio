import type { Metadata } from "next";
import { Teko } from "next/font/google";
import Navbar from "./navbar";
import "./globals.css";

const teko = Teko({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KalebSK Portfolio",
  description: "Learn all about me and my projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={teko.className}>
        <header className="bg-white">

        <Navbar/>
        </header>
        {children}</body>
    </html>
  );
}
