import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Only apply this middleware to the /admin route and its sub-routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Check for our custom authentication cookie
    const isAuthCookie = request.cookies.get('roardata_admin_auth');
    
    // If we're already on the login page
    if (request.nextUrl.pathname === '/admin/login') {
      // If they are already authenticated, redirect them to the dashboard
      if (isAuthCookie?.value === 'authenticated') {
        return NextResponse.redirect(new URL('/admin', request.url));
      }
      // Otherwise, let them see the login page
      return NextResponse.next();
    }

    // If they are trying to access a protected admin page and are not authenticated
    if (isAuthCookie?.value !== 'authenticated') {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

// Configure the middleware to only run on the admin paths
export const config = {
  matcher: '/admin/:path*',
};
