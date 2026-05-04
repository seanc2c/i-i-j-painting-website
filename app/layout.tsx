import type { Metadata } from "next";
import { Fraunces, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "./lib/i18n";
import { SmoothScroll } from "./components/SmoothScroll";
import { PaintFilters } from "./components/PaintFilters";
import { PaintCursor } from "./components/PaintCursor";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const jet = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jet",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "I & I J Painting · Twenty years painting Southern California · Family-owned",
  description:
    "Family-owned residential, commercial, and industrial painting in SoCal since 2005. Ismael Bejarano and crew. Licensed CSLB #939153. Free estimates. Bilingual EN/ES.",
  openGraph: {
    title: "I & I J Painting · Twenty years, one ladder, one family",
    description:
      "Residential, commercial, and industrial painting throughout Orange County, Riverside, and San Diego County. Free estimates. (760) 669-6420.",
    type: "website",
  },
  icons: {
    icon: "/brand/logo-trace.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} ${jet.variable}`}
    >
      <body className="min-h-screen">
        <I18nProvider>
          <PaintFilters />
          <SmoothScroll />
          <PaintCursor />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
