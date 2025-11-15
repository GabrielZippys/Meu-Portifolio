import { NextRequest, NextResponse } from 'next/server';

const LANG_COOKIE_NAME = 'lang';

export function middleware(req: NextRequest) {
  const existingLang = req.cookies.get(LANG_COOKIE_NAME)?.value as 'pt' | 'en' | undefined;

  if (existingLang === 'pt' || existingLang === 'en') {
    return NextResponse.next();
  }

  // geo pode não estar tipado em NextRequest em modo dev; usamos any para acessar com segurança.
  const reqWithGeo = req as any;
  const country: string | undefined = reqWithGeo.geo?.country;
  const acceptLanguage = req.headers.get('accept-language') || '';

  let lang: 'pt' | 'en' = 'en';

  if (country === 'BR') {
    lang = 'pt';
  } else if (acceptLanguage.toLowerCase().startsWith('pt')) {
    lang = 'pt';
  } else if (acceptLanguage.toLowerCase().startsWith('en')) {
    lang = 'en';
  }

  const res = NextResponse.next();

  res.cookies.set(LANG_COOKIE_NAME, lang, {
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
