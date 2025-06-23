// app/page.tsx (Server Component - NO 'use client')
import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import PlansComparison from '@/components/PlansComparison';
import Testimonials from '@/components/Testimonials';
import ResourcesSection from '@/components/ResourcesSection';
import Navbar from '@/components/Navbar';
import { getUserFromToken } from '@/lib/session';

export const metadata = {
  title: 'NextCdS - Tutto il Codice della Strada',
  description: 'App per consultare il Codice della Strada e cercare sanzioni in modo semplice e veloce.',
  openGraph: {
    title: 'NextCdS - Tutto il Codice della Strada',
    description: 'App per consultare il Codice della Strada e cercare sanzioni in modo semplice e veloce.',
    url: 'https://tuo-dominio.it',
    siteName: 'NextCdS',
    images: [
      {
        url: 'https://tuo-dominio.it/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NextCdS Logo',
      },
    ],
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NextCdS - Tutto il Codice della Strada',
    description: 'App per consultare il Codice della Strada e cercare sanzioni in modo semplice e veloce.',
    images: ['https://tuo-dominio.it/images/og-image.png'],
  },
};

export default async function HomePage() {  // <-- async qui!
  const userId = await getUserFromToken();
  const isLoggedIn = Boolean(userId);

  return (
    <main className="bg-background text-textPrimary min-h-screen antialiased">
      <Navbar isLoggedIn={isLoggedIn} />
      <HeroSection />
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40 space-y-24">
        <section aria-label="Funzionalità principali" className="scroll-mt-24">
          <Features />
        </section>

        <section aria-label="Piani di abbonamento" className="scroll-mt-24">
          <PlansComparison />
        </section>

        <section aria-label="Risorse" className="scroll-mt-24">
          <ResourcesSection />
        </section>

        <section aria-label="Testimonianze degli utenti" className="scroll-mt-24">
          <Testimonials />
        </section>
      </div>
    </main>
  );
}
