import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nathan Pogue Portfolio",
  description: "Portfolio of Nathan Pogue, a passionate Solutions Architect specializing in cloud solutions, AI/ML, and healthcare.",
  keywords: ["Nathan Pogue", "Solutions Architect", "AI", "Generative AI", "Healthcare"],
  authors: [{ name: "Nathan Pogue" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
