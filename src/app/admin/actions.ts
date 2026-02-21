'use server';

import { cookies } from 'next/headers';

export async function authenticateAdmin(password: string) {
  // Check against our local environment variable password
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'RoarData2026!';

  if (password === ADMIN_PASSWORD) {
    // Set a very simple HTTP-only cookie indicating they are authenticated.
    // In a high-risk scalable app you would use JWTs or Sessions, but for a 
    // self-hosted client-level dashboard, this is an excellent, lightweight solution.
    (await cookies()).set({
      name: 'roardata_admin_auth',
      value: 'authenticated',
      httpOnly: true,
      path: '/admin',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });

    return { success: true };
  }

  return { success: false, error: 'Invalid password' };
}

export async function logoutAdmin() {
  (await cookies()).set({
    name: 'roardata_admin_auth',
    value: '',
    path: '/admin',
    maxAge: 0,
  });
  return { success: true };
}
