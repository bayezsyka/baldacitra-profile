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
    tanggal: "2026",
    hari: "26 Hari",
    img: "/images/DJI_20250425220346_0021_D-scaled.jpg",
    harga: "Hubungi Kami",
    badge: "Daftar Tunggu",
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
    <div className="pt-16">

      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/20260611_home_web_1.jpg" alt="Masjidil Haram" fill
            className="object-cover" priority quality={90} />
          <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 via-green-950/70 to-green-950/30" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-xl">
            <p className="section-tag text-amber-400 mb-4">Terpercaya Sejak 1996</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
              Perjalanan Ibadah<br />
              <span className="text-amber-400">Sepenuh Hati</span>
            </h1>
            <p className="text-green-100 text-lg leading-relaxed mb-8 max-w-md">
              Lebih dari tiga dekade kami melayani tamu-tamu Allah dalam perjalanan
              Haji Khusus dan Umrah — dengan amanah, profesionalisme, dan kasih sayang.
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
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40">
          <div className="w-px h-10 bg-white/20 animate-pulse" />
          <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-green-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-2 py-2">
                <div className="text-amber-400">{s.icon}</div>
                <div className="text-2xl font-bold">{s.val}</div>
                <div className="text-green-300 text-xs tracking-wide uppercase">{s.label}</div>
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
            <h2 className="section-title mb-3">Paket Tersedia</h2>
            <p className="text-stone-500 max-w-md mx-auto">
              Setiap perjalanan kami dirancang untuk memberikan kenyamanan dan kekhusyukan ibadah yang optimal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paket.map((p, i) => (
              <Link key={i} href={p.href} className="card group">
                <div className="relative h-52 overflow-hidden">
                  <Image src={p.img} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className={`absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full
                    ${p.badge === 'Tersedia' ? 'bg-green-500 text-white' : 'bg-amber-500 text-white'}`}>
                    {p.badge}
                  </span>
                  <div className="absolute bottom-3 left-3 text-white">
                    <div className="font-bold">{p.title}</div>
                    <div className="text-sm text-green-200">{p.hari}</div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-xs text-stone-400 uppercase tracking-wide mb-1">Keberangkatan</div>
                  <div className="font-semibold text-stone-800">{p.tanggal}</div>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-stone-400 mb-0.5">Harga Mulai</div>
                      <div className="font-bold text-green-800">{p.harga}</div>
                    </div>
                    <span className="text-green-700 group-hover:text-amber-600 transition-colors flex items-center gap-1 text-sm font-semibold">
                      Detail <ChevronRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/umrah" className="btn-gold">
              Lihat Semua Paket <ChevronRight size={16} />
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
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galeri.map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-xl group">
                <Image src={src} alt={`Galeri ${i+1}`} fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/galeri" className="btn-gold">
              Lihat Semua Galeri <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── MENGAPA BALDA ── */}
      <section className="py-20 bg-green-950 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-tag text-amber-400 mb-3">Mengapa Balda</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Dipercaya Ribuan Jamaah<br />Selama 30 Tahun
              </h2>
              <p className="text-green-200 leading-relaxed mb-8">
                PT. Balda Citra Mandiri berdiri sejak 1996 dengan satu tekad: melayani
                tamu-tamu Allah dengan sepenuh hati. Setiap perjalanan kami kelola dengan
                standar tinggi agar setiap jamaah dapat beribadah dengan tenang dan khusyuk.
              </p>
              <ul className="space-y-4">
                {[
                  "Berizin resmi Kemenag RI (PIHK & PPIU)",
                  "Anggota resmi HIMPUH no. 039/HIMPUH/2010",
                  "Pengalaman lebih dari 30 tahun",
                  "Hotel & maskapai pilihan terbaik",
                  "Pembimbing ibadah berpengalaman",
                  "Pelayanan personal sejak pendaftaran hingga kembali ke tanah air",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-green-100">
                    <span className="mt-1 w-4 h-4 rounded-full bg-amber-500 flex-shrink-0 flex items-center justify-center">
                      <span className="text-white text-[9px] font-bold">✓</span>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/profil" className="btn-outline border-green-500 text-green-200 hover:bg-green-800 hover:text-white">
                  Selengkapnya <ChevronRight size={16} />
                </Link>
              </div>
            </div>
            <div className="relative h-[420px] rounded-2xl overflow-hidden">
              <Image src="/images/20260611_home_web_2.jpg" alt="Jamaah Balda" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-amber-700">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-serif font-bold mb-3">Siap Berangkat ke Tanah Suci?</h2>
          <p className="text-amber-100 mb-8 text-lg">Hubungi kami sekarang untuk informasi paket dan pendaftaran.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:02172791208"
              className="flex items-center gap-2 bg-white text-amber-800 font-bold px-6 py-3 rounded-full hover:bg-amber-50 transition-colors shadow-md">
              <Phone size={18} /> 021-7279 1208
            </a>
            <a href="https://wa.me/6202172791208" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-700 text-white font-bold px-6 py-3 rounded-full hover:bg-green-800 transition-colors shadow-md">
              WhatsApp Kami
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
