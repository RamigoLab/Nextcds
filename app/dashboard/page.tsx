'use client';

import Link from 'next/link';
import { toast } from 'react-toastify';
import { logout } from '@/app/actions/auth';
import {
  Book,
  Search,
  User,
  AlertCircle,
  Settings,
  ArrowRight,
  LogOut,
} from 'lucide-react';

const cardData = [
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
  {
    title: 'Profilo',
    href: '/profile',
    description: 'Gestisci le tue informazioni personali e preferenze.',
    icon: <User className="w-6 h-6 text-indigo-500" aria-hidden="true" />,
  },
  {
    title: 'Segnala un bug',
    href: '/segnala-bug',
    description: 'Comunica problemi o suggerimenti per migliorare l’app.',
    icon: <AlertCircle className="w-6 h-6 text-indigo-500" aria-hidden="true" />,
  },
];

export default function DashboardPage() {
  async function handleLogout() {
    try {
      await logout();
      toast.success('Logout effettuato!');
      setTimeout(() => {
        window.location.href = '/';
      }, 500);
    } catch {
      toast.error('Errore durante il logout');
    }
  }

  return (
    <>
      <h1 className="text-3xl font-extrabold mb-8 text-gray-900 mt-6 sm:mt-10">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {cardData.map(({ title, href, description, icon }) => (
          <Link
            key={title}
            href={href}
            className="group flex flex-col justify-between rounded-xl bg-white border border-gray-200 p-6 shadow-md
              hover:shadow-lg hover:border-indigo-500 hover:bg-indigo-50 transition
              cursor-pointer focus:outline-none focus:ring-4 focus:ring-indigo-300"
            aria-label={`Vai a ${title}`}
          >
            <div className="flex items-center space-x-4">
              {icon}
              <h2 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-700 transition">
                {title}
              </h2>
            </div>
            <p className="mt-3 text-sm text-gray-600 group-hover:text-indigo-600 transition">
              {description}
            </p>
            <div className="mt-6 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowRight className="w-5 h-5 text-indigo-600" aria-hidden="true" />
            </div>
          </Link>
        ))}

        <button
          onClick={handleLogout}
          type="button"
          className="group flex flex-col justify-between rounded-xl bg-white border border-gray-200 p-6 shadow-md
            hover:shadow-lg hover:border-red-500 hover:bg-red-50 transition
            cursor-pointer focus:outline-none focus:ring-4 focus:ring-red-300"
          aria-label="Logout"
        >
          <div className="flex items-center space-x-4">
            <LogOut className="w-6 h-6 text-red-500 group-hover:text-red-700" aria-hidden="true" />
            <h2 className="text-lg font-semibold text-gray-900 group-hover:text-red-700 transition">
              Logout
            </h2>
          </div>
          <p className="mt-3 text-sm text-gray-600 group-hover:text-red-600 transition">
            Termina la sessione ed esci dall’account.
          </p>
          <div className="mt-6 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowRight className="w-5 h-5 text-red-600" aria-hidden="true" />
          </div>
        </button>
      </div>
    </>
  );
}
