import Image from "next/image";
import Link from "next/link";
import { Shield, Award, Users, ChevronRight, Star, Phone } from "lucide-react";

const paket = [
  {
    title: "Umrah Plus",
    tanggal: "15 Agustus 2026",
    hari: "12 Hari",
    img: "/images/Umrah_15Ags26.jpg",
    harga: "Hubungi Kami",
    badge: "Tersedia",
    href: "/umrah",
  },
  {
    title: "Umrah Plus",
    tanggal: "26 Februari 2026",
    hari: "12 Hari",
    img: "/images/20260226_umrah.jpg",
    harga: "Hubungi Kami",
    badge: "Tersedia",
    href: "/umrah",
  },
  {
    title: "Haji Khusus",
    tanggal: "Musim 2026",
    hari: "26 Hari",
    img: "/images/DJI_20250425220346_0021_D-scaled.jpg",
    harga: "Hubungi Kami",
    badge: "Pendaftaran Dibuka",
    href: "/haji",
  },
];

const stats = [
  { icon: <Award size={24} />, val: "30+", label: "Tahun Pengalaman" },
  { icon: <Users size={24} />, val: "10.000+", label: "Jamaah Terlayani" },
  { icon: <Shield size={24} />, val: "Resmi", label: "Berizin Kemenag RI" },
  { icon: <Star size={24} />, val: "HIMPUH", label: "Anggota Resmi" },
];

const galeri = [
  "/images/20260611_home_web_1.jpg",
  "/images/20260611_home_web_2.jpg",
  "/images/20260611_home_web_3.jpg",
  "/images/IMG-20260530-WA0172-scaled.jpg",
  "/images/IMG-20260513-WA0060.jpg",
  "/images/IMG-20260513-WA0061.jpg",
];

