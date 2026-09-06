import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Kontak – Balda Haji & Umrah",
  description: "Hubungi PT. Balda Citra Mandiri untuk informasi paket Haji Khusus dan Umrah.",
};

export default function KontakPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="relative h-56 overflow-hidden">
        <Image src="/images/20260611_home_web_3.jpg" alt="Kontak" fill className="object-cover" />
        <div className="absolute inset-0 bg-green-950/80" />
        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
          <p className="section-tag text-amber-400 mb-2">Kami Siap Membantu</p>
          <h1 className="text-3xl md:text-4xl font-serif font-bold">Hubungi Kami</h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-stone-50 border-b border-stone-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-2 text-sm text-stone-500">
          <Link href="/" className="hover:text-green-800">Beranda</Link>
          <ChevronRight size={14} />
          <span className="text-stone-800 font-medium">Kontak</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Info kontak */}
          <div>
            <p className="section-tag mb-2">Informasi Kontak</p>
            <h2 className="section-title mb-6">Untuk Informasi & Pendaftaran</h2>
            <p className="text-stone-600 mb-8 leading-relaxed">
              Tim kami siap membantu Anda menemukan paket yang paling sesuai dengan
              kebutuhan dan kemampuan Anda. Jangan ragu untuk menghubungi kami.
            </p>

            <div className="space-y-5">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-green-700" />
                </div>
                <div>
                  <div className="font-semibold text-stone-800 mb-0.5">Alamat Kantor</div>
                  <div className="text-stone-600 text-sm leading-relaxed">
                    Jl. Cipaku II No.25, RT.11/RW.4, Petogogan,<br />
                    Kec. Kebayoran Baru, Jakarta Selatan 12170
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-green-700" />
                </div>
                <div>
                  <div className="font-semibold text-stone-800 mb-0.5">Telepon</div>
                  <a href="tel:02172791208" className="text-green-700 hover:text-amber-700 font-medium block">
                    021-7279 1208
                  </a>
                  <a href="tel:02172791209" className="text-green-700 hover:text-amber-700 font-medium">
                    021-7279 1209
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-green-700" />
                </div>
                <div>
                  <div className="font-semibold text-stone-800 mb-0.5">Email</div>
                  <a href="mailto:info@baldacitra.com" className="text-green-700 hover:text-amber-700 font-medium">
                    info@baldacitra.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-green-700" />
                </div>
                <div>
                  <div className="font-semibold text-stone-800 mb-0.5">Jam Operasional</div>
                  <div className="text-stone-600 text-sm">Senin – Jumat: 08.00 – 17.00 WIB</div>
                  <div className="text-stone-600 text-sm">Sabtu: 08.00 – 13.00 WIB</div>
                </div>
              </div>
            </div>

            {/* WA Button */}
            <a href="https://wa.me/6202172791208?text=Assalamualaikum,%20saya%20ingin%20menanyakan%20informasi%20paket%20Haji/Umrah%20dari%20Balda."
              target="_blank" rel="noopener noreferrer"
              className="mt-8 flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-4 rounded-2xl transition-colors w-full shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat via WhatsApp
            </a>
          </div>

          {/* Form */}
          <div>
            <div className="card p-7">
              <h3 className="text-xl font-serif font-bold text-stone-800 mb-6">Kirim Pesan</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1.5">Nama Lengkap</label>
                    <input type="text" placeholder="Nama Anda" required
                      className="w-full px-4 py-2.5 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1.5">No. Telepon</label>
                    <input type="tel" placeholder="08xx xxxx xxxx" required
                      className="w-full px-4 py-2.5 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1.5">Email</label>
                  <input type="email" placeholder="email@anda.com"
                    className="w-full px-4 py-2.5 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1.5">Paket yang Diminati</label>
                  <select className="w-full px-4 py-2.5 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
                    <option value="">Pilih Paket</option>
                    <option>Umrah Plus - Agustus 2026</option>
                    <option>Umrah Plus - Februari 2026</option>
                    <option>Haji Khusus 2026</option>
                    <option>Lainnya / Belum Tahu</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1.5">Pesan</label>
                  <textarea rows={4} placeholder="Tuliskan pertanyaan atau kebutuhan Anda..."
                    className="w-full px-4 py-2.5 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 resize-none" />
                </div>
                <button type="submit"
                  className="w-full btn-gold justify-center py-3">
                  Kirim Pesan
                </button>
              </form>
            </div>

            {/* Maps placeholder */}
            <div className="mt-4 rounded-2xl overflow-hidden h-48 bg-stone-100 flex items-center justify-center border border-stone-200">
              <div className="text-center text-stone-400">
                <MapPin size={32} className="mx-auto mb-2 text-stone-300" />
                <div className="text-sm">Jl. Cipaku II No.25, Kebayoran Baru</div>
                <div className="text-xs text-stone-300">Jakarta Selatan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
