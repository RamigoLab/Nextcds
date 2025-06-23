'use client'

import { Book, Settings, Search, AlertCircle } from 'lucide-react';
import Link from 'next/link';

const resources = [
  {
    title: 'Codice della Strada',
    href: '/codice-della-strada',
    description: 'Consulta il testo completo del Codice della Strada aggiornato.',
    icon: <Book className="w-6 h-6 text-indigo-500" aria-hidden="true" />,
  },
  {
    title: 'Regolamento di attuazione',
    href: '/regolamento',
    description: 'Norme e regolamenti di attuazione correlati al Codice.',
    icon: <Settings className="w-6 h-6 text-indigo-500" aria-hidden="true" />,
  },
  {
    title: 'Ricerca sanzioni per numero',
    href: '/ricerca-numero',
    description: 'Trova rapidamente le sanzioni tramite il numero articolo.',
    icon: <Search className="w-6 h-6 text-indigo-500" aria-hidden="true" />,
  },
  {
    title: 'Ricerca sanzioni per testo',
    href: '/ricerca-testo',
    description: 'Cerca le sanzioni utilizzando parole chiave o frasi.',
    icon: <Search className="w-6 h-6 text-indigo-500" aria-hidden="true" />,
  },
  {
    title: 'Sanzioni più Ricercate',
    href: '/sanzioni-frequenti',
    description: 'Visualizza le sanzioni più consultate dagli utenti.',
    icon: <AlertCircle className="w-6 h-6 text-indigo-500" aria-hidden="true" />,
  },
  {
    title: 'Ultimi aggiornamenti',
    href: '/aggiornamenti',
    description: 'Resta aggiornato sulle ultime modifiche legislative.',
    icon: <AlertCircle className="w-6 h-6 text-indigo-500" aria-hidden="true" />,
  },
];

export default function ResourcesSection() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Risorse utili</h2>
        <p className="mt-4 text-lg text-gray-600">Consulta strumenti e contenuti sempre aggiornati.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((item, index) => (
          <Link key={index} href={item.href} className="group block p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md hover:border-indigo-500 transition">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