export default function HomePage() {
  return (
    <div className="pt-20">

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/20260611_home_web_1.jpg" alt="Masjidil Haram" fill
            className="object-cover" priority quality={90} />
          <div className="absolute inset-0 bg-gradient-to-r from-balda-blue-deep/95 via-balda-blue/80 to-balda-blue-deep/40" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-balda-gold/20 border border-balda-gold/40 text-balda-gold text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-wider">
              <span>★</span> Penyelenggara Haji & Umrah Sejak 1996
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
              Perjalanan Ibadah<br />
              <span className="text-balda-gold">Sepenuh Hati</span>
            </h1>
            <p className="text-balda-blue-sky text-lg leading-relaxed mb-8 max-w-md">
              Tiga dekade melayani tamu-tamu Allah dalam perjalanan
              Haji Khusus dan Umrah dengan amanah, kepastian izin, dan kenyamanan ibadah.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/umrah" className="btn-gold">
                Lihat Paket Umrah <ChevronRight size={16} />
              </Link>
              <Link href="/kontak" className="btn-outline">
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50">
          <div className="w-px h-10 bg-white/30 animate-pulse" />
          <span className="text-[10px] tracking-widest uppercase text-balda-gold">Scroll</span>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-balda-blue text-white py-10 shadow-inner">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-2 py-2">
                <div className="text-balda-gold">{s.icon}</div>
                <div className="text-2xl font-bold">{s.val}</div>
                <div className="text-balda-blue-sky text-xs tracking-wide uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAKET ── */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-tag mb-2">Jadwal Perjalanan</p>
            <h2 className="section-title mb-3">Paket Keberangkatan</h2>
            <p className="text-stone-500 max-w-md mx-auto">
              Setiap paket dirancang untuk memberikan kenyamanan akomodasi dan kekhusyukan ibadah yang optimal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paket.map((p, i) => (
              <Link key={i} href={p.href} className="card group hover:border-balda-blue/30 transition-all">
                <div className="relative h-56 overflow-hidden">
                  <Image src={p.img} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-balda-blue-deep/80 via-transparent to-transparent" />
                  <span className="absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full bg-balda-gold text-balda-blue-deep shadow">
                    {p.badge}
                  </span>
                  <div className="absolute bottom-3 left-3 text-white">
                    <div className="font-bold text-lg">{p.title}</div>
                    <div className="text-sm text-balda-gold">{p.hari}</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs text-stone-400 uppercase tracking-wide mb-1">Jadwal</div>
                  <div className="font-semibold text-stone-900 text-base">{p.tanggal}</div>
                  <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-stone-400 mb-0.5">Biaya Paket</div>
                      <div className="font-bold text-balda-blue text-sm">{p.harga}</div>
                    </div>
                    <span className="text-balda-blue group-hover:text-balda-gold-dark transition-colors flex items-center gap-1 text-sm font-semibold">
                      Detail <ChevronRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/umrah" className="btn-primary">
              Lihat Semua Paket Umrah <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── GALERI PREVIEW ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-tag mb-2">Dokumentasi</p>
            <h2 className="section-title mb-3">Momen Bersama Jamaah Balda</h2>
            <p className="text-stone-500 max-w-md mx-auto">Dokumentasi nyata perjalanan ibadah jamaah kami di Tanah Suci.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galeri.map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-2xl group shadow-sm">
                <Image src={src} alt={`Dokumentasi Balda ${i+1}`} fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-balda-blue-deep/0 group-hover:bg-balda-blue-deep/40 transition-colors" />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/galeri" className="btn-primary">
              Lihat Semua Galeri <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── MENGAPA BALDA ── */}
      <section className="py-20 bg-balda-blue-deep text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-tag text-balda-gold mb-3">Keunggulan Layanan</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Dipercaya Ribuan Jamaah<br />Selama Lebih dari 30 Tahun
              </h2>
              <p className="text-balda-blue-sky leading-relaxed mb-8">
                PT. Balda Citra Mandiri berdiri sejak 1996 dengan komitmen melayani tamu-tamu Allah
                dengan sepenuh hati. Setiap detail perjalanan dikelola profesional untuk memastikan
                kemabruran ibadah Anda.
              </p>
              <ul className="space-y-4">
                {[
                  "Izin Resmi Kemenag: PIHK 1214/2021 & PPIU U.8/2022",
                  "Anggota Resmi HIMPUH: No. 039/HIMPUH/2010",
                  "Pengalaman lebih dari 30 tahun melayani ribuan jamaah",
                  "Akomodasi hotel dekat Masjidil Haram & Masjid Nabawi",
                  "Pembimbing ibadah (Muthawwif) bersertifikat & berpengalaman",
                  "Pendampingan menyeluruh dari manasik hingga kembali ke tanah air",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-balda-blue-sky">
                    <span className="mt-1 w-5 h-5 rounded-full bg-balda-gold text-balda-blue-deep flex-shrink-0 flex items-center justify-center font-bold text-xs">
                      ✓
                    </span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link href="/profil" className="btn-outline">
                  Profil Lengkap Perusahaan <ChevronRight size={16} />
                </Link>
              </div>
            </div>
            <div className="relative h-[440px] rounded-2xl overflow-hidden shadow-2xl border border-balda-blue/30">
              <Image src="/images/20260611_home_web_2.jpg" alt="Jamaah Balda di Tanah Suci" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-balda-blue-deep/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-balda-gold">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-balda-blue-deep mb-3">Siap Menunaikan Ibadah ke Tanah Suci?</h2>
          <p className="text-balda-blue-dark mb-8 text-lg font-medium">Hubungi tim kami untuk konsultasi jadwal, paket, dan syarat pendaftaran.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:02172791208"
              className="flex items-center gap-2 bg-balda-blue-deep text-white font-bold px-7 py-3.5 rounded-full hover:bg-balda-blue transition-colors shadow-lg">
              <Phone size={18} className="text-balda-gold" /> 021-7279 1208
            </a>
            <a href="https://wa.me/6202172791208" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-balda-blue-deep font-bold px-7 py-3.5 rounded-full hover:bg-stone-50 transition-colors shadow-lg">
              Chat via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
