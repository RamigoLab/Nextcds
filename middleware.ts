import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { useSearchParams, useRouter } from 'next/navigation';


export function middleware(req: NextRequest) {
  const token = req.cookies.get('session')?.value;  // usa 'session' se è questo il nome del cookie

  if (!token) {
    return NextResponse.redirect(new URL('/auth', req.url));
  }

  // Lascia passare la richiesta senza verificare il JWT (per limiti Edge runtime)
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*'], // proteggi queste rotte
};
