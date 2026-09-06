import Image from "next/image";
import Link from "next/link";
import { ChevronRight, CalendarDays, Clock, Star, Phone } from "lucide-react";

const paketList = [
  {
    title: "Umrah Plus 12 Hari",
    tanggal: "15 Agustus 2026",
    hari: 12,
    img: "/images/Umrah_15Ags26.jpg",
    badge: "Tersedia",
    highlights: ["Hotel bintang 5 dekat Masjidil Haram", "Penerbangan langsung", "Pembimbing ibadah berpengalaman", "Ziarah Makkah & Madinah lengkap"],
  },
  {
    title: "Umrah Plus 12 Hari",
    tanggal: "26 Februari 2026",
    hari: 12,
    img: "/images/20260226_umrah.jpg",
    badge: "Tersedia",
    highlights: ["Hotel bintang 5 dekat Masjidil Haram", "Penerbangan langsung", "Pembimbing ibadah berpengalaman", "Ziarah Makkah & Madinah lengkap"],
  },
  {
    title: "Umrah Reguler",
    tanggal: "17 Januari 2026",
    hari: 12,
    img: "/images/2026-01-scaled.jpg",
    badge: "Selesai",
    highlights: ["Hotel nyaman dekat Masjid", "Akomodasi & makan full board", "Pembimbing ibadah", "Ziarah Makkah & Madinah"],
  },
  {
    title: "Umrah Ramadhan",
    tanggal: "Musim 2026",
    hari: 15,
    img: "/images/1-Keberangkatan-scaled.jpg",
    badge: "Pendaftaran Dibuka",
    highlights: ["Menyambut malam Lailatul Qadar", "Akomodasi strategis", "Bimbingan ibadah intensif", "Suasana spiritual Ramadhan"],
  },
];

export const metadata = {
  title: "Paket Umrah – Balda Haji & Umrah Indonesia",
  description: "Paket perjalanan ibadah Umrah dari PT. Balda Citra Mandiri. Terpercaya sejak 1996 dengan pelayanan terbaik.",
};

export default function UmrahPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <Image src="/images/IMG-20260530-WA0216-scaled.jpg" alt="Umrah Balda" fill className="object-cover" />
        <div className="absolute inset-0 bg-balda-blue-deep/85" />
        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
          <p className="text-xs font-bold tracking-widest uppercase text-balda-gold mb-2">PT. Balda Citra Mandiri</p>
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-3">Paket Ibadah Umrah</h1>
          <p className="text-balda-blue-sky max-w-lg">Rangkaian program Umrah yang dirancang dengan teliti untuk kekhusyukan dan kenyamanan ibadah Anda</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-stone-50 border-b border-stone-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-2 text-sm text-stone-500">
          <Link href="/" className="hover:text-balda-blue">Beranda</Link>
          <ChevronRight size={14} />
          <span className="text-stone-800 font-medium">Paket Umrah</span>
        </div>
      </div>

      {/* Paket list */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {paketList.map((p, i) => (
            <div key={i} className="card hover:border-balda-blue/30 transition-all">
              <div className="relative h-60 overflow-hidden">
                <Image src={p.img} alt={p.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-balda-blue-deep/80 via-transparent to-transparent" />
                <span className={`absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full shadow
                  ${p.badge === 'Tersedia' || p.badge === 'Pendaftaran Dibuka' ? 'bg-balda-gold text-balda-blue-deep' : 'bg-stone-400 text-white'}`}>
                  {p.badge}
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h2 className="text-xl font-bold">{p.title}</h2>
                  <div className="flex gap-4 text-sm text-balda-gold mt-1 font-medium">
                    <span className="flex items-center gap-1"><CalendarDays size={14} />{p.tanggal}</span>
                    <span className="flex items-center gap-1"><Clock size={14} />{p.hari} Hari</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xs font-bold tracking-widest uppercase text-stone-400 mb-3">Fasilitas Termasuk</h3>
                <ul className="space-y-2.5">
                  {p.highlights.map((h, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm text-stone-700">
                      <Star size={14} className="text-balda-gold flex-shrink-0 fill-balda-gold" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-5 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-stone-400">Biaya Paket</div>
                    <div className="font-bold text-balda-blue text-base">Hubungi Kami</div>
                  </div>
                  {p.badge !== 'Selesai' ? (
                    <Link href="/kontak" className="btn-primary text-xs py-2.5 px-5">
                      Daftar Sekarang
                    </Link>
                  ) : (
                    <span className="text-sm text-stone-400 font-medium">Periode Berakhir</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-balda-blue text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3">Konsultasi Paket Bersama Tim Balda</h2>
          <p className="text-balda-blue-sky mb-6">Hubungi kami untuk informasi detail jadwal, maskapai, dan pilihan hotel.</p>
          <a href="tel:02172791208"
            className="inline-flex items-center gap-2 bg-balda-gold text-balda-blue-deep font-bold px-7 py-3 rounded-full hover:bg-balda-gold-dark transition-colors shadow-lg">
            <Phone size={17} /> Hubungi 021-7279 1208
          </a>
        </div>
      </section>
    </div>
  );
}
