import { NextRequest, NextResponse } from 'next/server';

const LANG_COOKIE_NAME = 'lang';

export function middleware(req: NextRequest) {
  const existingLang = req.cookies.get(LANG_COOKIE_NAME)?.value as 'pt' | 'en' | undefined;

  if (existingLang === 'pt' || existingLang === 'en') {
    return NextResponse.next();
  }

  const res = NextResponse.next();

  res.cookies.set(LANG_COOKIE_NAME, 'en', {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
  });

  return res;
}

export const config = {
  matcher: [
    '/((?!_next/|api/|.*\\..*).*)',
  ],
};
