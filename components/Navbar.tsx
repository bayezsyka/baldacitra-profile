"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "/", label: "Beranda" },
  { href: "/umrah", label: "Paket Umrah" },
  { href: "/haji", label: "Haji Khusus" },
  { href: "/galeri", label: "Galeri" },
  { href: "/profil", label: "Profil" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-green-900 flex items-center justify-center">
              <span className="text-amber-400 font-bold text-sm">B</span>
            </div>
            <div>
              <div className="font-bold text-green-900 text-base leading-none">BALDA</div>
              <div className="text-[9px] text-stone-400 tracking-widest uppercase">Haji & Umrah</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <Link key={l.href} href={l.href}
                className="px-3 py-2 text-sm font-medium text-stone-600 hover:text-green-900 hover:bg-stone-50 rounded-lg transition-colors">
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:02172791208" className="flex items-center gap-1.5 text-sm text-stone-600 hover:text-green-900">
              <Phone size={14} /> 021-7279 1208
            </a>
            <Link href="/kontak" className="btn-gold text-sm py-2 px-4">
              Daftar Sekarang
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-stone-100">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-stone-100 px-4 py-3 space-y-1">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block px-3 py-2.5 text-sm font-medium text-stone-700 hover:text-green-900 hover:bg-stone-50 rounded-lg">
              {l.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-stone-100">
            <Link href="/kontak" onClick={() => setOpen(false)}
              className="block text-center btn-gold text-sm py-2.5 w-full">
              Daftar Sekarang
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
