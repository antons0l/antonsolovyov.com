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
  title: "Anton Solovyov | Senior Full-Stack Software Engineer",
  description:
    "Anton Solovyov is a senior full-stack software engineer with expertise in React, TypeScript, Node.js, Go, and Web3. Building scalable solutions for Web2 and Web3 applications with millions of users.",
  keywords: [
    "Anton Solovyov",
    "Senior Software Engineer",
    "Full-Stack Developer",
    "React Developer",
    "TypeScript",
    "Node.js",
    "Go Developer",
    "Web3 Engineer",
    "Blockchain Developer",
    "Next.js",
    "AWS",
    "PostgreSQL",
    "GraphQL",
    "Solidity",
    "Smart Contracts",
    "Fintech Engineer",
  ],
  authors: [{ name: "Anton Solovyov", url: "https://antonsolovyov.com" }],
  creator: "Anton Solovyov",
  publisher: "Anton Solovyov",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://antonsolovyov.com",
    title: "Anton Solovyov | Senior Full-Stack Software Engineer",
    description:
      "Senior full-stack software engineer specializing in React, TypeScript, Node.js, Go, and Web3. Building scalable solutions for millions of users.",
    siteName: "Anton Solovyov",
    images: [
      {
        url: "/avatar.png",
        width: 1200,
        height: 630,
        alt: "Anton Solovyov - Senior Full-Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anton Solovyov | Senior Full-Stack Software Engineer",
    description:
      "Senior full-stack software engineer specializing in React, TypeScript, Node.js, Go, and Web3.",
    creator: "@anton_solov",
    images: ["/avatar.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://antonsolovyov.com",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Anton Solovyov",
    jobTitle: "Senior Full-Stack Software Engineer",
    description:
      "Senior full-stack software engineer specializing in React, TypeScript, Node.js, Go, and Web3. Building scalable solutions for millions of users in Web2 and Web3 applications.",
    url: "https://antonsolovyov.com",
    image: "https://antonsolovyov.com/avatar.png",
    email: "antonsolovyov@gmail.com",
    sameAs: [
      "https://github.com/antons0l",
      "https://www.linkedin.com/in/anton-solovyov/",
      "https://twitter.com/anton_solov",
      "https://www.facebook.com/anton.solovyov",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Tea.xyz",
      url: "https://tea.xyz",
    },
    knowsAbout: [
      "React",
      "TypeScript",
      "Node.js",
      "Go",
      "Web3",
      "Blockchain",
      "Smart Contracts",
      "Solidity",
      "AWS",
      "PostgreSQL",
      "MongoDB",
      "GraphQL",
      "Next.js",
      "Fintech",
      "Docker",
      "Terraform",
      "CI/CD",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Software Engineer",
      occupationalCategory: "15-1252.00",
      skills: "React, TypeScript, Node.js, Go, Web3, AWS, Docker",
    },
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Anton Solovyov Portfolio",
    url: "https://antonsolovyov.com",
    description:
      "Professional portfolio of Anton Solovyov, a senior full-stack software engineer specializing in modern web technologies and Web3.",
    author: {
      "@type": "Person",
      name: "Anton Solovyov",
    },
    inLanguage: "en-US",
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="canonical" href="https://antonsolovyov.com" />

        {/* Structured Data - Person */}
        <Script
          id="structured-data-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />

        {/* Structured Data - Website */}
        <Script
          id="structured-data-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />

        {/* Google Analytics */}
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
