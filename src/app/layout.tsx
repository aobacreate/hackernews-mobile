import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavProvider } from "@/context/NavContext";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Hacker News Mobile",
    template: "%s | Hacker News Mobile",
  },
  description: "Mobile-first Hacker News reader built with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <NavProvider>
          {children}
        </NavProvider>
      </body>
    </html>
  );
}
