import { Head, Link } from '@inertiajs/react';
import {
    CalendarDays,
    Check,
    ChevronRight,
    Clock,
    Phone,
    ShieldCheck,
} from 'lucide-react';
import PublicLayout from '@/layouts/public-layout';

const fasilitas = [
    'Hotel bintang lima dalam jarak berjalan kaki dari Masjidil Haram dan Masjid Nabawi',
    'Penerbangan langsung dengan maskapai terpilih',
    'Pembimbing ibadah dan dokter pendamping',
    'Konsumsi tiga kali sehari dengan menu Indonesia',
    'Manasik haji sebelum keberangkatan',
    'Perlengkapan haji dan asuransi perjalanan',
    'Ziarah ke tempat bersejarah Islam',
];

const galeriHaji = [
    {
        src: '/images/DJI_20250425220346_0021_D-scaled.jpg',
        alt: 'Kegiatan persiapan jamaah Balda',
        className: 'col-span-2 h-64 sm:h-80',
    },
    {
        src: '/images/IMG-20260515-WA0009.jpg',
        alt: 'Dokumentasi pendampingan jamaah Balda',
        className: 'h-44 sm:h-52',
    },
    {
        src: '/images/20260404_202338-scaled.jpg',
        alt: 'Jamaah Balda dalam perjalanan ibadah',
        className: 'h-44 sm:h-52',
    },
];

export default function Haji() {
    return (
        <PublicLayout>
            <Head>
                <title>Haji Khusus | Balda Haji dan Umrah</title>
                <meta
                    name="description"
                    content="Program Haji Khusus PT. Balda Citra Mandiri dengan izin operasional PIHK 1214 Tahun 2021."
                />
            </Head>

            <section className="page-hero">
                <img
                    src="/images/DJI_20250425220346_0021_D-scaled.jpg"
                    alt="Kegiatan persiapan jamaah Haji Balda"
                    className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
                    width="2560"
                    height="1802"
                    fetchPriority="high"
                />
                <div className="site-container flex min-h-[22rem] items-end py-12 sm:items-center sm:py-16">
                    <div>
                        <h1 className="page-hero-title">Haji Khusus</h1>
                        <p className="page-hero-copy">
                            Persiapan yang terarah, fasilitas perjalanan yang
                            jelas, dan pendampingan ibadah selama rangkaian
                            Haji.
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
                        Haji Khusus
                    </li>
                </ol>
            </nav>

            <section className="bg-white py-16 sm:py-24">
                <div className="site-container grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
                    <div>
                        <h2 className="section-title">
                            Pendampingan sejak persiapan hingga kembali ke tanah
                            air
                        </h2>
                        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600">
                            Balda memperoleh izin penyelenggaraan Haji Khusus
                            dari Departemen Agama RI pada 2000. Pengalaman
                            tersebut digunakan untuk mengelola manasik,
                            perjalanan, akomodasi, dan pendampingan jamaah.
                        </p>

                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            <div className="flex items-start gap-3 border-y border-slate-200 py-4">
                                <CalendarDays
                                    size={20}
                                    className="mt-0.5 shrink-0 text-balda-blue"
                                    aria-hidden="true"
                                />
                                <div>
                                    <p className="text-xs font-semibold text-slate-500">
                                        Program
                                    </p>
                                    <p className="mt-1 font-black text-balda-blue-deep">
                                        Haji Khusus
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 border-y border-slate-200 py-4">
                                <Clock
                                    size={20}
                                    className="mt-0.5 shrink-0 text-balda-blue"
                                    aria-hidden="true"
                                />
                                <div>
                                    <p className="text-xs font-semibold text-slate-500">
                                        Durasi program
                                    </p>
                                    <p className="mt-1 font-black text-balda-blue-deep">
                                        Sekitar 26 hari
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h3 className="mt-9 text-xl font-black text-slate-950">
                            Fasilitas program
                        </h3>
                        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                            {fasilitas.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                                >
                                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md bg-balda-blue-light text-balda-blue">
                                        <Check
                                            size={16}
                                            strokeWidth={2.5}
                                            aria-hidden="true"
                                        />
                                    </span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <div className="grid grid-cols-2 gap-3">
                            {galeriHaji.map((item) => (
                                <figure
                                    key={item.src}
                                    className={`overflow-hidden rounded-2xl bg-slate-100 ${item.className}`}
                                >
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        className="h-full w-full object-cover"
                                        loading="lazy"
                                    />
                                </figure>
                            ))}
                        </div>
                        <div className="mt-5 rounded-2xl bg-balda-blue-deep p-6 text-white sm:p-8">
                            <h3 className="text-2xl font-black tracking-[-0.025em] text-white">
                                Konsultasi program Haji Khusus
                            </h3>
                            <p className="mt-3 text-sm leading-6 text-balda-blue-sky">
                                Tanyakan jadwal, estimasi masa tunggu,
                                fasilitas, dan proses pendaftaran kepada tim
                                Balda.
                            </p>
                            <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                <a href="tel:02172791208" className="btn-gold">
                                    <Phone size={17} aria-hidden="true" />{' '}
                                    Telepon Balda
                                </a>
                                <Link
                                    href="/kontak?paket=Haji%20Khusus"
                                    className="btn-outline"
                                >
                                    Kirim Pertanyaan
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-balda-blue-light py-14 sm:py-18">
                <div className="site-container grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
                    <div>
                        <ShieldCheck
                            size={32}
                            className="text-balda-blue"
                            aria-hidden="true"
                        />
                        <h2 className="mt-4 text-3xl font-black tracking-[-0.03em] text-balda-blue-deep">
                            Legalitas penyelenggara
                        </h2>
                    </div>
                    <dl className="grid gap-px overflow-hidden rounded-2xl bg-balda-blue/15 sm:grid-cols-3">
                        {[
                            ['Izin Operasional PIHK', '1214 Tahun 2021'],
                            ['Izin Departemen Agama', 'PHU/HK.3037/VIII/2009'],
                            ['Anggota HIMPUH', '039/HIMPUH/2010'],
                        ].map(([label, value]) => (
                            <div key={label} className="bg-white p-6">
                                <dt className="text-xs font-semibold text-slate-500">
                                    {label}
                                </dt>
                                <dd className="mt-2 font-black break-words text-balda-blue-deep">
                                    {value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>
        </PublicLayout>
    );
}
