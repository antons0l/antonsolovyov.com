import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anton Solovyov | Full-Stack Software Engineer",
  description:
    "Anton Solovyov is a full-stack software engineer specializing in building exceptional digital experiences with modern web technologies, React, TypeScript, and Web3.",
  keywords: [
    "Anton Solovyov",
    "Full-Stack Engineer",
    "Software Developer",
    "React",
    "TypeScript",
    "Node.js",
    "Web3",
    "Blockchain",
  ],
  authors: [{ name: "Anton Solovyov" }],
  creator: "Anton Solovyov",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://antonsolovyov.com",
    title: "Anton Solovyov | Full-Stack Software Engineer",
    description:
      "Full-stack software engineer crafting exceptional digital experiences with modern technologies",
    siteName: "Anton Solovyov",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anton Solovyov | Full-Stack Software Engineer",
    description:
      "Full-stack software engineer crafting exceptional digital experiences",
    creator: "@antonsolovyov",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-WQ7HSHMCQT`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WQ7HSHMCQT');`}
        </Script>
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
