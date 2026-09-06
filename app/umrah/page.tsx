import Image from "next/image";
import Link from "next/link";
import { ChevronRight, CalendarDays, Clock, Star, Phone } from "lucide-react";

const paketList = [
  {
    title: "Umrah Plus",
    tanggal: "15 Agustus 2026",
    hari: 12,
    img: "/images/Umrah_15Ags26.jpg",
    badge: "Tersedia",
    highlights: ["Hotel bintang 5 dekat Masjidil Haram", "Maskapai penerbangan langsung", "Pembimbing berpengalaman", "Ziarah Makkah & Madinah"],
  },
  {
    title: "Umrah Plus",
    tanggal: "26 Februari 2026",
    hari: 12,
    img: "/images/20260226_umrah.jpg",
    badge: "Tersedia",
    highlights: ["Hotel bintang 5 dekat Masjidil Haram", "Maskapai penerbangan langsung", "Pembimbing berpengalaman", "Ziarah Makkah & Madinah"],
  },
  {
    title: "Umrah Plus",
    tanggal: "17 Januari 2026",
    hari: 12,
    img: "/images/2026-01-scaled.jpg",
    badge: "Selesai",
    highlights: ["Hotel bintang 5 dekat Masjidil Haram", "Maskapai penerbangan langsung", "Pembimbing berpengalaman", "Ziarah Makkah & Madinah"],
  },
  {
    title: "Umrah Reguler",
    tanggal: "2025",
    hari: 9,
    img: "/images/1-Keberangkatan-scaled.jpg",
    badge: "Selesai",
    highlights: ["Hotel nyaman dekat Masjid", "Akomodasi lengkap", "Pembimbing ibadah", "Ziarah Makkah & Madinah"],
  },
];

export const metadata = {
  title: "Paket Umrah – Balda Haji & Umrah",
  description: "Paket perjalanan Umrah dari PT. Balda Citra Mandiri. Terpercaya sejak 1996 dengan pelayanan terbaik.",
};

export default function UmrahPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <Image src="/images/IMG-20260530-WA0216-scaled.jpg" alt="Umrah" fill className="object-cover" />
        <div className="absolute inset-0 bg-green-950/75" />
        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
          <p className="section-tag text-amber-400 mb-2">PT. Balda Citra Mandiri</p>
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-3">Paket Umrah</h1>
          <p className="text-green-200 max-w-lg">Perjalanan Umrah yang direncanakan dengan teliti untuk kekhusyukan ibadah Anda</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-stone-50 border-b border-stone-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-2 text-sm text-stone-500">
          <Link href="/" className="hover:text-green-800">Beranda</Link>
          <ChevronRight size={14} />
          <span className="text-stone-800 font-medium">Paket Umrah</span>
        </div>
      </div>

      {/* Paket list */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {paketList.map((p, i) => (
            <div key={i} className="card">
              <div className="relative h-56 overflow-hidden">
                <Image src={p.img} alt={p.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className={`absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full
                  ${p.badge === 'Tersedia' ? 'bg-green-500 text-white' : 'bg-stone-500 text-white'}`}>
                  {p.badge}
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h2 className="text-xl font-bold">{p.title}</h2>
                  <div className="flex gap-4 text-sm text-green-200 mt-1">
                    <span className="flex items-center gap-1"><CalendarDays size={13} />{p.tanggal}</span>
                    <span className="flex items-center gap-1"><Clock size={13} />{p.hari} Hari</span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xs font-bold tracking-widest uppercase text-stone-400 mb-3">Fasilitas Termasuk</h3>
                <ul className="space-y-2">
                  {p.highlights.map((h, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-stone-700">
                      <Star size={13} className="text-amber-500 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-stone-400">Harga</div>
                    <div className="font-bold text-green-800">Hubungi Kami</div>
                  </div>
                  {p.badge === 'Tersedia' ? (
                    <Link href="/kontak" className="btn-gold text-sm py-2 px-4">
                      Daftar Sekarang
                    </Link>
                  ) : (
                    <span className="text-sm text-stone-400 font-medium">Selesai</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-green-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-serif font-bold mb-2">Ingin Tahu Lebih Lanjut?</h2>
          <p className="text-green-200 mb-6">Tim kami siap membantu Anda menemukan paket yang paling sesuai.</p>
          <a href="tel:02172791208"
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold px-6 py-3 rounded-full transition-colors">
            <Phone size={16} /> Hubungi Kami Sekarang
          </a>
        </div>
      </section>
    </div>
  );
}
