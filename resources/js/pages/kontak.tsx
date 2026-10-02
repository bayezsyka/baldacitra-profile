import { FormEvent, useMemo, useState } from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import {
    Check,
    ChevronRight,
    Clock,
    LoaderCircle,
    Mail,
    MapPin,
    Phone,
    Send,
} from 'lucide-react';
import PublicLayout from '@/layouts/public-layout';

const pilihanPaket = [
    'Umrah Reguler 24 Oktober 2026',
    'Umrah 12 Hari November 2026',
    'Umrah Reguler 24 Desember 2026',
    'Haji Khusus',
    'Lainnya / Belum tahu',
];

export default function Kontak() {
    const { url } = usePage();
    const paketAwal = useMemo(() => {
        const query = url.split('?')[1] ?? '';
        return new URLSearchParams(query).get('paket') ?? '';
    }, [url]);
    const [submitted, setSubmitted] = useState(false);
    const { data, setData, post, processing, reset, errors } = useForm({
        nama: '',
        telepon: '',
        email: '',
        paket: paketAwal,
        pesan: '',
    });

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        setSubmitted(false);

        post('/kontak', {
            preserveScroll: true,
            onSuccess: () => {
                setSubmitted(true);
                reset();
            },
        });
    };

    return (
        <PublicLayout>
            <Head>
                <title>Kontak dan Konsultasi | Balda Haji dan Umrah</title>
                <meta
                    name="description"
                    content="Hubungi PT. Balda Citra Mandiri untuk konsultasi paket Haji Khusus dan Umrah."
                />
            </Head>

            <section className="page-hero">
                <img
                    src="/images/20260611_home_web_3.jpg"
                    alt="Jamaah Balda dalam perjalanan ibadah"
                    className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
                    width="1923"
                    height="554"
                    fetchPriority="high"
                />
                <div className="site-container flex min-h-[22rem] items-end py-12 sm:items-center sm:py-16">
                    <div>
                        <h1 className="page-hero-title">
                            Kontak dan Konsultasi
                        </h1>
                        <p className="page-hero-copy">
                            Tanyakan jadwal, ketersediaan, fasilitas, dan proses
                            pendaftaran langsung kepada tim Balda.
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
                        Kontak
                    </li>
                </ol>
            </nav>

            <section className="bg-slate-50 py-14 sm:py-20">
                <div className="site-container grid gap-10 lg:grid-cols-[0.76fr_1.24fr] lg:gap-14">
                    <div>
                        <h2 className="text-3xl font-black tracking-[-0.03em] text-balda-blue-deep">
                            Hubungi Balda
                        </h2>
                        <address className="mt-7 space-y-6 not-italic">
                            <div className="flex items-start gap-4">
                                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-balda-blue-light text-balda-blue">
                                    <MapPin size={20} aria-hidden="true" />
                                </span>
                                <div>
                                    <h3 className="font-extrabold text-slate-950">
                                        Kantor
                                    </h3>
                                    <p className="mt-1 text-sm leading-6 text-slate-600">
                                        Jl. Cipaku II No.25, RT.11/RW.4,
                                        Petogogan, Kebayoran Baru, Jakarta
                                        Selatan 12170
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-balda-blue-light text-balda-blue">
                                    <Phone size={20} aria-hidden="true" />
                                </span>
                                <div>
                                    <h3 className="font-extrabold text-slate-950">
                                        Telepon dan WhatsApp
                                    </h3>
                                    <a
                                        href="tel:02172791208"
                                        className="mt-1 block min-h-8 text-sm font-bold text-balda-blue hover:underline"
                                    >
                                        021-7279 1208 / 1209
                                    </a>
                                    <a
                                        href="https://wa.me/6281288888996?text=Assalamualaikum%2C%20saya%20ingin%20berkonsultasi%20tentang%20program%20Balda."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block min-h-8 text-sm font-bold text-balda-blue hover:underline"
                                    >
                                        08128 8888 996
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-balda-blue-light text-balda-blue">
                                    <Mail size={20} aria-hidden="true" />
                                </span>
                                <div>
                                    <h3 className="font-extrabold text-slate-950">
                                        Email
                                    </h3>
                                    <a
                                        href="mailto:info@baldacitra.com"
                                        className="mt-1 inline-flex min-h-8 items-center text-sm font-bold text-balda-blue hover:underline"
                                    >
                                        info@baldacitra.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-balda-blue-light text-balda-blue">
                                    <Clock size={20} aria-hidden="true" />
                                </span>
                                <div>
                                    <h3 className="font-extrabold text-slate-950">
                                        Jam operasional
                                    </h3>
                                    <p className="mt-1 text-sm leading-6 text-slate-600">
                                        Senin-Jumat, 08.00-17.00 WIB
                                    </p>
                                    <p className="text-sm leading-6 text-slate-600">
                                        Sabtu, 08.00-13.00 WIB
                                    </p>
                                </div>
                            </div>
                        </address>

                        <div className="mt-8 grid gap-3">
                            <a
                                href="https://wa.me/6281288888996?text=Assalamualaikum%2C%20saya%20ingin%20berkonsultasi%20tentang%20program%20Balda."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary w-full"
                            >
                                Konsultasi via WhatsApp
                            </a>
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Jl.%20Cipaku%20II%20No.25%2C%20Petogogan%2C%20Jakarta%20Selatan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex min-h-11 items-center justify-center rounded-[10px] border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-balda-blue-deep transition-colors hover:border-balda-blue"
                            >
                                Buka Lokasi Kantor
                            </a>
                        </div>
                    </div>

                    <div className="rounded-2xl bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.09)] sm:p-8 lg:p-10">
                        <h2 className="text-3xl font-black tracking-[-0.03em] text-balda-blue-deep">
                            Kirim pertanyaan
                        </h2>

                        {submitted && (
                            <div
                                className="mt-6 flex items-start gap-3 rounded-xl border border-blue-200 bg-balda-blue-light p-4 text-balda-blue-deep"
                                role="status"
                            >
                                <Check
                                    size={20}
                                    className="mt-0.5 shrink-0"
                                    aria-hidden="true"
                                />
                                <p className="text-sm font-semibold">
                                    Pesan berhasil dikirim. Tim Balda akan
                                    menghubungi Anda melalui nomor yang
                                    terdaftar.
                                </p>
                            </div>
                        )}

                        <form
                            onSubmit={handleSubmit}
                            className="mt-7 space-y-5"
                        >
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="nama"
                                        className="mb-2 block text-sm font-bold text-slate-800"
                                    >
                                        Nama lengkap
                                    </label>
                                    <input
                                        id="nama"
                                        type="text"
                                        autoComplete="name"
                                        required
                                        value={data.nama}
                                        onChange={(event) =>
                                            setData('nama', event.target.value)
                                        }
                                        className="form-control"
                                        aria-invalid={Boolean(errors.nama)}
                                        aria-describedby={
                                            errors.nama
                                                ? 'nama-error'
                                                : undefined
                                        }
                                    />
                                    {errors.nama && (
                                        <p
                                            id="nama-error"
                                            className="mt-2 text-sm font-semibold text-red-700"
                                        >
                                            {errors.nama}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label
                                        htmlFor="telepon"
                                        className="mb-2 block text-sm font-bold text-slate-800"
                                    >
                                        Nomor telepon
                                    </label>
                                    <input
                                        id="telepon"
                                        type="tel"
                                        inputMode="tel"
                                        autoComplete="tel"
                                        placeholder="08xx xxxx xxxx"
                                        required
                                        value={data.telepon}
                                        onChange={(event) =>
                                            setData(
                                                'telepon',
                                                event.target.value,
                                            )
                                        }
                                        className="form-control"
                                        aria-invalid={Boolean(errors.telepon)}
                                        aria-describedby={
                                            errors.telepon
                                                ? 'telepon-error'
                                                : undefined
                                        }
                                    />
                                    {errors.telepon && (
                                        <p
                                            id="telepon-error"
                                            className="mt-2 text-sm font-semibold text-red-700"
                                        >
                                            {errors.telepon}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-bold text-slate-800"
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="nama@email.com"
                                    value={data.email}
                                    onChange={(event) =>
                                        setData('email', event.target.value)
                                    }
                                    className="form-control"
                                    aria-invalid={Boolean(errors.email)}
                                    aria-describedby={
                                        errors.email ? 'email-error' : undefined
                                    }
                                />
                                {errors.email && (
                                    <p
                                        id="email-error"
                                        className="mt-2 text-sm font-semibold text-red-700"
                                    >
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="paket"
                                    className="mb-2 block text-sm font-bold text-slate-800"
                                >
                                    Program yang diminati
                                </label>
                                <select
                                    id="paket"
                                    value={data.paket}
                                    onChange={(event) =>
                                        setData('paket', event.target.value)
                                    }
                                    className="form-control"
                                >
                                    <option value="">Pilih program</option>
                                    {pilihanPaket.map((paket) => (
                                        <option key={paket} value={paket}>
                                            {paket}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label
                                    htmlFor="pesan"
                                    className="mb-2 block text-sm font-bold text-slate-800"
                                >
                                    Pesan
                                </label>
                                <textarea
                                    id="pesan"
                                    rows={5}
                                    placeholder="Tuliskan hal yang ingin Anda tanyakan"
                                    value={data.pesan}
                                    onChange={(event) =>
                                        setData('pesan', event.target.value)
                                    }
                                    className="form-control resize-y"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="btn-gold w-full disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {processing ? (
                                    <LoaderCircle
                                        size={18}
                                        className="animate-spin"
                                        aria-hidden="true"
                                    />
                                ) : (
                                    <Send size={18} aria-hidden="true" />
                                )}
                                {processing
                                    ? 'Mengirim pesan...'
                                    : 'Kirim Pesan'}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
