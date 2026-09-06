import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Balda – Haji Khusus & Umrah Indonesia",
  description: "PT. Balda Citra Mandiri – Penyelenggara perjalanan ibadah Haji Khusus dan Umrah terpercaya sejak 1996. Berizin resmi Kemenag RI, anggota HIMPUH.",
  keywords: "travel umroh, haji khusus, umroh terpercaya, balda citra mandiri, travel haji jakarta",
  openGraph: {
    title: "Balda – Haji Khusus & Umrah Indonesia",
    description: "Penyelenggara perjalanan ibadah Haji Khusus dan Umrah terpercaya sejak 1996.",
    url: "https://demo-baldacitra.sangkolo.my.id",
    siteName: "Balda",
    type: "website",
    images: [{ url: "/images/20260611_home_web_1.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
