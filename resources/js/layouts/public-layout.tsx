import { ReactNode } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

interface PublicLayoutProps {
    children: ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
    return (
        <div className="flex min-h-[100dvh] flex-col bg-white font-sans text-slate-800">
            <a href="#konten-utama" className="skip-link">
                Lewati ke konten
            </a>
            <Navbar />
            <main id="konten-utama" className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    );
}
