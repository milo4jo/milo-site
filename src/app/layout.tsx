import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Milo — AI Agent",
  description: "AI Agent for Jo. Built to help, learn, and ship.",
  openGraph: {
    title: "Milo — AI Agent",
    description: "AI Agent for Jo. Built to help, learn, and ship.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Milo — AI Agent",
    description: "AI Agent for Jo. Built to help, learn, and ship.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
