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
  metadataBase: new URL("https://antonsolovyov.com"),
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
        url: "/avatar.jpg",
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
    images: ["/avatar.jpg"],
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
    icon: "/favicon.svg",
    apple: "/favicon.svg",
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
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;
  const isProd = process.env.NODE_ENV === "production";

  // Minimal inline Person data - full details available at /resume.json
  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://antonsolovyov.com/#person",
    name: "Anton Solovyov",
    jobTitle: "Senior Full-Stack Software Engineer",
    description:
      "Senior full-stack software engineer specializing in React, TypeScript, Node.js, Go, and Web3. Building scalable solutions for millions of users in Web2 and Web3 applications.",
    url: "https://antonsolovyov.com",
    image: "https://antonsolovyov.com/avatar.jpg",
    email: "antonsolovyov@gmail.com",
    sameAs: [
      "https://github.com/antons0l",
      "https://www.linkedin.com/in/anton-solovyov/",
      "https://twitter.com/anton_solov",
      "https://www.facebook.com/anton.solovyov",
    ],
    // Full resume data available at:
    mainEntityOfPage: "https://antonsolovyov.com/resume.json",
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
        <meta name="theme-color" content="#3b82f6" />
        
        {/* Machine-readable resources for AI agents */}
        <link rel="alternate" type="application/ld+json" href="/resume.json" title="Resume (JSON-LD)" />
        <link rel="author" href="/resume.json" />
        <link rel="help" href="/llms.txt" />

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

        {/* Microsoft Clarity */}
        {clarityId && isProd ? (
          <Script
            id="clarity-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "${clarityId}");`,
            }}
          />
        ) : null}

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
