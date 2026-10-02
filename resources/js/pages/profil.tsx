import { Head, Link } from '@inertiajs/react';
import { Check, ChevronRight, ShieldCheck } from 'lucide-react';
import PublicLayout from '@/layouts/public-layout';

const legalitas = [
    { label: 'Izin Departemen Agama', value: 'PHU/HK.3037/VIII/2009' },
    { label: 'Keanggotaan HIMPUH', value: '039/HIMPUH/2010' },
    { label: 'Izin Operasional PIHK', value: '1214 Tahun 2021' },
    { label: 'Izin Operasional PPIU', value: 'U.8 Tahun 2022' },
];

const misi = [
    'Memberikan pelayanan profesional dan amanah kepada setiap jamaah',
    'Menyediakan fasilitas yang mendukung kenyamanan beribadah',
    'Membangun kepercayaan jamaah melalui transparansi dan integritas',
    'Meningkatkan kualitas layanan secara berkelanjutan',
];

export default function Profil() {
    return (
        <PublicLayout>
            <Head>
                <title>Profil Perusahaan | Balda Haji dan Umrah</title>
                <meta
                    name="description"
                    content="Profil PT. Balda Citra Mandiri, penyelenggara Haji Khusus dan Umrah sejak 1996."
                />
            </Head>

            <section className="page-hero">
                <img
                    src="/images/20260611_home_web_2.jpg"
                    alt="Jamaah Balda di Masjidil Haram"
                    className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
                    width="1923"
                    height="554"
                    fetchPriority="high"
                />
                <div className="site-container flex min-h-[22rem] items-end py-12 sm:items-center sm:py-16">
                    <div>
                        <h1 className="page-hero-title">
                            PT. Balda Citra Mandiri
                        </h1>
                        <p className="page-hero-copy">
                            Penyelenggara perjalanan ibadah Haji Khusus dan
                            Umrah yang melayani jamaah sejak 1996.
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
                        Profil
                    </li>
                </ol>
            </nav>

            <section className="bg-white py-16 sm:py-24">
                <div className="site-container grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
                    <div>
                        <h2 className="section-title">
                            Pengalaman panjang, pendampingan tetap personal
                        </h2>
                        <div className="mt-7 max-w-2xl space-y-5 text-base leading-7 text-slate-600">
                            <p>
                                PT. Balda Citra Mandiri berdiri pada 1996
                                sebagai penyelenggara perjalanan ibadah Umrah.
                                Pada 2000, perusahaan memperoleh izin dari
                                Departemen Agama RI untuk menyelenggarakan
                                Perjalanan Ibadah Haji Khusus.
                            </p>
                            <p>
                                Pengalaman tersebut menjadi dasar Balda dalam
                                mengelola persiapan, perjalanan, dan
                                pendampingan jamaah dengan tujuan menjaga
                                kenyamanan beribadah.
                            </p>
                        </div>
                        <div className="mt-9 grid grid-cols-2 border-y border-slate-200 py-6">
                            <div className="border-r border-slate-200 pr-6">
                                <p className="text-sm font-semibold text-slate-500">
                                    Berdiri
                                </p>
                                <p className="mt-1 text-3xl font-black tracking-[-0.04em] text-balda-blue-deep">
                                    1996
                                </p>
                            </div>
                            <div className="pl-6">
                                <p className="text-sm font-semibold text-slate-500">
                                    Izin Haji Khusus sejak
                                </p>
                                <p className="mt-1 text-3xl font-black tracking-[-0.04em] text-balda-blue-deep">
                                    2000
                                </p>
                            </div>
                        </div>
                    </div>
                    <figure className="relative min-h-[28rem] overflow-hidden rounded-2xl bg-slate-100 shadow-[0_24px_60px_rgba(11,33,70,0.18)]">
                        <img
                            src="/images/DJI_20250425220346_0021_D-scaled.jpg"
                            alt="Tim Balda dalam kegiatan persiapan jamaah"
                            className="absolute inset-0 h-full w-full object-cover"
                            width="2560"
                            height="1802"
                            loading="lazy"
                        />
                    </figure>
                </div>
            </section>

            <section className="bg-balda-blue-deep py-16 text-white sm:py-20">
                <div className="site-container grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
                    <div>
                        <ShieldCheck
                            size={34}
                            className="text-balda-gold"
                            aria-hidden="true"
                        />
                        <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">
                            Izin dan legalitas perusahaan
                        </h2>
                        <p className="mt-4 max-w-lg leading-7 text-balda-blue-sky">
                            Nomor izin ditampilkan terbuka agar calon jamaah
                            dapat memeriksa identitas penyelenggara sebelum
                            berkonsultasi.
                        </p>
                    </div>
                    <dl className="grid gap-px overflow-hidden rounded-2xl bg-white/15 sm:grid-cols-2">
                        {legalitas.map((item) => (
                            <div
                                key={item.label}
                                className="bg-balda-blue-dark p-6 sm:p-7"
                            >
                                <dt className="text-sm font-semibold text-balda-blue-sky">
                                    {item.label}
                                </dt>
                                <dd className="mt-2 text-lg font-black break-words text-white">
                                    {item.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            <section className="bg-slate-50 py-16 sm:py-24">
                <div className="site-container grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
                    <article className="rounded-2xl bg-balda-gold p-7 text-balda-blue-deep sm:p-9">
                        <h2 className="text-3xl font-black tracking-[-0.03em]">
                            Visi
                        </h2>
                        <p className="mt-5 text-base leading-7">
                            Menjadi penyelenggara perjalanan ibadah Haji dan
                            Umrah yang terdepan, terpercaya, dan memberikan
                            pelayanan terbaik bagi setiap jamaah.
                        </p>
                    </article>
                    <article className="rounded-2xl bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.07)] sm:p-9">
                        <h2 className="text-3xl font-black tracking-[-0.03em] text-balda-blue-deep">
                            Misi
                        </h2>
                        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                            {misi.map((item) => (
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
                    </article>
                </div>
            </section>
        </PublicLayout>
    );
}
