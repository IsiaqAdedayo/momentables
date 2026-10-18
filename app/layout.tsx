import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Chrome } from "@/components/ui/chrome";

const instrument = localFont({
  src: [
    {
      path: "../public/fonts/instrument-serif-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/instrument-serif-italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-instrument",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

const SITE = "https://momentable.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Momentable — Own the moment",
    template: "%s — Momentable",
  },
  description:
    "Momentable is the end-to-end platform for artists, museums and brands to launch an NFT marketplace that feels like a gallery, not a checkout page.",
  keywords: [
    "NFT marketplace",
    "web3",
    "digital art",
    "Flow blockchain",
    "creator platform",
    "Momentable",
  ],
  applicationName: "Momentable",
  authors: [{ name: "Momentable" }],
  creator: "Momentable",
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Momentable",
    title: "Momentable — Own the moment",
    description:
      "Storefronts, auctions, royalties and community for culture, on-chain. Built with museums, artists and brands since 2021.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Momentable — Own the moment",
    description:
      "The end-to-end platform for culture to live on-chain. Storefronts, auctions, royalties and community — beautifully done.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#06060a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${instrument.variable}`}
    >
      <body className="bg-ink text-bone antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-bone focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-ink"
        >
          Skip to content
        </a>
        {children}
        <Chrome />
      </body>
    </html>
  );
}
