import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Dealper",
    template: "%s| Dealper",
  },
  description: "Dealper - Your one-stop shop for the best deals and discounts on a wide range of products. Find the latest offers and save big on your favorite items.",


  openGraph: {
    type: "website",
    siteName: "Dealper",
    title: "Dealper",
    description: "Dealper - Your one-stop shop for the best deals and discounts on a wide range of products. Find the latest offers and save big on your favorite items.",
    url: "https://dealport-web-4z5b.vercel.app/",
    images: [
      {
        url: "./img/Dealport_ Texnologiya Bitta Joyda.png",
        width: 1200,
        height: 630,
        alt: "Dealper - Your one-stop shop for the best deals and discounts on a wide range of products. Find the latest offers and save big on your favorite items.",
      },
    ],
    locale: "uz_UZ",
  },
  };

  const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
  });

  const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
  });

  export default function RootLayout({
    children,
  }: {
    children: ReactNode;
  }) {
    return (
      <html
        lang="uz"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col">{children}</body>
      </html>
    );
}