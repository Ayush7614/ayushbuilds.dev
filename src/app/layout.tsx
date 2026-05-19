import type { Metadata } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ayushbuilds-dev.vercel.app"),
  title: "Ayush Kumar | DevRel · AI Agents · Open Source",
  description:
    "Portfolio of Ayush Kumar — Lead DevRel Engineer, AI agent security builder (RuntimeWall), open-source advocate, GitHub Campus Expert, and GSoC contributor.",
  keywords: [
    "Ayush Kumar",
    "DevRel",
    "AI agents",
    "RuntimeWall",
    "open source",
    "LLM security",
    "developer relations",
  ],
  authors: [{ name: "Ayush Kumar", url: "https://ayushbuilds-dev.vercel.app" }],
  openGraph: {
    title: "Ayush Kumar | ayushbuilds.dev",
    description:
      "DevRel · AI Security · RuntimeWall · Open Source — portfolio & blog.",
    url: "https://ayushbuilds-dev.vercel.app",
    siteName: "ayushbuilds.dev",
    images: [{ url: "/profile.png", width: 480, height: 480, alt: "Ayush Kumar" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Kumar | ayushbuilds.dev",
    description: "DevRel · AI Agents · Open Source · Security",
    creator: "@AYUSHKUMAR82274",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${jetbrains.variable} scroll-smooth`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
