import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Publicly",
  description: "Do what makes sense.",
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
        <header className="p-4 flex justify-between items-center border-b">
          <Link href="/">Logo@publicly</Link>
          <nav ><ul className="flex justify-between gap-6"><li>Search</li>
          <Link href={"/about"}>About</Link>
          <li> <Link href={"/"}>Get the App</Link> </li></ul></nav>
        </header>
        {children}
        <footer className="px-6">Here is the global footer</footer>
      </body>
    </html>
  );
}
