import "./global.css";
import "katex/dist/katex.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  subsets: ["latin"],
});

export async function generateMetadata() {
  return {
    title: "Mindect",
    description: "Learn Concepts in Machine Learning, Supervised Learning, Unsupervised Learning, Neural Network training. At Anytime, From Anywhere with Mindect",
    keywords: "Learn Machine Learning, What is Supervised Learning, What is Unsupervised Learning, Advanced Learning Algorithms, Neural Network with Mindect",
    openGraph: {
      title: "Mindect",
      description: "Learn Concepts in Machine Learning, Supervised Learning, Unsupervised Learning, Neural Network training. At Anytime, From Anywhere with Mindect",
      url: "https://mindect.vercel.app/",
      type: "website",
      siteName: "Mindect",
      images: [
        {
          url: "/Banner.png",
          width: 800,
          height: 600,
          alt: "Mindect Banner",
        },
      ],
    },
    twitter: {
      title: "Mindect",
      description: "Learn Concepts in Machine Learning, Supervised Learning, Unsupervised Learning, Neural Network training etc. At Anytime, From Anywhere with Mindect",
      image: "https://mindect.vercel.app/Banner.png",
    },
    robots: "index, follow",
    author: "Om Chandankar",
    copyright: "Mindect © 2024",
    applicationName: "Mindect",
    locale: "en_US",
    canonical: "https://mindect.vercel.app",
    icons: {
      icon: [
        { url: "/logo16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/logo32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/logo64x64.png", sizes: "64x64", type: "image/png" },
        { url: "/logo128x128.png", sizes: "128x128", type: "image/png" },
      ],
      apple: "/Logo128x128.png",
      shortcut: "/Logo.png",
    },
    verification: {
      google: ["JoujTmv5oh0bgEPDWe-FC_D1gsDCmoxox9a25fkwo-M", "6RMOg1ngEZ3TFp12K8vXU8UMjylHTt3B51UnOxzu-os"],
      msapplication: "https://mindect.vercel.app/Logo.png",
    },
  };
}

export async function generateViewport() {
  return {
    viewport: "width=device-width, initial-scale=1.0",
  };
}

export async function generateThemeColor() {
  return {
    themeColor: [
      { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
      { media: "(prefers-color-scheme: light)", color: "#fff" },
    ],
  };
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider attribute="class">
          <RootProvider>
            {children}
          </RootProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}