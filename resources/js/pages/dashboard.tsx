import { Head } from '@inertiajs/react';
import { Mail, Users, Calendar } from 'lucide-react';
import { dashboard } from '@/routes';

interface Message {
    id: number;
    name: string;
    phone: string;
    email: string | null;
    package: string | null;
    message: string | null;
    created_at: string;
}

interface DashboardProps {
    messages?: Message[];
    messagesCount?: number;
    usersCount?: number;
}

export default function Dashboard({ messages = [], messagesCount = 0, usersCount = 0 }: DashboardProps) {
    return (
        <>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto p-4 md:p-6">
                <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-xs dark:border-stone-800 dark:bg-stone-900">
                        <div className="flex items-center gap-3">
                            <div className="rounded-lg bg-balda-blue/10 p-2 text-balda-blue">
                                <Mail size={20} />
                            </div>
                            <div>
                                <p className="text-xs font-medium text-stone-500 uppercase tracking-wide">Pesan Masuk</p>
                                <h3 className="text-2xl font-bold text-stone-900 dark:text-white">{messagesCount}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-xs dark:border-stone-800 dark:bg-stone-900">
                        <div className="flex items-center gap-3">
                            <div className="rounded-lg bg-balda-gold/20 p-2 text-balda-gold-dark">
                                <Users size={20} />
                            </div>
                            <div>
                                <p className="text-xs font-medium text-stone-500 uppercase tracking-wide">Pengguna Terdaftar</p>
                                <h3 className="text-2xl font-bold text-stone-900 dark:text-white">{usersCount}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-xs dark:border-stone-800 dark:bg-stone-900">
                        <div className="flex items-center gap-3">
                            <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-600">
                                <Calendar size={20} />
                            </div>
                            <div>
                                <p className="text-xs font-medium text-stone-500 uppercase tracking-wide">Status Sistem</p>
                                <h3 className="text-sm font-semibold text-emerald-600">Online & Aktif</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rounded-xl border border-stone-200 bg-white shadow-xs dark:border-stone-800 dark:bg-stone-900 overflow-hidden">
                    <div className="border-b border-stone-200 p-4 dark:border-stone-800 flex items-center justify-between">
                        <h2 className="font-semibold text-stone-900 dark:text-white">Pesan & Pertanyaan Jamaah Terbaru</h2>
                        <span className="text-xs text-stone-500">{messages.length} pesan ditampilkan</span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-stone-50 text-xs uppercase text-stone-500 dark:bg-stone-800/50">
                                <tr>
                                    <th className="px-4 py-3">Nama</th>
                                    <th className="px-4 py-3">No. Telepon</th>
                                    <th className="px-4 py-3">Email</th>
                                    <th className="px-4 py-3">Paket</th>
                                    <th className="px-4 py-3">Pesan</th>
                                    <th className="px-4 py-3">Tanggal</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-100 dark:divide-stone-800">
                                {messages.length === 0 ? (
                                    <tr>
                                        <td colSpan={6} className="px-4 py-8 text-center text-stone-400">
                                            Belum ada pesan masuk.
                                        </td>
                                    </tr>
                                ) : (
                                    messages.map((m) => (
                                        <tr key={m.id} className="hover:bg-stone-50/50 dark:hover:bg-stone-800/30">
                                            <td className="px-4 py-3 font-medium text-stone-900 dark:text-white">
                                                {m.name}
                                            </td>
                                            <td className="px-4 py-3 text-stone-600 dark:text-stone-300">
                                                <a href={`tel:${m.phone}`} className="hover:text-balda-blue">
                                                    {m.phone}
                                                </a>
                                            </td>
                                            <td className="px-4 py-3 text-stone-600 dark:text-stone-300">
                                                {m.email || '—'}
                                            </td>
                                            <td className="px-4 py-3">
                                                <span className="inline-flex rounded-full bg-balda-blue/10 px-2.5 py-0.5 text-xs font-semibold text-balda-blue">
                                                    {m.package || 'Umum'}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-stone-600 dark:text-stone-300 max-w-xs truncate">
                                                {m.message || '—'}
                                            </td>
                                            <td className="px-4 py-3 text-xs text-stone-400">
                                                {new Date(m.created_at).toLocaleDateString('id-ID', {
                                                    day: 'numeric',
                                                    month: 'short',
                                                    year: 'numeric',
                                                })}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
    ],
};
