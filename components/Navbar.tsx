'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { UserCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { logout } from '@/app/actions/auth';

interface NavbarProps {
  isLoggedIn: boolean;
}

export default function Navbar({ isLoggedIn }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);

  // Chiudi menu mobile cliccando fuori
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
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

  async function handleLogout() {
    try {
      await logout();
      toast.success('Logout effettuato!');
      router.push('/');
    } catch {
      toast.error('Errore durante il logout');
    }
  }

  return (
    <nav
      className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 text-gray-900 shadow-sm"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex justify-between h-16 items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold hover:text-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
          NextCdS
        </Link>

        {/* Hamburger menu mobile */}
        <button
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
  {!isLoggedIn ? (
    <Link
      href="/auth"
      className="px-4 py-2 text-sm font-medium rounded-md hover:text-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Accedi / Registrati
    </Link>
  ) : (
    <>
      <Link
        href="/profile"
        className="flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-md hover:text-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <UserCircle className="h-5 w-5" aria-hidden="true" />
        <span>Profilo</span>
      </Link>

      <Link
        href="/dashboard"
        className="px-4 py-2 text-sm font-medium rounded-md border border-gray-300 hover:text-blue-600 hover:bg-white transition focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Dashboard
      </Link>

      <button
        onClick={handleLogout}
        className="px-4 py-2 text-sm font-medium rounded-md border border-gray-300 hover:bg-blue-600 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Logout"
      >
        Logout
      </button>
    </>
  )}
</div>

{/* Menu mobile */}
{isOpen && (
  <div
    id="mobile-menu"
    ref={menuRef}
    className="md:hidden bg-white border-t border-gray-200 shadow-md"
  >
    {!isLoggedIn ? (
      <Link
        href="/auth"
        onClick={() => setIsOpen(false)}
        className="block px-4 py-3 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Accedi / Registrati
      </Link>
    ) : (
      <>
        <Link
          href="/profile"
          onClick={() => setIsOpen(false)}
          className="flex items-center space-x-2 px-4 py-3 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <UserCircle className="h-5 w-5" aria-hidden="true" />
          <span>Profilo</span>
        </Link>

        <Link
          href="/dashboard"
          onClick={() => setIsOpen(false)}
          className="block px-4 py-3 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Dashboard
        </Link>

        <button
          onClick={() => {
            setIsOpen(false);
            handleLogout();
          }}
          className="w-full text-left px-4 py-3 text-sm font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Logout
        </button>
      </>
    )}
  </div>
)}
      </div>
    </nav>
  );
}