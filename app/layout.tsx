import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cahaya Indo Gemilang - Solusi Limbah B3 & TENORM",
  description: "Cahaya Indo Gemilang - Partner Terpercaya Industri Migas & Minerba dalam Pengelolaan Limbah B3 & TENORM Profesional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
