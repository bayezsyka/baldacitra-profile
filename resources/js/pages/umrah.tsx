import { Head, Link } from '@inertiajs/react';
import { CalendarDays, Check, ChevronRight, Plane, Phone } from 'lucide-react';
import PublicLayout from '@/layouts/public-layout';

const paketList = [
    {
        title: 'Umrah Reguler 9 Hari',
        tanggal: '24 Oktober 2026',
        img: '/images/2026-10-24-scaled.jpg',
        maskapai: 'Saudia Airlines',
        harga: 'Mulai Rp40,5 juta',
        status: 'Pendaftaran',
        href: '/kontak?paket=Umrah%20Reguler%2024%20Oktober%202026',
        highlights: [
            'Rute Madinah dan Jeddah',
            'Haramain Express Madinah-Makkah',
            'Worth Peninsula Hotel, Madinah',
            'Jumeirah Hotel, Makkah',
        ],
    },
    {
        title: 'Umrah 12 Hari',
        tanggal: '11-22 November 2026',
        img: '/images/2026-11-21-Update3-scaled.jpg',
        maskapai: 'Saudia Airlines',
        harga: 'Mulai Rp48,5 juta',
        status: 'Pendaftaran',
        href: '/kontak?paket=Umrah%2012%20Hari%20November%202026',
        highlights: [
            'Tiket pesawat internasional',
            'Visa dan asuransi perjalanan',
            'Akomodasi serta makan prasmanan tiga kali sehari',
            'Koper dan perlengkapan Umrah',
        ],
    },
    {
        title: 'Umrah Reguler 12 Hari',
        tanggal: '24 Desember 2026',
        img: '/images/2026-12-24-Tentatif-Koreksi-Kecil-scaled.jpg',
        maskapai: 'Garuda Indonesia',
        harga: 'Mulai USD 3.800',
        status: 'Tentatif',
        href: '/kontak?paket=Umrah%20Reguler%2024%20Desember%202026',
        highlights: [
            'Rute Jeddah dan Madinah',
            'Haramain Express Makkah-Madinah',
            'Makkah Hotel atau Rotana',
            'Worth Peninsula atau Al Haram Hotel, Madinah',
        ],
    },
];

export default function Umrah() {
    return (
        <PublicLayout>
            <Head>
                <title>Paket Umrah | Balda Haji dan Umrah Indonesia</title>
                <meta
                    name="description"
                    content="Jadwal dan pilihan paket Umrah PT. Balda Citra Mandiri dengan keberangkatan Oktober, November, dan Desember 2026."
                />
            </Head>

            <section className="page-hero">
                <img
                    src="/images/IMG-20260530-WA0216-scaled.jpg"
                    alt="Jamaah Balda mengikuti pembekalan perjalanan Umrah"
                    className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
                    width="2560"
                    height="1920"
                    fetchPriority="high"
                />
                <div className="site-container flex min-h-[22rem] items-end py-12 sm:items-center sm:py-16">
                    <div>
                        <h1 className="page-hero-title">Paket Umrah</h1>
                        <p className="page-hero-copy">
                            Jadwal keberangkatan, pilihan maskapai, akomodasi,
                            dan biaya paket dalam satu informasi yang mudah
                            dibandingkan.
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
                        Paket Umrah
                    </li>
                </ol>
            </nav>

            <section className="bg-slate-50 py-14 sm:py-20">
                <div className="site-container">
                    <div className="mb-10 grid gap-5 lg:grid-cols-[1fr_0.65fr] lg:items-end">
                        <h2 className="section-title">
                            Pilih jadwal yang sesuai dengan rencana Anda
                        </h2>
                        <p className="max-w-xl text-base leading-7 text-slate-600 lg:justify-self-end">
                            Ketersediaan kursi dan tipe kamar dapat berubah. Tim
                            Balda akan mengonfirmasi rincian terbaru saat
                            konsultasi.
                        </p>
                    </div>

                    <div className="space-y-7">
                        {paketList.map((paket) => (
                            <article
                                key={paket.title + paket.tanggal}
                                className="card grid md:grid-cols-[minmax(18rem,0.72fr)_1fr] lg:grid-cols-[22rem_1fr]"
                            >
                                <div className="bg-balda-blue-light">
                                    <img
                                        src={paket.img}
                                        alt={`Poster ${paket.title}, keberangkatan ${paket.tanggal}`}
                                        className="h-full max-h-[38rem] w-full object-contain"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                                    <div>
                                        <p
                                            className={`mb-3 text-sm font-bold ${paket.status === 'Tentatif' ? 'text-amber-700' : 'text-balda-blue'}`}
                                        >
                                            {paket.status}
                                        </p>
                                        <h2 className="text-3xl font-black tracking-[-0.035em] text-balda-blue-deep">
                                            {paket.title}
                                        </h2>
                                        <div className="mt-5 grid gap-4 border-y border-slate-200 py-5 sm:grid-cols-2">
                                            <div className="flex items-start gap-3">
                                                <CalendarDays
                                                    size={19}
                                                    className="mt-0.5 shrink-0 text-balda-blue"
                                                    aria-hidden="true"
                                                />
                                                <div>
                                                    <p className="text-xs font-semibold text-slate-500">
                                                        Keberangkatan
                                                    </p>
                                                    <p className="mt-1 font-bold text-slate-900">
                                                        {paket.tanggal}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <Plane
                                                    size={19}
                                                    className="mt-0.5 shrink-0 text-balda-blue"
                                                    aria-hidden="true"
                                                />
                                                <div>
                                                    <p className="text-xs font-semibold text-slate-500">
                                                        Maskapai
                                                    </p>
                                                    <p className="mt-1 font-bold text-slate-900">
                                                        {paket.maskapai}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <h3 className="mt-6 text-base font-extrabold text-slate-950">
                                            Rincian utama
                                        </h3>
                                        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                                            {paket.highlights.map((item) => (
                                                <li
                                                    key={item}
                                                    className="flex items-start gap-2.5 text-sm leading-6 text-slate-700"
                                                >
                                                    <Check
                                                        size={17}
                                                        strokeWidth={2.5}
                                                        className="mt-0.5 shrink-0 text-balda-blue"
                                                        aria-hidden="true"
                                                    />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-8 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
                                        <div>
                                            <p className="text-xs font-semibold text-slate-500">
                                                Biaya per jamaah
                                            </p>
                                            <p className="mt-1 text-xl font-black text-balda-blue-deep">
                                                {paket.harga}
                                            </p>
                                        </div>
                                        <Link
                                            href={paket.href}
                                            className="btn-primary sm:min-w-48"
                                        >
                                            Konsultasikan Paket
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-balda-blue-deep py-14 text-white">
                <div className="site-container flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <h2 className="text-3xl font-black tracking-[-0.03em] text-white">
                            Perlu membandingkan pilihan paket?
                        </h2>
                        <p className="mt-3 text-balda-blue-sky">
                            Sampaikan kebutuhan tanggal, jumlah jamaah, dan
                            pilihan kamar kepada tim Balda.
                        </p>
                    </div>
                    <a
                        href="tel:02172791208"
                        className="btn-gold self-start lg:self-auto"
                    >
                        <Phone size={18} aria-hidden="true" /> Hubungi 021-7279
                        1208
                    </a>
                </div>
            </section>
        </PublicLayout>
    );
}
