import { Head, Link } from '@inertiajs/react';
import { Building2, CalendarDays, Check, Phone } from 'lucide-react';
import PublicLayout from '@/layouts/public-layout';

const paket = [
    {
        title: 'Umrah Reguler 9 Hari',
        tanggal: '24 Oktober 2026',
        maskapai: 'Saudia Airlines',
        harga: 'Mulai Rp40,5 juta',
        img: '/images/2026-10-24-scaled.jpg',
        href: '/kontak?paket=Umrah%20Reguler%2024%20Oktober%202026',
        className: 'lg:col-span-7',
    },
    {
        title: 'Umrah 12 Hari',
        tanggal: '11-22 November 2026',
        maskapai: 'Saudia Airlines',
        harga: 'Mulai Rp48,5 juta',
        img: '/images/2026-11-21-Update3-scaled.jpg',
        href: '/kontak?paket=Umrah%2012%20Hari%20November%202026',
        className: 'lg:col-span-5',
    },
    {
        title: 'Umrah Reguler 12 Hari',
        tanggal: '24 Desember 2026',
        maskapai: 'Garuda Indonesia',
        harga: 'Mulai USD 3.800',
        img: '/images/2026-12-24-Tentatif-Koreksi-Kecil-scaled.jpg',
        href: '/kontak?paket=Umrah%20Reguler%2024%20Desember%202026',
        note: 'Jadwal tentatif',
        className: 'lg:col-span-12',
    },
];

const galeri = [
    {
        src: '/images/20260611_home_web_1.jpg',
        alt: 'Jamaah Balda mengikuti rangkaian ibadah bersama',
        className: 'col-span-2 md:col-span-7 md:row-span-2',
    },
    {
        src: '/images/IMG-20260530-WA0216-scaled.jpg',
        alt: 'Jamaah Balda dalam kegiatan pembekalan',
        className: 'md:col-span-5',
    },
    {
        src: '/images/IMG-20260513-WA0060.jpg',
        alt: 'Dokumentasi perjalanan jamaah Balda',
        className: 'md:col-span-5',
    },
];

const layanan = [
    'Izin resmi PIHK 1214 Tahun 2021 dan PPIU U.8 Tahun 2022',
    'Anggota HIMPUH nomor 039/HIMPUH/2010',
    'Pendampingan dari manasik hingga jamaah kembali ke tanah air',
    'Pilihan program Umrah serta layanan Haji Khusus',
];

