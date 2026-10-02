import { Head, Link } from '@inertiajs/react';
import { Award, CheckCircle2, ChevronRight, Shield, Users } from 'lucide-react';
import PublicLayout from '@/layouts/public-layout';

const legalitas = [
    { label: 'Izin Depag', val: 'PHU/HK.3037/VIII/2009' },
    { label: 'Anggota HIMPUH', val: '039/HIMPUH/2010' },
    { label: 'Izin Operasional PIHK', val: '1214 Tahun 2021' },
    { label: 'Izin Operasional PPIU', val: 'U.8 Tahun 2022' },
];

export default function Profil() {
    return (
        <PublicLayout>
            <Head>
                <title>Profil Perusahaan – Balda Haji & Umrah</title>
                <meta
                    name="description"
                    content="PT. Balda Citra Mandiri, penyelenggara Haji Khusus dan Umrah terpercaya sejak 1996."
                />
            </Head>

            <div className="pt-16">
                {/* Hero */}
                <div className="relative h-64 overflow-hidden">
                    <img
                        src="/images/20260611_home_web_2.jpg"
                        alt="Profil Balda"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-green-950/80" />
                    <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4" data-aos="fade-up">
                        <p className="section-tag text-amber-400 mb-2">PT. Balda Citra Mandiri</p>
                        <h1 className="text-3xl md:text-4xl font-serif font-bold">Profil Perusahaan</h1>
                    </div>
                </div>

                {/* Breadcrumb */}
                <div className="bg-stone-50 border-b border-stone-100">
                    <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-2 text-sm text-stone-500">
                        <Link href="/" className="hover:text-green-800 transition-colors">
                            Beranda
                        </Link>
                        <ChevronRight size={14} />
                        <span className="text-stone-800 font-medium">Profil</span>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    {/* Tentang */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        <div data-aos="fade-right">
                            <p className="section-tag mb-2">Tentang Kami</p>
                            <h2 className="section-title mb-5">Melayani Tamu Allah Sejak 1996</h2>
                            <div className="space-y-4 text-stone-600 leading-relaxed">
                                <p>
                                    PT. Balda Citra Mandiri berdiri sejak tahun <strong>1996</strong> sebagai
                                    penyelenggara perjalanan ibadah Umrah, kemudian pada tahun 2000 mendapatkan izin dari
                                    Departemen Agama RI untuk menyelenggarakan Perjalanan Ibadah Haji Khusus.
                                </p>
                                <p>
                                    PT. Balda Citra Mandiri terbukti mampu mendapat kepercayaan dari Jamaah Haji dan
                                    Umrah baik perorangan maupun institusi. Kami telah melayani ribuan jamaah dari
                                    seluruh Indonesia selama lebih dari tiga dekade.
                                </p>
                                <p>
                                    Dengan berbekal pengalaman tersebut, PT. Balda Citra Mandiri bertekad untuk
                                    melayani tamu-tamu Allah dengan sepenuh hati yang bertujuan memberikan kenyamanan
                                    dalam beribadah untuk mendapatkan kemabruran.
                                </p>
                            </div>
                        </div>
                        <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg" data-aos="fade-left">
                            <img
                                src="/images/Umrah_15Ags26.jpg"
                                alt="Jamaah Balda"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Legalitas */}
                    <div className="bg-green-50 border border-green-100 rounded-2xl p-8 mb-16" data-aos="fade-up">
                        <div className="flex items-center gap-3 mb-6">
                            <Shield size={24} className="text-green-700" />
                            <h2 className="text-2xl font-serif font-bold text-green-900">
                                Izin & Legalitas Perusahaan
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {legalitas.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-green-100"
                                    data-aos="fade-up"
                                    data-aos-delay={i * 80}
                                >
                                    <CheckCircle2 size={18} className="text-green-600 mt-0.5 shrink-0" />
                                    <div>
                                        <div className="text-xs text-stone-400 uppercase tracking-wide mb-0.5">
                                            {item.label}
                                        </div>
                                        <div className="font-semibold text-stone-800">{item.val}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        {[
                            {
                                icon: <Award size={32} className="text-amber-600" />,
                                val: '30+',
                                label: 'Tahun Pengalaman',
                                desc: 'Melayani jamaah sejak 1996',
                            },
                            {
                                icon: <Users size={32} className="text-amber-600" />,
                                val: '10.000+',
                                label: 'Jamaah Terlayani',
                                desc: 'Dari seluruh Indonesia',
                            },
                            {
                                icon: <Shield size={32} className="text-amber-600" />,
                                val: '4',
                                label: 'Izin Resmi',
                                desc: 'Kemenag RI & HIMPUH',
                            },
                        ].map((s, i) => (
                            <div
                                key={i}
                                className="card text-center p-8"
                                data-aos="fade-up"
                                data-aos-delay={i * 100}
                            >
                                <div className="flex justify-center mb-3">{s.icon}</div>
                                <div className="text-3xl font-bold text-green-900 mb-1">{s.val}</div>
                                <div className="font-semibold text-stone-700 mb-1">{s.label}</div>
                                <div className="text-sm text-stone-400">{s.desc}</div>
                            </div>
                        ))}
                    </div>

                    {/* Visi Misi */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-green-900 text-white rounded-2xl p-7" data-aos="fade-right">
                            <h3 className="text-xl font-serif font-bold mb-3 flex items-center gap-2">
                                <span className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-xs font-bold">
                                    V
                                </span>
                                Visi
                            </h3>
                            <p className="text-green-100 leading-relaxed">
                                Menjadi penyelenggara perjalanan ibadah Haji dan Umrah yang terdepan,
                                terpercaya, dan memberikan pelayanan terbaik bagi setiap jamaah.
                            </p>
                        </div>
                        <div className="bg-amber-700 text-white rounded-2xl p-7" data-aos="fade-left">
                            <h3 className="text-xl font-serif font-bold mb-3 flex items-center gap-2">
                                <span className="w-6 h-6 rounded-full bg-white text-amber-700 flex items-center justify-center text-xs font-bold">
                                    M
                                </span>
                                Misi
                            </h3>
                            <ul className="space-y-2 text-amber-50 text-sm leading-relaxed">
                                <li>• Memberikan pelayanan profesional dan amanah kepada setiap jamaah</li>
                                <li>• Menyediakan fasilitas terbaik untuk kenyamanan beribadah</li>
                                <li>• Membangun kepercayaan jamaah melalui transparansi dan integritas</li>
                                <li>• Terus berinovasi dalam peningkatan kualitas layanan</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}
