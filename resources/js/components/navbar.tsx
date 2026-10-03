import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, usePage } from '@inertiajs/react';
import {
    ArrowRight,
    MapPin,
    Menu,
    MessageCircle,
    Phone,
    X,
} from 'lucide-react';

const links = [
    { href: '/', label: 'Beranda' },
    { href: '/umrah', label: 'Paket Umrah' },
    { href: '/haji', label: 'Haji Khusus' },
    { href: '/galeri', label: 'Galeri' },
    { href: '/profil', label: 'Profil' },
];

const whatsappUrl =
    'https://wa.me/6281288888996?text=Assalamualaikum%2C%20saya%20ingin%20berkonsultasi%20tentang%20program%20Balda.';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const lastScrollY = useRef(0);
    const closeRef = useRef<HTMLButtonElement>(null);
    const drawerRef = useRef<HTMLDivElement>(null);
    const { url } = usePage();
    const currentPath = url.split('?')[0];

    const isActive = (href: string) =>
        href === '/'
            ? currentPath === '/'
            : currentPath === href || currentPath.startsWith(`${href}/`);

    useEffect(() => {
        setOpen(false);
        setIsHidden(false);
    }, [url]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollDifference = currentScrollY - lastScrollY.current;

            setIsScrolled(currentScrollY > 20);

            if (open || currentScrollY <= 96) {
                setIsHidden(false);
            } else if (scrollDifference > 8) {
                setIsHidden(true);
            } else if (scrollDifference < -8) {
                setIsHidden(false);
            }

            lastScrollY.current = currentScrollY;
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, [open]);

    useEffect(() => {
        if (!open) {
            return;
        }

        const previousOverflow = document.body.style.overflow;
        const previousFocus = document.activeElement;

        document.body.style.overflow = 'hidden';
        closeRef.current?.focus();

        const handleKeydown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setOpen(false);
                return;
            }

            if (event.key !== 'Tab' || !drawerRef.current) {
                return;
            }

            const focusableElements =
                drawerRef.current.querySelectorAll<HTMLElement>(
                    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
                );
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (event.shiftKey && document.activeElement === firstElement) {
                event.preventDefault();
                lastElement?.focus();
            } else if (
                !event.shiftKey &&
                document.activeElement === lastElement
            ) {
                event.preventDefault();
                firstElement?.focus();
            }
        };

        document.addEventListener('keydown', handleKeydown);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener('keydown', handleKeydown);

            if (previousFocus instanceof HTMLElement) {
                previousFocus.focus();
            }
        };
    }, [open]);

    useEffect(() => {
        const desktopViewport = window.matchMedia('(min-width: 1024px)');
        const closeOnDesktop = (event: MediaQueryListEvent) => {
            if (event.matches) {
                setOpen(false);
            }
        };

        desktopViewport.addEventListener('change', closeOnDesktop);

        return () =>
            desktopViewport.removeEventListener('change', closeOnDesktop);
    }, []);

    return (
        <>
            <header
                className={`sticky top-0 z-50 border-b bg-white transition-[transform,box-shadow,border-color] duration-300 focus-within:translate-y-0 motion-reduce:transition-none ${
                    isScrolled
                        ? 'border-balda-gold/35 shadow-[0_12px_32px_rgba(11,33,70,0.1)]'
                        : 'border-slate-200 shadow-none'
                } ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}
            >
                <div className="bg-balda-blue-deep text-white">
                    <div className="site-container flex min-h-11 items-center justify-between gap-3 text-xs sm:min-h-9">
                        <span className="hidden items-center gap-2 text-balda-blue-sky sm:inline-flex">
                            <MapPin
                                size={14}
                                className="text-balda-gold"
                                aria-hidden="true"
                            />
                            Kebayoran Baru, Jakarta Selatan
                        </span>
                        <div className="ml-auto flex items-center gap-4 sm:gap-5">
                            <a
                                href="tel:02172791208"
                                className="inline-flex min-h-11 items-center gap-2 font-semibold text-white transition-colors hover:text-balda-gold sm:min-h-9"
                            >
                                <Phone size={14} aria-hidden="true" />
                                021-7279 1208
                            </a>
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex min-h-11 items-center gap-2 font-bold text-balda-gold transition-colors hover:text-white sm:min-h-9"
                            >
                                <MessageCircle size={14} aria-hidden="true" />
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>

                <nav className="site-container" aria-label="Navigasi utama">
                    <div
                        className={`flex items-center justify-between gap-4 transition-[height] duration-300 motion-reduce:transition-none ${
                            isScrolled
                                ? 'h-[64px] sm:h-[66px]'
                                : 'h-[68px] sm:h-[78px]'
                        }`}
                    >
                        <Link
                            href="/"
                            className="flex min-h-11 shrink-0 items-center"
                            aria-label="Balda Haji dan Umrah, beranda"
                        >
                            <img
                                src="/images/balda_logo.png"
                                alt="Logo Balda Hajj & Umrah"
                                className={`w-auto object-contain transition-[height] duration-300 motion-reduce:transition-none ${
                                    isScrolled ? 'h-9 sm:h-10' : 'h-10 sm:h-12'
                                }`}
                                width="116"
                                height="80"
                            />
                        </Link>

                        <ul className="ml-auto hidden items-center gap-1 lg:flex">
                            {links.map((link) => {
                                const active = isActive(link.href);

                                return (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className={`relative inline-flex min-h-11 items-center px-3 text-sm font-semibold transition-colors after:absolute after:right-3 after:bottom-0 after:left-3 after:h-0.5 after:origin-left after:bg-balda-gold after:transition-transform after:duration-200 ${
                                                active
                                                    ? 'text-balda-blue-deep after:scale-x-100'
                                                    : 'text-slate-600 after:scale-x-0 hover:text-balda-blue hover:after:scale-x-100'
                                            }`}
                                            aria-current={
                                                active ? 'page' : undefined
                                            }
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        <Link
                            href="/kontak"
                            className="btn-gold hidden lg:inline-flex"
                        >
                            Konsultasi Paket
                            <ArrowRight size={16} aria-hidden="true" />
                        </Link>

                        <button
                            type="button"
                            onClick={() => setOpen(true)}
                            className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-slate-200 px-3 text-sm font-bold text-balda-blue-deep transition-colors hover:border-balda-blue-sky hover:bg-balda-blue-light lg:hidden"
                            aria-label="Buka menu"
                            aria-expanded={open}
                            aria-controls="menu-mobile"
                        >
                            <Menu size={20} aria-hidden="true" />
                            <span>Menu</span>
                        </button>
                    </div>
                </nav>
            </header>

            {open &&
                typeof document !== 'undefined' &&
                createPortal(
                    <div
                        id="menu-mobile"
                        ref={drawerRef}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Navigasi utama"
                        className="fixed inset-0 z-[100] lg:hidden"
                    >
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            tabIndex={-1}
                            className="absolute inset-0 h-full w-full bg-balda-blue-deep/70"
                            aria-label="Tutup menu"
                        />
                        <div className="absolute top-0 right-0 flex h-[100dvh] w-full flex-col bg-white shadow-[-24px_0_64px_rgba(11,33,70,0.28)] sm:max-w-sm">
                            <div className="flex min-h-[76px] shrink-0 items-center justify-between gap-4 border-b border-slate-200 px-5">
                                <Link
                                    href="/"
                                    onClick={() => setOpen(false)}
                                    className="inline-flex min-h-11 items-center"
                                    aria-label="Balda Haji dan Umrah, beranda"
                                >
                                    <img
                                        src="/images/balda_logo.png"
                                        alt="Logo Balda Hajj & Umrah"
                                        className="h-11 w-auto object-contain"
                                        width="116"
                                        height="80"
                                    />
                                </Link>
                                <button
                                    ref={closeRef}
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    className="inline-flex size-11 items-center justify-center rounded-lg border border-slate-200 text-balda-blue-deep transition-colors hover:border-balda-blue-sky hover:bg-balda-blue-light"
                                    aria-label="Tutup menu"
                                >
                                    <X size={20} aria-hidden="true" />
                                </button>
                            </div>

                            <Link
                                href="/kontak"
                                onClick={() => setOpen(false)}
                                className="mx-5 mt-5 flex min-h-14 shrink-0 items-center justify-between gap-4 rounded-xl bg-balda-blue px-5 font-extrabold text-white transition-colors hover:bg-balda-blue-dark"
                            >
                                Konsultasi Paket
                                <ArrowRight size={18} aria-hidden="true" />
                            </Link>

                            <nav
                                aria-label="Navigasi seluler"
                                className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-4"
                            >
                                <ul>
                                    {links.map((link) => {
                                        const active = isActive(link.href);

                                        return (
                                            <li
                                                key={link.href}
                                                className="border-b border-slate-200"
                                            >
                                                <Link
                                                    href={link.href}
                                                    onClick={() =>
                                                        setOpen(false)
                                                    }
                                                    className={`flex min-h-14 items-center justify-between gap-4 py-3 text-xl font-black tracking-[-0.025em] transition-colors ${
                                                        active
                                                            ? 'text-balda-blue'
                                                            : 'text-balda-blue-deep hover:text-balda-blue'
                                                    }`}
                                                    aria-current={
                                                        active
                                                            ? 'page'
                                                            : undefined
                                                    }
                                                >
                                                    {link.label}
                                                    {active && (
                                                        <span
                                                            className="size-2 rounded-full bg-balda-gold"
                                                            aria-hidden="true"
                                                        />
                                                    )}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                    <li className="border-b border-slate-200">
                                        <Link
                                            href="/kontak"
                                            onClick={() => setOpen(false)}
                                            className={`flex min-h-14 items-center justify-between gap-4 py-3 text-xl font-black tracking-[-0.025em] transition-colors ${
                                                isActive('/kontak')
                                                    ? 'text-balda-blue'
                                                    : 'text-balda-blue-deep hover:text-balda-blue'
                                            }`}
                                            aria-current={
                                                isActive('/kontak')
                                                    ? 'page'
                                                    : undefined
                                            }
                                        >
                                            Kontak
                                            {isActive('/kontak') && (
                                                <span
                                                    className="size-2 rounded-full bg-balda-gold"
                                                    aria-hidden="true"
                                                />
                                            )}
                                        </Link>
                                    </li>
                                </ul>
                            </nav>

                            <div className="grid shrink-0 gap-2 border-t border-slate-200 bg-slate-50 p-5 sm:grid-cols-2">
                                <a
                                    href="tel:02172791208"
                                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[10px] border border-slate-300 bg-white px-4 text-sm font-bold text-balda-blue-deep transition-colors hover:border-balda-blue"
                                >
                                    <Phone size={17} aria-hidden="true" />
                                    Telepon
                                </a>
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[10px] bg-balda-gold px-4 text-sm font-extrabold text-balda-blue-deep transition-colors hover:bg-[#e8ba00]"
                                >
                                    <MessageCircle
                                        size={17}
                                        aria-hidden="true"
                                    />
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>,
                    document.body,
                )}
        </>
    );
}
