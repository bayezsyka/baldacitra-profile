import { useEffect, useRef, useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { ChevronRight, X } from 'lucide-react';
import PublicLayout from '@/layouts/public-layout';

const categories = ['Semua', 'Umrah', 'Haji', 'Kegiatan Sosial'];

const galeri = [
    {
        src: '/images/20260611_home_web_1.jpg',
        cat: 'Umrah',
        label: 'Rangkaian ibadah jamaah Balda',
    },
    {
        src: '/images/20260611_home_web_2.jpg',
        cat: 'Umrah',
        label: 'Jamaah Balda di Masjidil Haram',
    },
    {
        src: '/images/20260611_home_web_3.jpg',
        cat: 'Umrah',
        label: 'Momen perjalanan bersama jamaah',
    },
    {
        src: '/images/DJI_20250425220346_0021_D-scaled.jpg',
        cat: 'Haji',
        label: 'Kegiatan persiapan jamaah Haji',
    },
    {
        src: '/images/IMG-20260530-WA0216-scaled.jpg',
        cat: 'Umrah',
        label: 'Pembekalan perjalanan jamaah',
    },
    {
        src: '/images/IMG-20260530-WA0172-scaled.jpg',
        cat: 'Umrah',
        label: 'Jamaah Balda di Tanah Suci',
    },
    {
        src: '/images/IMG-20260515-WA0009.jpg',
        cat: 'Umrah',
        label: 'Dokumentasi perjalanan jamaah',
    },
    {
        src: '/images/IMG-20260513-WA0061.jpg',
        cat: 'Umrah',
        label: 'Momen bersama jamaah Balda',
    },
    {
        src: '/images/IMG-20260513-WA0060.jpg',
        cat: 'Umrah',
        label: 'Kegiatan jamaah Balda',
    },
    {
        src: '/images/20260404_202338-scaled.jpg',
        cat: 'Umrah',
        label: 'Perjalanan Umrah April 2026',
    },
    {
        src: '/images/Umrah_15Ags26.jpg',
        cat: 'Umrah',
        label: 'Umrah Agustus 2026',
    },
    {
        src: '/images/Umrah_15Ags26_Berangkat.jpg',
        cat: 'Umrah',
        label: 'Pemberangkatan Umrah Agustus 2026',
    },
    {
        src: '/images/Umrah_15Ags26-1.jpg',
        cat: 'Umrah',
        label: 'Jamaah Umrah Agustus 2026',
    },
    {
        src: '/images/Pembagian-Takjil-Ramadhan-2026.jpg',
        cat: 'Kegiatan Sosial',
        label: 'Pembagian takjil Ramadhan 2026',
    },
    {
        src: '/images/Sumbangan-Bencana-Sumatera.jpg',
        cat: 'Kegiatan Sosial',
        label: 'Penyerahan bantuan bencana Sumatera',
    },
    {
        src: '/images/WhatsApp-Image-2025-08-22-at-12.55.18.jpeg',
        cat: 'Umrah',
        label: 'Umrah Agustus 2025',
    },
    {
        src: '/images/WhatsApp-Image-2025-09-26-at-12.48.23-2.jpeg',
        cat: 'Umrah',
        label: 'Umrah September 2025',
    },
    {
        src: '/images/WhatsApp-Image-2025-10-17-at-14.17.24.jpeg',
        cat: 'Umrah',
        label: 'Umrah Oktober 2025',
    },
];

type GalleryItem = (typeof galeri)[number];

export default function Galeri() {
    const [active, setActive] = useState('Semua');
    const [lightbox, setLightbox] = useState<GalleryItem | null>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const triggerButtonRef = useRef<HTMLButtonElement | null>(null);

    const filtered =
        active === 'Semua'
            ? galeri
            : galeri.filter((item) => item.cat === active);

    useEffect(() => {
        if (!lightbox) {
            return;
        }

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        closeButtonRef.current?.focus();

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setLightbox(null);
            }

            if (event.key === 'Tab') {
                event.preventDefault();
                closeButtonRef.current?.focus();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener('keydown', handleKeyDown);
            triggerButtonRef.current?.focus();
        };
    }, [lightbox]);

    return (
        <PublicLayout>
            <Head>
                <title>Galeri Perjalanan | Balda Haji dan Umrah</title>
                <meta
                    name="description"
                    content="Dokumentasi perjalanan ibadah Haji, Umrah, dan kegiatan sosial PT. Balda Citra Mandiri."
                />
            </Head>

            <section className="page-hero">
                <img
                    src="/images/20260611_home_web_1.jpg"
                    alt="Dokumentasi perjalanan jamaah Balda"
                    className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
                    width="1923"
                    height="554"
                    fetchPriority="high"
                />
                <div className="site-container flex min-h-[22rem] items-end py-12 sm:items-center sm:py-16">
                    <div>
                        <h1 className="page-hero-title">Galeri Perjalanan</h1>
                        <p className="page-hero-copy">
                            Dokumentasi jamaah, perjalanan ibadah, dan kegiatan
                            sosial Balda.
                        </p>
                    </div>
                </div>
            </section>

            <nav
                aria-label="Breadcrumb"
                className="border-b border-slate-200 bg-white"
            >
                <ol className="site-container flex items-center gap-2">
                    <li>
                        <Link href="/" className="breadcrumb-link">
                            Beranda
                        </Link>
                    </li>
                    <li aria-hidden="true">
                        <ChevronRight size={15} className="text-slate-400" />
                    </li>
                    <li
                        className="text-sm font-bold text-slate-900"
                        aria-current="page"
                    >
                        Galeri
                    </li>
                </ol>
            </nav>

            <section className="bg-slate-50 py-12 sm:py-16">
                <div className="site-container">
                    <div
                        className="mb-8 flex flex-wrap gap-2"
                        aria-label="Filter galeri"
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                type="button"
                                onClick={() => setActive(category)}
                                className={`min-h-11 rounded-lg border px-4 text-sm font-bold transition-colors ${
                                    active === category
                                        ? 'border-balda-blue-deep bg-balda-blue-deep text-white'
                                        : 'border-slate-300 bg-white text-slate-700 hover:border-balda-blue hover:text-balda-blue'
                                }`}
                                aria-pressed={active === category}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {filtered.length > 0 ? (
                        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
                            {filtered.map((item) => (
                                <button
                                    key={item.src}
                                    type="button"
                                    onClick={(event) => {
                                        triggerButtonRef.current =
                                            event.currentTarget;
                                        setLightbox(item);
                                    }}
                                    className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl bg-slate-200 text-left shadow-[0_12px_32px_rgba(15,23,42,0.08)]"
                                    aria-label={`Buka foto: ${item.label}`}
                                >
                                    <img
                                        src={item.src}
                                        alt=""
                                        className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.02]"
                                        loading="lazy"
                                    />
                                    <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-balda-blue-deep/95 via-balda-blue-deep/70 to-transparent px-4 pt-12 pb-4 text-sm leading-5 font-bold text-white">
                                        {item.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
                            <p className="font-bold text-slate-900">
                                Belum ada foto untuk kategori ini.
                            </p>
                            <button
                                type="button"
                                onClick={() => setActive('Semua')}
                                className="mt-4 min-h-11 font-bold text-balda-blue underline underline-offset-4"
                            >
                                Tampilkan semua foto
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {lightbox && (
                <div
                    className="fixed inset-0 z-[80] flex items-center justify-center bg-balda-blue-deep/95 p-4 sm:p-8"
                    role="dialog"
                    aria-modal="true"
                    aria-label={lightbox.label}
                    onMouseDown={(event) => {
                        if (event.currentTarget === event.target) {
                            setLightbox(null);
                        }
                    }}
                >
                    <button
                        ref={closeButtonRef}
                        type="button"
                        onClick={() => setLightbox(null)}
                        className="absolute top-4 right-4 flex size-11 items-center justify-center rounded-lg bg-white text-balda-blue-deep transition-colors hover:bg-balda-gold sm:top-6 sm:right-6"
                        aria-label="Tutup foto"
                    >
                        <X size={23} aria-hidden="true" />
                    </button>
                    <figure className="flex max-h-[85vh] max-w-6xl flex-col items-center gap-4">
                        <img
                            src={lightbox.src}
                            alt={lightbox.label}
                            className="max-h-[78vh] max-w-full rounded-xl object-contain shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
                        />
                        <figcaption className="text-center text-sm font-semibold text-white">
                            {lightbox.label}
                        </figcaption>
                    </figure>
                </div>
            )}
        </PublicLayout>
    );
}
