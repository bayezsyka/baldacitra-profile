import { useEffect, useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { Menu, X, Phone } from 'lucide-react';

const links = [
    { href: '/', label: 'Beranda' },
    { href: '/umrah', label: 'Paket Umrah' },
    { href: '/haji', label: 'Haji Khusus' },
    { href: '/galeri', label: 'Galeri' },
    { href: '/profil', label: 'Profil' },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const { url } = usePage();

    useEffect(() => {
        setOpen(false);
    }, [url]);

    useEffect(() => {
        if (!open) {
            return;
        }

        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setOpen(false);
            }
        };

        document.addEventListener('keydown', closeOnEscape);

        return () => document.removeEventListener('keydown', closeOnEscape);
    }, [open]);

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
            <nav className="site-container" aria-label="Navigasi utama">
                <div className="flex h-[76px] items-center justify-between gap-4">
                    <Link
                        href="/"
                        className="flex min-h-11 items-center"
                        aria-label="Balda Haji dan Umrah, beranda"
                    >
                        <img
                            src="/images/balda_logo.png"
                            alt="Logo Balda Hajj & Umrah"
                            className="h-12 w-auto object-contain"
                            width="116"
                            height="80"
                        />
                    </Link>

                    <div className="hidden items-center gap-1 lg:flex">
                        {links.map((l) => {
                            const isActive = url === l.href;
                            return (
                                <Link
                                    key={l.href}
                                    href={l.href}
                                    className={`inline-flex min-h-11 items-center border-b-2 px-3 text-sm font-semibold transition-colors ${
                                        isActive
                                            ? 'border-balda-gold text-balda-blue-deep'
                                            : 'border-transparent text-slate-600 hover:text-balda-blue'
                                    }`}
                                    aria-current={isActive ? 'page' : undefined}
                                >
                                    {l.label}
                                </Link>
                            );
                        })}
                    </div>

                    <div className="hidden items-center gap-3 lg:flex">
                        <a
                            href="tel:02172791208"
                            className="inline-flex min-h-11 items-center gap-2 px-2 text-sm font-semibold text-slate-600 transition-colors hover:text-balda-blue"
                        >
                            <Phone size={17} aria-hidden="true" /> 021-7279 1208
                        </a>
                        <Link href="/kontak" className="btn-gold">
                            Konsultasi Paket
                        </Link>
                    </div>

                    <button
                        type="button"
                        onClick={() => setOpen(!open)}
                        className="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-sm font-bold text-balda-blue-deep transition-colors hover:bg-balda-blue-light lg:hidden"
                        aria-label={open ? 'Tutup menu' : 'Buka menu'}
                        aria-expanded={open}
                        aria-controls="menu-mobile"
                    >
                        {open ? (
                            <X size={21} aria-hidden="true" />
                        ) : (
                            <Menu size={21} aria-hidden="true" />
                        )}
                        <span>Menu</span>
                    </button>
                </div>

                {open && (
                    <div
                        id="menu-mobile"
                        className="border-t border-slate-200 bg-white py-4 lg:hidden"
                    >
                        <div className="grid gap-1">
                            {links.map((l) => {
                                const isActive = url === l.href;
                                return (
                                    <Link
                                        key={l.href}
                                        href={l.href}
                                        className={`flex min-h-11 items-center rounded-lg px-3 text-sm font-semibold transition-colors ${
                                            isActive
                                                ? 'bg-balda-blue-light text-balda-blue-deep'
                                                : 'text-slate-700 hover:bg-slate-50 hover:text-balda-blue'
                                        }`}
                                        aria-current={
                                            isActive ? 'page' : undefined
                                        }
                                    >
                                        {l.label}
                                    </Link>
                                );
                            })}
                            <Link
                                href="/kontak"
                                className="flex min-h-11 items-center rounded-lg px-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-balda-blue"
                            >
                                Kontak
                            </Link>
                        </div>
                        <div className="mt-4 grid gap-2 border-t border-slate-200 pt-4 sm:grid-cols-2">
                            <a
                                href="tel:02172791208"
                                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[10px] border border-slate-300 px-4 text-sm font-bold text-balda-blue-deep"
                            >
                                <Phone size={17} aria-hidden="true" /> 021-7279
                                1208
                            </a>
                            <Link href="/kontak" className="btn-gold w-full">
                                Konsultasi Paket
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
