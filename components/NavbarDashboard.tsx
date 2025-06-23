'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { UserCircle, Home, Book, Settings, Search, AlertCircle } from 'lucide-react';




const cardData = [
  { title: 'Codice della Strada', href: '/codice-della-strada', icon: <Book className="w-5 h-5 text-indigo-500" /> },
  { title: 'Regolamento di attuazione', href: '/regolamento', icon: <Settings className="w-5 h-5 text-indigo-500" /> },
  { title: 'Ricerca sanzioni per numero', href: '/ricerca-numero', icon: <Search className="w-5 h-5 text-indigo-500" /> },
  { title: 'Ricerca sanzioni per testo', href: '/ricerca-testo', icon: <Search className="w-5 h-5 text-indigo-500" /> },
  { title: 'Sanzioni più Ricercate', href: '/sanzioni-frequenti', icon: <AlertCircle className="w-5 h-5 text-indigo-500" /> },
  { title: 'Ultimi aggiornamenti', href: '/aggiornamenti', icon: <AlertCircle className="w-5 h-5 text-indigo-500" /> },
  { title: 'Profilo', href: '/profile', icon: <UserCircle className="w-5 h-5 text-indigo-500" /> },
  { title: 'Segnala un bug', href: '/segnala-bug', icon: <AlertCircle className="w-5 h-5 text-indigo-500" /> },
];

export default function NavbarDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Chiudi menu mobile cliccando fuori
  useEffect(() => {
  function handleClickOutside(event: MouseEvent) {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  }
  if (isOpen) {
    document.addEventListener('mousedown', handleClickOutside);
  } else {
    document.removeEventListener('mousedown', handleClickOutside);
  }
  return () => document.removeEventListener('mousedown', handleClickOutside);
}, [isOpen]);

  return (
    <nav
      className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 text-gray-900 shadow-sm"
      role="navigation"
      aria-label="Dashboard navigation"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex justify-between h-16 items-center">
        {/* Logo o titolo */}
        <Link href="/dashboard" className="text-xl font-bold hover:text-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
          Dashboard
        </Link>

        {/* Hamburger menu mobile */}
        <button
  ref={buttonRef}
  className="md:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
  aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
  aria-expanded={isOpen}
  aria-controls="mobile-menu"
  onClick={() => setIsOpen(!isOpen)}
>
  {isOpen ? (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  ) : (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )}
</button>


        {/* Menu desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/dashboard"
            className={`px-4 py-2 text-sm font-medium rounded-md border border-gray-300 hover:text-blue-600 hover:bg-white transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              pathname === '/dashboard' ? 'bg-blue-100 text-blue-700' : ''
            }`}
          >
            Dashboard - Home
          </Link>
          <Link
            href="/profile"
            className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-md hover:text-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              pathname === '/profile' ? 'bg-blue-100 text-blue-700' : ''
            }`}
          >
            <UserCircle className="h-5 w-5" aria-hidden="true" />
            <span>Profilo</span>
          </Link>
        </div>

      {/* Menu mobile */}
      {isOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="md:hidden bg-white border-t border-gray-200 shadow-md absolute top-16 left-0 right-0 max-h-[calc(100vh-4rem)] overflow-auto"
        >
          {/* Link fissi */}
          <Link
            href="/dashboard"
            onClick={() => setIsOpen(false)}
            className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              pathname === '/dashboard' ? 'bg-blue-100 text-blue-700' : 'text-gray-700'
            }`}
          >
            <Home className="w-5 h-5 text-indigo-500" aria-hidden="true" />
            <span>Dashboard - Home</span>
          </Link>

          {/* Link dinamici cardData */}
          {cardData.map(({ title, href, icon }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                pathname === href ? 'bg-blue-100 text-blue-700' : 'text-gray-700'
              }`}
            >
              {icon}
              <span>{title}</span>
            </Link>
          ))}
        </div>
      )}
      </div>
    </nav>
  );
}
