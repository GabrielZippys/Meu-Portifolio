import { NextRequest, NextResponse } from 'next/server';

const LANG_COOKIE_NAME = 'lang';
const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365;

export async function POST(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const set = searchParams.get('set');

  const nextLang = set === 'en' ? 'en' : set === 'pt' ? 'pt' : null;

  if (!nextLang) {
    return NextResponse.json({ ok: false, error: 'Invalid lang' }, { status: 400 });
  }

  const res = NextResponse.json({ ok: true, lang: nextLang });

  res.cookies.set(LANG_COOKIE_NAME, nextLang, {
    path: '/',
    maxAge: ONE_YEAR_IN_SECONDS,
    sameSite: 'lax',
  });

  return res;
}
