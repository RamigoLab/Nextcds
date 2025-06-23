import React, { ReactNode } from 'react';
import Navbar from '@/components/Navbar';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <>
            <Navbar isLoggedIn={true} />
      <main className="pt-16 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col pb-8">

        {children}
      </main>
    </>
  );
}
