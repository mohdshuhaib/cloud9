// app/layout.tsx
import type { Metadata } from "next";
import { Tajawal } from "next/font/google"; // Using Google Fonts for a great Arabic font
import "./globals.css";

// Configure the Tajawal font
const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-tajawal", // CSS variable for easy use
});

export const metadata: Metadata = {
  title: "كلاود9 | صالون الحلاقة الفاخر", // Cloud9 | The Luxury Barbershop
  description: "أفضل تجربة حلاقة في رأس الخور، دبي. حيث يلتقي الأناقة بالتميز.", // The best barbershop experience in Ras Al Khor, Dubai. Where elegance meets excellence.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Set the language to Arabic and direction to Right-To-Left
    <html lang="ar" dir="rtl">
      <body className={`${tajawal.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}