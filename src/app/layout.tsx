import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { person, site } from "@/data/portfolio";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${person.name} · ${person.title}`,
    template: `%s · ${person.name}`,
  },
  description: site.description,
  authors: [{ name: person.name, url: person.social.github }],
  creator: person.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: person.name,
    title: `${person.name} · ${person.headline}`,
    description: site.description,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: `${person.name} portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${person.name} · ${person.headline}`,
    description: site.description,
    images: [site.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="mesh-bg font-sans antialiased">
        <div className="grain" aria-hidden />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
