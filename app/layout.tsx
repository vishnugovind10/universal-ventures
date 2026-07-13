import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig, socialLinks } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const basePath = process.env.PAGES_BASE_PATH || "";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Economic Architecture for Digital Asset Systems`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "./",
  },
  applicationName: siteConfig.name,
  authors: [{ name: "Universal Ventures" }],
  creator: "Universal Ventures",
  publisher: "Universal Ventures",
  keywords: [
    "Universal Ventures",
    "digital asset economic architecture",
    "institutional token systems",
    "mechanism design",
    "treasury architecture",
    "governance systems",
    "market structure",
    "coordination infrastructure",
  ],
  openGraph: {
    title: `${siteConfig.name} — Economic Architecture for Digital Asset Systems`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${basePath}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Universal Ventures — Economic architecture for digital asset systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Economic Architecture for Digital Asset Systems`,
    description: siteConfig.description,
    images: [`${basePath}/og-image.png`],
  },
  icons: {
    icon: `${basePath}/icon.svg`,
    apple: `${basePath}/apple-icon.png`,
  },
};

function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        logo: `${siteConfig.url}/icon.svg`,
        sameAs: socialLinks.map((link) => link.href),
        founder: {
          "@type": "Person",
          name: "Vishnu Govind",
          jobTitle: "Founder",
          url: `${siteConfig.url}/about/`,
          sameAs: [
            "https://www.linkedin.com/in/vishnu-govind/",
            "https://github.com/vishnugovind10",
            "https://vishnugovind10.medium.com/",
          ],
        },
        knowsAbout: [
          "Tokenomics",
          "Treasury architecture",
          "Governance systems",
          "Market structure",
          "Digital asset infrastructure",
          "Mechanism design",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        name: siteConfig.name,
        url: siteConfig.url,
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

function ThemeScript() {
  const script = `
(() => {
  try {
    const stored = localStorage.getItem("uv-theme");
    const theme = stored === "light" || stored === "dark" ? stored : "dark";
    document.documentElement.dataset.theme = theme;
  } catch {
    document.documentElement.dataset.theme = "dark";
  }
})();
`;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${cormorant.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <head>
        <ThemeScript />
        <StructuredData />
      </head>
      <body className="min-h-full bg-background text-foreground">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <div className="flex min-h-screen flex-col">
          <Navigation />
          <main id="main-content" className="flex-1 pt-16">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
