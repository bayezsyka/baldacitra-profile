import Image from "next/image";
import Link from "next/link";
import { ChevronRight, CalendarDays, Clock, Star, Phone, Shield } from "lucide-react";

export const metadata = {
  title: "Haji Khusus – Balda Haji & Umrah",
  description: "Paket Haji Khusus PT. Balda Citra Mandiri. Berizin resmi Kemenag RI, pengalaman lebih dari 30 tahun.",
};

const galeriHaji = [
  "/images/DJI_20250425220346_0021_D-scaled.jpg",
  "/images/IMG-20260515-WA0009.jpg",
  "/images/IMG-20260513-WA0061.jpg",
  "/images/20260404_202338-scaled.jpg",
];

export default function HajiPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <Image src="/images/DJI_20250425220346_0021_D-scaled.jpg" alt="Haji Khusus" fill className="object-cover object-top" />
        <div className="absolute inset-0 bg-green-950/75" />
        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
          <p className="section-tag text-amber-400 mb-2">Berizin Resmi Kemenag RI</p>
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-3">Haji Khusus</h1>
          <p className="text-green-200 max-w-lg">Wujudkan impian menunaikan ibadah haji dengan nyaman dan terbimbing</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-stone-50 border-b border-stone-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-2 text-sm text-stone-500">
          <Link href="/" className="hover:text-green-800">Beranda</Link>
          <ChevronRight size={14} />
          <span className="text-stone-800 font-medium">Haji Khusus</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info utama */}
          <div>
            <p className="section-tag mb-2">Program Haji Khusus 2026</p>
            <h2 className="section-title mb-4">Perjalanan Tamu Allah yang Berkesan</h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              PT. Balda Citra Mandiri mendapatkan izin penyelenggaraan Haji Khusus dari Departemen
              Agama RI sejak tahun 2000. Selama lebih dari dua dekade, kami telah memberangkatkan
              ribuan jamaah haji dengan pelayanan yang amanah dan profesional.
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl p-5 mb-6">
              <h3 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                <Shield size={18} className="text-green-700" />
                Legalitas & Izin Resmi
              </h3>
              <ul className="space-y-2 text-sm text-green-800">
                <li className="flex justify-between"><span>Izin Operasional PIHK</span><span className="font-semibold">1214 Tahun 2021</span></li>
                <li className="flex justify-between border-t border-green-100 pt-2"><span>Izin Depag</span><span className="font-semibold">PHU/HK.3037/VIII/2009</span></li>
                <li className="flex justify-between border-t border-green-100 pt-2"><span>Anggota HIMPUH</span><span className="font-semibold">039/HIMPUH/2010</span></li>
              </ul>
            </div>

            <h3 className="font-bold text-stone-800 mb-3">Fasilitas Program Haji Khusus</h3>
            <ul className="space-y-2.5 mb-6">
              {[
                "Hotel bintang 5 walking distance dari Masjidil Haram & Masjid Nabawi",
                "Penerbangan langsung dengan maskapai terpilih",
                "Pembimbing ibadah berpengalaman & dokter pendamping",
                "Konsumsi 3x sehari menu Indonesia",
                "Manasik haji intensif sebelum keberangkatan",
                "Perlengkapan haji lengkap",
                "Asuransi perjalanan & perlindungan jiwa",
                "Ziarah ke tempat-tempat bersejarah Islam",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-stone-700">
                  <Star size={14} className="text-amber-500 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-sm bg-amber-50 border border-amber-200 text-amber-800 px-4 py-2.5 rounded-full">
                <CalendarDays size={15} />
                <span className="font-semibold">Keberangkatan: 2026</span>
              </div>
              <div className="flex items-center gap-2 text-sm bg-stone-50 border border-stone-200 text-stone-700 px-4 py-2.5 rounded-full">
                <Clock size={15} />
                <span className="font-semibold">±26 Hari</span>
              </div>
            </div>
          </div>

          {/* Galeri & CTA */}
          <div>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {galeriHaji.map((src, i) => (
                <div key={i} className={`relative overflow-hidden rounded-xl ${i === 0 ? 'col-span-2 h-52' : 'h-36'}`}>
                  <Image src={src} alt={`Haji ${i+1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>

            <div className="bg-green-900 text-white rounded-2xl p-6">
              <h3 className="font-serif text-xl font-bold mb-2">Daftarkan Diri Anda</h3>
              <p className="text-green-200 text-sm mb-4">
                Kuota haji khusus sangat terbatas. Segera hubungi kami untuk informasi
                ketersediaan dan pendaftaran.
              </p>
              <div className="space-y-2">
                <a href="tel:02172791208"
                  className="flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold px-5 py-3 rounded-xl transition-colors w-full">
                  <Phone size={16} /> 021-7279 1208 / 1209
                </a>
                <Link href="/kontak"
                  className="flex items-center justify-center gap-2 bg-green-800 hover:bg-green-700 text-white font-semibold px-5 py-3 rounded-xl transition-colors w-full text-sm">
                  Kirim Pesan <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
