'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Book, Settings, Search, AlertCircle, User } from 'lucide-react';

const cardData = [
  { title: 'Codice della Strada', href: '/codice-della-strada', icon: <Book className="w-6 h-6 text-indigo-500" /> },
  { title: 'Regolamento di attuazione', href: '/regolamento', icon: <Settings className="w-6 h-6 text-indigo-500" /> },
  { title: 'Ricerca sanzioni per numero', href: '/ricerca-numero', icon: <Search className="w-6 h-6 text-indigo-500" /> },
  { title: 'Ricerca sanzioni per testo', href: '/ricerca-testo', icon: <Search className="w-6 h-6 text-indigo-500" /> },
  { title: 'Sanzioni più Ricercate', href: '/sanzioni-frequenti', icon: <AlertCircle className="w-6 h-6 text-indigo-500" /> },
  { title: 'Ultimi aggiornamenti', href: '/aggiornamenti', icon: <AlertCircle className="w-6 h-6 text-indigo-500" /> },
  { title: 'Profilo', href: '/profile', icon: <User className="w-6 h-6 text-indigo-500" /> },
  { title: 'Segnala un bug', href: '/segnala-bug', icon: <AlertCircle className="w-6 h-6 text-indigo-500" /> },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex md:w-64 border-r border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-4 flex-col space-y-1">
      {cardData.map(({ title, href, icon }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`flex items-center space-x-2 p-2 rounded-md font-medium ${
              isActive
                ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800'
            }`}
          >
            {icon}
            <span>{title}</span>
          </Link>
        );
      })}
    </nav>
  );
}
