// app/layout.tsx
import type { Metadata } from "next";
// 1. Import new fonts: Playfair Display for headings, Inter for body
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// 2. Configure the Inter font for body text
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-inter", // CSS variable for easy use
});

// 3. Configure the Playfair Display font for headings
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-playfair", // CSS variable for headings
});

// 4. Update metadata to English
export const metadata: Metadata = {
  title: "Cloud9 | The Luxury Barbershop",
  description: "The ultimate grooming experience in Ras Al Khor, Dubai. Where style meets precision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 5. Set language to English and remove RTL direction
    <html lang="en">
      {/* 6. Apply both font variables to the body */}
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}