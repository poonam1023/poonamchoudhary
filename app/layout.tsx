import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Dancing_Script } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "./providers/LenisProvider";
import Cursor from "./components/Cursor";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Poonam Choudhary — Parenting Author & Speaker",
  description:
    "Poonam Choudhary is a celebrated parenting author and speaker helping families build deeper connections through wisdom, warmth, and heart-centred guidance.",
  keywords: [
    "Poonam Choudhary",
    "parenting author",
    "parenting speaker",
    "conscious parenting",
    "parenting books",
    "family wellness",
  ],
  authors: [{ name: "Poonam Choudhary" }],
  creator: "Poonam Choudhary",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://poonamchoudhary.com",
    title: "Poonam Choudhary — Parenting Author & Speaker",
    description:
      "Helping families build deeper connections through wisdom, warmth, and heart-centred guidance.",
    siteName: "Poonam Choudhary",
  },
  twitter: {
    card: "summary_large_image",
    title: "Poonam Choudhary — Parenting Author & Speaker",
    description:
      "Helping families build deeper connections through wisdom, warmth, and heart-centred guidance.",
    creator: "@poonamchoudhary",
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
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${dancingScript.variable} antialiased`}
    >
      <body>
        <LenisProvider>
          <Cursor />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
