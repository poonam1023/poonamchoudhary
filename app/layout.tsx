import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Project Poonam — The Book Cover",
  description: "Every project begins as a page waiting to be turned. Stories crafted through design, code and imagination.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} antialiased`} suppressHydrationWarning>
      <body className="overflow-hidden bg-paper-primary">
        {/* Hidden SVG Filter for premium handmade paper grain */}
        <svg
          style={{
            position: "absolute",
            width: 0,
            height: 0,
            pointerEvents: "none",
          }}
          aria-hidden="true"
        >
          <defs>
            <filter id="paper-grain" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.003"
                numOctaves="3"
              />
              <feColorMatrix type="saturate" values="0" />
            </filter>
          </defs>
        </svg>
        {children}
      </body>
    </html>
  );
}
