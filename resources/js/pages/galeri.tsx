import { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { ChevronRight, X } from 'lucide-react';
import PublicLayout from '@/layouts/public-layout';

const categories = ['Semua', 'Umrah 2026', 'Haji 2025/2026', 'Kegiatan Sosial'];

const galeri = [
    { src: '/images/20260611_home_web_1.jpg', cat: 'Umrah 2026', label: 'Keberangkatan Umrah Agustus 2026' },
    { src: '/images/20260611_home_web_2.jpg', cat: 'Umrah 2026', label: 'Jamaah di Masjidil Haram' },
    { src: '/images/20260611_home_web_3.jpg', cat: 'Umrah 2026', label: 'Momen Umrah 2026' },
    { src: '/images/DJI_20250425220346_0021_D-scaled.jpg', cat: 'Haji 2025/2026', label: 'Padang Arafah - Haji 2025' },
    { src: '/images/IMG-20260530-WA0216-scaled.jpg', cat: 'Umrah 2026', label: 'Perjalanan Umrah Juni 2026' },
    { src: '/images/IMG-20260530-WA0172-scaled.jpg', cat: 'Umrah 2026', label: 'Jamaah Balda di Tanah Suci' },
    { src: '/images/IMG-20260515-WA0009.jpg', cat: 'Umrah 2026', label: 'Ziarah Madinah' },
    { src: '/images/IMG-20260513-WA0061.jpg', cat: 'Umrah 2026', label: 'Momen Bersama Jamaah' },
    { src: '/images/IMG-20260513-WA0060.jpg', cat: 'Umrah 2026', label: 'Suasana di Masjid Nabawi' },
    { src: '/images/20260404_202338-scaled.jpg', cat: 'Umrah 2026', label: 'Umrah April 2026' },
    { src: '/images/Umrah_15Ags26.jpg', cat: 'Umrah 2026', label: 'Umrah 15 Agustus 2026' },
    { src: '/images/Umrah_15Ags26_Berangkat.jpg', cat: 'Umrah 2026', label: 'Pemberangkatan Agustus 2026' },
    { src: '/images/Umrah_15Ags26-1.jpg', cat: 'Umrah 2026', label: 'Jamaah Umrah Agustus 2026' },
    { src: '/images/Pembagian-Takjil-Ramadhan-2026.jpg', cat: 'Kegiatan Sosial', label: 'Bagi Takjil Ramadhan 2026' },
    { src: '/images/Sumbangan-Bencana-Sumatera.jpg', cat: 'Kegiatan Sosial', label: 'Bantuan Bencana Sumatera' },
    { src: '/images/WhatsApp-Image-2025-08-22-at-12.55.18.jpeg', cat: 'Umrah 2026', label: 'Umrah Agustus 2025' },
    { src: '/images/WhatsApp-Image-2025-09-26-at-12.48.23-2.jpeg', cat: 'Umrah 2026', label: 'Umrah September 2025' },
    { src: '/images/WhatsApp-Image-2025-10-17-at-14.17.24.jpeg', cat: 'Umrah 2026', label: 'Umrah Oktober 2025' },
];

export default function Galeri() {
    const [active, setActive] = useState('Semua');
    const [lightbox, setLightbox] = useState<string | null>(null);

    const filtered = active === 'Semua' ? galeri : galeri.filter((g) => g.cat === active);

    return (
        <PublicLayout>
            <Head>
                <title>Galeri Perjalanan – Balda Haji & Umrah</title>
                <meta
                    name="description"
                    content="Dokumentasi perjalanan ibadah Haji dan Umrah serta kegiatan sosial PT. Balda Citra Mandiri."
                />
            </Head>

            <div className="pt-16">
                {/* Hero */}
                <div className="relative h-64 overflow-hidden">
                    <img
                        src="/images/IMG-20260530-WA0216-scaled.jpg"
                        alt="Galeri"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-green-950/75" />
                    <div
                        className="relative h-full flex flex-col items-center justify-center text-white text-center px-4"
                        data-aos="fade-up"
                    >
                        <p className="section-tag text-amber-400 mb-2">Dokumentasi</p>
                        <h1 className="text-3xl md:text-4xl font-serif font-bold">Galeri Perjalanan</h1>
                    </div>
                </div>

                {/* Breadcrumb */}
                <div className="bg-stone-50 border-b border-stone-100">
                    <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-2 text-sm text-stone-500">
                        <Link href="/" className="hover:text-green-800 transition-colors">
                            Beranda
                        </Link>
                        <ChevronRight size={14} />
                        <span className="text-stone-800 font-medium">Galeri</span>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Filter */}
                    <div className="flex flex-wrap gap-2 mb-8 justify-center" data-aos="fade-up">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActive(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors cursor-pointer ${
                                    active === cat
                                        ? 'bg-green-900 text-white'
                                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
                        {filtered.map((item, i) => (
                            <div
                                key={i}
                                onClick={() => setLightbox(item.src)}
                                className="relative overflow-hidden rounded-xl cursor-pointer group break-inside-avoid shadow-sm"
                                data-aos="zoom-in"
                                data-aos-delay={(i % 6) * 50}
                            >
                                <img
                                    src={item.src}
                                    alt={item.label}
                                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end p-3">
                                    <p className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity leading-tight">
                                        {item.label}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Lightbox */}
                {lightbox && (
                    <div
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
                        onClick={() => setLightbox(null)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors p-2"
                            aria-label="Close preview"
                        >
                            <X size={28} />
                        </button>
                        <div
                            className="relative max-w-4xl w-full max-h-[85vh] flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={lightbox}
                                alt="Preview"
                                className="object-contain max-w-full max-h-[85vh] rounded-lg shadow-2xl"
                            />
                        </div>
                    </div>
                )}
            </div>
        </PublicLayout>
    );
}
