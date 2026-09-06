import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Instagram, Youtube, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-balda-blue-deep text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl p-3 inline-block mb-5">
              <Image
                src="/images/balda_logo.png"
                alt="Logo Balda Hajj & Umrah"
                width={150}
                height={50}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-balda-blue-sky text-sm leading-relaxed max-w-sm">
              Penyelenggara perjalanan ibadah Haji Khusus dan Umrah terpercaya sejak 1996.
              Berizin resmi Kemenag RI dan anggota HIMPUH.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="https://instagram.com/baldacitra" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-balda-blue hover:bg-balda-gold hover:text-balda-blue-deep flex items-center justify-center transition-colors">
                <Instagram size={17} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-balda-blue hover:bg-balda-gold hover:text-balda-blue-deep flex items-center justify-center transition-colors">
                <Youtube size={17} />
              </a>
              <a href="https://facebook.com/baldacitra" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-balda-blue hover:bg-balda-gold hover:text-balda-blue-deep flex items-center justify-center transition-colors">
                <Facebook size={17} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-xs tracking-widest uppercase text-balda-gold mb-4">Navigasi</h3>
            <ul className="space-y-2.5 text-sm text-balda-blue-sky">
              {[["Beranda", "/"], ["Paket Umrah", "/umrah"], ["Haji Khusus", "/haji"],
                ["Galeri", "/galeri"], ["Profil", "/profil"], ["Kontak", "/kontak"]].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-balda-gold transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xs tracking-widest uppercase text-balda-gold mb-4">Kontak & Legalitas</h3>
            <ul className="space-y-3 text-sm text-balda-blue-sky">
              <li className="flex gap-2.5">
                <MapPin size={16} className="mt-0.5 text-balda-gold flex-shrink-0" />
                <span>Jl. Cipaku II No.25, Kebayoran Baru, Jakarta Selatan 12170</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone size={16} className="text-balda-gold flex-shrink-0" />
                <a href="tel:02172791208" className="hover:text-balda-gold">021-7279 1208 / 1209</a>
              </li>
              <li className="flex gap-2.5 items-center">
                <Mail size={16} className="text-balda-gold flex-shrink-0" />
                <a href="mailto:info@baldacitra.com" className="hover:text-balda-gold">info@baldacitra.com</a>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-balda-blue/40 text-xs text-balda-blue-sky/80 space-y-1">
              <div><strong className="text-white">PIHK:</strong> 1214 Tahun 2021</div>
              <div><strong className="text-white">PPIU:</strong> U.8 Tahun 2022</div>
              <div><strong className="text-white">HIMPUH:</strong> 039/HIMPUH/2010</div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-balda-blue/30 py-4 text-center text-xs text-balda-blue-sky/60">
        © {new Date().getFullYear()} PT. Balda Citra Mandiri. Hajj & Umrah Indonesia.
      </div>
    </footer>
  );
}
