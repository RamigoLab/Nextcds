import React, { ReactNode } from 'react';
import { cookies } from 'next/headers';        // Next.js 13+ server API
import jwt from 'jsonwebtoken';

import 'react-toastify/dist/ReactToastify.css';
import Footer from '@/components/Footer';
import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import { ToastContainer } from 'react-toastify';

import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '600', '700'],
});

const JWT_SECRET = process.env.JWT_SECRET || 'supersegreto123456';

export const metadata = {
  title: 'NextCdS - Tutto il Codice della Strada',
  description: 'App per consultare il Codice della Strada e cercare sanzioni',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('session');
  let isLoggedIn = false;

  if (sessionCookie?.value) {
    try {
      jwt.verify(sessionCookie.value, JWT_SECRET);
      isLoggedIn = true;
    } catch {
      isLoggedIn = false;
    }
  }

  return (
    <html lang="it" className={inter.variable}>
<body className="bg-white text-gray-900 font-sans">
  <div className="flex flex-col min-h-screen">
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Analytics />
      </body>
    </html>
  );
}
