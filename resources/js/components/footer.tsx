import { Link } from '@inertiajs/react';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-balda-blue-deep text-white">
            <div className="site-container py-14 sm:py-16">
                <div className="grid gap-10 lg:grid-cols-[1.15fr_0.65fr_1.2fr] lg:gap-14">
                    <div>
                        <div className="mb-5 inline-block rounded-xl bg-white p-3">
                            <img
                                src="/images/balda_logo.png"
                                alt="Logo Balda Hajj & Umrah"
                                className="h-10 w-auto object-contain"
                                width="116"
                                height="80"
                            />
                        </div>
                        <p className="max-w-md text-sm leading-6 text-balda-blue-sky">
                            Penyelenggara perjalanan ibadah Haji Khusus dan
                            Umrah terpercaya sejak 1996. Berizin resmi Kemenag
                            RI dan anggota HIMPUH.
                        </p>
                        <div className="mt-6 flex gap-3">
                            <a
                                href="https://instagram.com/baldacitra"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex size-11 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-balda-gold hover:text-balda-blue-deep"
                                aria-label="Instagram Balda Citra"
                            >
                                <Instagram size={19} aria-hidden="true" />
                            </a>
                            <a
                                href="https://facebook.com/baldacitra"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex size-11 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-balda-gold hover:text-balda-blue-deep"
                                aria-label="Facebook Balda Citra"
                            >
                                <Facebook size={19} aria-hidden="true" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h2 className="mb-4 text-base font-extrabold text-white">
                            Navigasi
                        </h2>
                        <ul className="space-y-1 text-sm text-balda-blue-sky">
                            {[
                                ['Beranda', '/'],
                                ['Paket Umrah', '/umrah'],
                                ['Haji Khusus', '/haji'],
                                ['Galeri', '/galeri'],
                                ['Profil', '/profil'],
                                ['Kontak', '/kontak'],
                            ].map(([label, href]) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className="inline-flex min-h-10 items-center transition-colors hover:text-balda-gold"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="mb-4 text-base font-extrabold text-white">
                            Kontak dan legalitas
                        </h2>
                        <ul className="space-y-4 text-sm text-balda-blue-sky">
                            <li className="flex gap-2.5">
                                <MapPin
                                    size={18}
                                    className="mt-0.5 shrink-0 text-balda-gold"
                                    aria-hidden="true"
                                />
                                <span>
                                    Jl. Cipaku II No.25, Kebayoran Baru, Jakarta
                                    Selatan 12170
                                </span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Phone
                                    size={18}
                                    className="shrink-0 text-balda-gold"
                                    aria-hidden="true"
                                />
                                <a
                                    href="tel:02172791208"
                                    className="inline-flex min-h-10 items-center transition-colors hover:text-balda-gold"
                                >
                                    021-7279 1208 / 1209
                                </a>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Mail
                                    size={18}
                                    className="shrink-0 text-balda-gold"
                                    aria-hidden="true"
                                />
                                <a
                                    href="mailto:info@baldacitra.com"
                                    className="inline-flex min-h-10 items-center transition-colors hover:text-balda-gold"
                                >
                                    info@baldacitra.com
                                </a>
                            </li>
                        </ul>

                        <div className="mt-5 space-y-1 border-t border-white/15 pt-5 text-xs text-balda-blue-sky">
                            <div>
                                <strong className="text-white">PIHK:</strong>{' '}
                                1214 Tahun 2021
                            </div>
                            <div>
                                <strong className="text-white">PPIU:</strong>{' '}
                                U.8 Tahun 2022
                            </div>
                            <div>
                                <strong className="text-white">HIMPUH:</strong>{' '}
                                039/HIMPUH/2010
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-white/10 py-5 text-center text-xs text-balda-blue-sky">
                © {new Date().getFullYear()} PT. Balda Citra Mandiri. Haji dan
                Umrah Indonesia.
            </div>
        </footer>
    );
}
