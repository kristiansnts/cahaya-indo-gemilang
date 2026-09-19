import { NextResponse } from 'next/server';
import {
  createSessionToken,
  sessionCookieOptions,
  verifyCredentials,
} from '@/lib/auth';

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const username = typeof body?.username === 'string' ? body.username : '';
  const password = typeof body?.password === 'string' ? body.password : '';

  if (!verifyCredentials(username, password)) {
    return NextResponse.json({ error: 'Username atau password salah' }, { status: 401 });
  }

  const token = await createSessionToken();
  const res = NextResponse.json({ ok: true });
  res.cookies.set(sessionCookieOptions(token));
  return res;
}