export default function Home() {
    return (
        <PublicLayout>
            <Head>
                <title>Balda | Haji Khusus dan Umrah Indonesia</title>
                <meta
                    name="description"
                    content="PT. Balda Citra Mandiri, penyelenggara perjalanan ibadah Haji Khusus dan Umrah sejak 1996. Berizin Kemenag RI dan anggota HIMPUH."
                />
            </Head>

            <section className="relative isolate min-h-[39rem] overflow-hidden bg-balda-blue-deep text-white sm:min-h-[43rem]">
                <img
                    src="/images/20260611_home_web_2.jpg"
                    alt="Jamaah Balda di Masjidil Haram"
                    className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
                    width="1923"
                    height="554"
                    fetchPriority="high"
                />
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(4,17,40,0.97)_0%,rgba(11,33,70,0.9)_44%,rgba(11,33,70,0.32)_100%)]" />
                <div className="site-container flex min-h-[39rem] items-end py-16 sm:min-h-[43rem] sm:items-center sm:py-24">
                    <div className="max-w-3xl">
                        <p className="mb-5 text-sm font-bold text-balda-gold">
                            PT. Balda Citra Mandiri
                        </p>
                        <h1 className="max-w-3xl text-5xl leading-[0.98] font-black tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                            Perjalanan ibadah dengan pendampingan yang nyata.
                        </h1>
                        <p className="mt-6 max-w-xl text-base leading-7 text-balda-blue-sky sm:text-lg">
                            Balda melayani perjalanan Haji Khusus dan Umrah
                            sejak 1996, dengan legalitas yang jelas dan tim yang
                            mendampingi jamaah sejak persiapan hingga kembali ke
                            tanah air.
                        </p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link href="/umrah" className="btn-gold sm:w-auto">
                                Lihat Jadwal Umrah
                            </Link>
                            <Link
                                href="/kontak"
                                className="btn-outline sm:w-auto"
                            >
                                Konsultasi Perjalanan
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section
                aria-label="Legalitas Balda"
                className="border-b border-slate-200 bg-white"
            >
                <div className="site-container grid divide-y divide-slate-200 md:grid-cols-4 md:divide-x md:divide-y-0">
                    {[
                        ['Sejak', '1996'],
                        ['Izin PIHK', '1214 / 2021'],
                        ['Izin PPIU', 'U.8 / 2022'],
                        ['Anggota HIMPUH', '039 / 2010'],
                    ].map(([label, value]) => (
                        <div
                            key={label}
                            className="px-0 py-5 first:pl-0 last:pr-0 md:px-6 md:py-7"
                        >
                            <p className="text-xs font-bold text-slate-500">
                                {label}
                            </p>
                            <p className="mt-1 text-lg font-black tracking-[-0.02em] text-balda-blue-deep">
                                {value}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-slate-50 py-16 sm:py-24">
                <div className="site-container">
                    <div className="mb-10 grid gap-5 lg:grid-cols-[1fr_0.7fr] lg:items-end">
                        <h2 className="section-title">
                            Jadwal Umrah yang dapat dikonsultasikan
                        </h2>
                        <p className="max-w-xl text-base leading-7 text-slate-600 lg:justify-self-end">
                            Pilih jadwal yang sesuai, lalu hubungi tim Balda
                            untuk memastikan ketersediaan, tipe kamar, dan
                            persyaratan keberangkatan.
                        </p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-12">
                        {paket.map((item, index) => (
                            <article
                                key={item.title + item.tanggal}
                                className={`card group grid min-w-0 md:grid-cols-[minmax(15rem,0.8fr)_1fr] ${item.className}`}
                            >
                                <div
                                    className={`bg-balda-blue-light ${index === 2 ? 'md:max-h-[27rem]' : ''}`}
                                >
                                    <img
                                        src={item.img}
                                        alt={`Poster ${item.title}, keberangkatan ${item.tanggal}`}
                                        className="h-full max-h-[34rem] w-full object-contain"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="flex flex-col justify-between p-6 sm:p-8">
                                    <div>
                                        {item.note && (
                                            <p className="mb-3 text-sm font-bold text-amber-700">
                                                {item.note}
                                            </p>
                                        )}
                                        <h3 className="text-2xl font-black tracking-[-0.03em] text-balda-blue-deep">
                                            {item.title}
                                        </h3>
                                        <dl className="mt-5 space-y-3 text-sm">
                                            <div className="flex items-start gap-3">
                                                <CalendarDays
                                                    size={18}
                                                    className="mt-0.5 shrink-0 text-balda-blue"
                                                    aria-hidden="true"
                                                />
                                                <div>
                                                    <dt className="text-slate-500">
                                                        Keberangkatan
                                                    </dt>
                                                    <dd className="font-bold text-slate-900">
                                                        {item.tanggal}
                                                    </dd>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <Building2
                                                    size={18}
                                                    className="mt-0.5 shrink-0 text-balda-blue"
                                                    aria-hidden="true"
                                                />
                                                <div>
                                                    <dt className="text-slate-500">
                                                        Maskapai
                                                    </dt>
                                                    <dd className="font-bold text-slate-900">
                                                        {item.maskapai}
                                                    </dd>
                                                </div>
                                            </div>
                                        </dl>
                                    </div>
                                    <div className="mt-8 border-t border-slate-200 pt-5">
                                        <p className="text-xs font-semibold text-slate-500">
                                            Biaya per jamaah
                                        </p>
                                        <p className="mt-1 text-lg font-black text-balda-blue-deep">
                                            {item.harga}
                                        </p>
                                        <Link
                                            href={item.href}
                                            className="btn-primary mt-5 w-full"
                                        >
                                            Konsultasikan Paket
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                    <div className="mt-8 flex justify-start">
                        <Link
                            href="/umrah"
                            className="inline-flex min-h-11 items-center font-bold text-balda-blue underline decoration-balda-gold decoration-2 underline-offset-8"
                        >
                            Lihat rincian seluruh paket Umrah
                        </Link>
                    </div>
                </div>
            </section>

            <section className="bg-white py-16 sm:py-24">
                <div className="site-container grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
                    <div>
                        <h2 className="section-title">
                            Dikelola untuk menjaga fokus ibadah jamaah
                        </h2>
                        <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
                            Persiapan dokumen, manasik, perjalanan, akomodasi,
                            dan pendampingan lapangan dikelola dalam satu
                            rangkaian layanan Balda.
                        </p>
                        <ul className="mt-8 space-y-4">
                            {layanan.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                                >
                                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md bg-balda-gold text-balda-blue-deep">
                                        <Check
                                            size={16}
                                            strokeWidth={3}
                                            aria-hidden="true"
                                        />
                                    </span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link href="/profil" className="btn-primary mt-9">
                            Lihat Profil Perusahaan
                        </Link>
                    </div>
                    <figure className="relative min-h-[27rem] overflow-hidden rounded-2xl bg-balda-blue-deep shadow-[0_24px_60px_rgba(11,33,70,0.2)]">
                        <img
                            src="/images/DJI_20250425220346_0021_D-scaled.jpg"
                            alt="Tim dan jamaah Balda dalam kegiatan pembekalan"
                            className="absolute inset-0 h-full w-full object-cover"
                            loading="lazy"
                            width="2560"
                            height="1802"
                        />
                    </figure>
                </div>
            </section>

            <section className="bg-balda-blue-light py-16 sm:py-24">
                <div className="site-container">
                    <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                        <h2 className="section-title">
                            Perjalanan bersama jamaah Balda
                        </h2>
                        <Link
                            href="/galeri"
                            className="inline-flex min-h-11 items-center font-bold text-balda-blue underline decoration-balda-gold decoration-2 underline-offset-8"
                        >
                            Buka Galeri
                        </Link>
                    </div>
                    <div className="grid auto-rows-[13rem] grid-cols-2 gap-4 md:auto-rows-[15rem] md:grid-cols-12">
                        {galeri.map((item) => (
                            <figure
                                key={item.src}
                                className={`overflow-hidden rounded-2xl bg-slate-200 ${item.className}`}
                            >
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                                    loading="lazy"
                                />
                            </figure>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-balda-blue-deep py-14 text-white sm:py-16">
                <div className="site-container flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <h2 className="max-w-2xl text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">
                            Bicarakan rencana ibadah Anda bersama tim Balda.
                        </h2>
                        <p className="mt-3 text-balda-blue-sky">
                            Konsultasikan jadwal, pilihan kamar, dan syarat
                            pendaftaran.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <a href="tel:02172791208" className="btn-outline">
                            <Phone size={18} aria-hidden="true" /> 021-7279 1208
                        </a>
                        <Link href="/kontak" className="btn-gold">
                            Kirim Pertanyaan
                        </Link>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
