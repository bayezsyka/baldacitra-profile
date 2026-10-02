import { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { Menu, X, Phone } from 'lucide-react';

const links = [
    { href: '/', label: 'Beranda' },
    { href: '/umrah', label: 'Paket Umrah' },
    { href: '/haji', label: 'Haji Khusus' },
    { href: '/galeri', label: 'Galeri' },
    { href: '/profil', label: 'Profil' },
    { href: '/kontak', label: 'Kontak' },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const { url } = usePage();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-100 shadow-sm">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link href="/" className="flex items-center gap-3">
                        <img
                            src="/images/balda_logo.png"
                            alt="Logo Balda Hajj & Umrah"
                            className="h-12 w-auto object-contain"
                        />
                    </Link>

                    <div className="hidden md:flex items-center gap-1">
                        {links.map((l) => {
                            const isActive = url === l.href;
                            return (
                                <Link
                                    key={l.href}
                                    href={l.href}
                                    className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                                        isActive
                                            ? 'text-balda-blue bg-balda-blue-light font-semibold'
                                            : 'text-stone-600 hover:text-balda-blue hover:bg-balda-blue-light/50'
                                    }`}
                                >
                                    {l.label}
                                </Link>
                            );
                        })}
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <a
                            href="tel:02172791208"
                            className="flex items-center gap-1.5 text-sm font-medium text-stone-600 hover:text-balda-blue transition-colors"
                        >
                            <Phone size={15} className="text-balda-blue" /> 021-7279 1208
                        </a>
                        <Link href="/kontak" className="btn-gold text-xs py-2.5 px-5 uppercase tracking-wider">
                            Daftar Sekarang
                        </Link>
                    </div>

                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden p-2 rounded-lg hover:bg-stone-100 text-balda-blue transition-colors"
                        aria-label="Toggle navigation menu"
                    >
                        {open ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {open && (
                <div className="md:hidden bg-white border-t border-stone-100 px-4 py-4 space-y-2 shadow-lg">
                    {links.map((l) => {
                        const isActive = url === l.href;
                        return (
                            <Link
                                key={l.href}
                                href={l.href}
                                onClick={() => setOpen(false)}
                                className={`block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                                    isActive
                                        ? 'text-balda-blue bg-balda-blue-light font-semibold'
                                        : 'text-stone-700 hover:text-balda-blue hover:bg-balda-blue-light/50'
                                }`}
                            >
                                {l.label}
                            </Link>
                        );
                    })}
                    <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
                        <a
                            href="tel:02172791208"
                            className="flex items-center justify-center gap-2 py-2 text-sm font-medium text-stone-600"
                        >
                            <Phone size={15} className="text-balda-blue" /> 021-7279 1208
                        </a>
                        <Link
                            href="/kontak"
                            onClick={() => setOpen(false)}
                            className="block text-center btn-gold text-xs py-3 w-full uppercase tracking-wider"
                        >
                            Daftar Sekarang
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
