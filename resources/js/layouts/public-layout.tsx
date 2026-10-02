import { useEffect, ReactNode } from 'react';
import { router } from '@inertiajs/react';
import AOS from 'aos';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

interface PublicLayoutProps {
    children: ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 40,
            easing: 'ease-out-cubic',
        });

        const unregisterRouterListener = router.on('navigate', () => {
            AOS.refresh();
        });

        return () => {
            unregisterRouterListener();
        };
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-white text-stone-800 font-sans antialiased selection:bg-balda-gold selection:text-balda-blue-deep">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    );
}
