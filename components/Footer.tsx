import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-amber-600 flex items-center justify-center">
                <span className="text-white font-bold">B</span>
              </div>
              <div>
                <div className="font-bold text-lg">BALDA</div>
                <div className="text-xs text-green-400 tracking-widest uppercase">PT. Balda Citra Mandiri</div>
              </div>
            </div>
            <p className="text-green-200 text-sm leading-relaxed max-w-sm">
              Penyelenggara perjalanan ibadah Haji Khusus dan Umrah terpercaya sejak 1996.
              Berizin resmi Kemenag RI dan anggota HIMPUH.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-green-800 hover:bg-amber-600 flex items-center justify-center transition-colors">
                <Instagram size={15} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-green-800 hover:bg-amber-600 flex items-center justify-center transition-colors">
                <Youtube size={15} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm tracking-widest uppercase text-amber-400 mb-4">Navigasi</h3>
            <ul className="space-y-2.5 text-sm text-green-200">
              {[["Beranda", "/"], ["Paket Umrah", "/umrah"], ["Haji Khusus", "/haji"],
                ["Galeri", "/galeri"], ["Profil", "/profil"], ["Kontak", "/kontak"]].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-amber-400 transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm tracking-widest uppercase text-amber-400 mb-4">Kontak</h3>
            <ul className="space-y-3 text-sm text-green-200">
              <li className="flex gap-2.5">
                <MapPin size={15} className="mt-0.5 text-amber-500 flex-shrink-0" />
                <span>Jl. Cipaku II No.25, Kebayoran Baru, Jakarta Selatan 12170</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone size={15} className="text-amber-500 flex-shrink-0" />
                <a href="tel:02172791208" className="hover:text-amber-400">021-7279 1208 / 1209</a>
              </li>
              <li className="flex gap-2.5 items-center">
                <Mail size={15} className="text-amber-500 flex-shrink-0" />
                <a href="mailto:info@baldacitra.com" className="hover:text-amber-400">info@baldacitra.com</a>
              </li>
            </ul>

            <div className="mt-5 pt-4 border-t border-green-800 text-xs text-green-400 space-y-1">
              <div>Izin PIHK: 1214 Tahun 2021</div>
              <div>Izin PPIU: U.8 Tahun 2022</div>
              <div>HIMPUH: 039/HIMPUH/2010</div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-green-900 py-4 text-center text-xs text-green-500">
        © {new Date().getFullYear()} PT. Balda Citra Mandiri. Semua hak dilindungi.
      </div>
    </footer>
  );
}
