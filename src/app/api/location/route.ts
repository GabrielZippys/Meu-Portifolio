import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

function sanitizeIp(raw: string | null): string | undefined {
  if (!raw) return undefined;
  const ip = raw.split(',')[0]?.trim();
  if (!ip) return undefined;
  const cleaned = ip.startsWith('::ffff:') ? ip.slice(7) : ip;
  if (cleaned === '127.0.0.1' || cleaned === '::1') return undefined;
  return cleaned;
}

export async function GET() {
  const hdrs = await headers();
  const headerIp = hdrs.get('x-forwarded-for');
  const ip = sanitizeIp(headerIp);
  const endpoint = ip ? `https://ipapi.co/${ip}/json/` : 'https://ipapi.co/json/';

  try {
    const resp = await fetch(endpoint, {
      cache: 'no-store',
      headers: {
        Accept: 'application/json',
        'User-Agent': 'Meu-Portifolio/1.0 (ip lookup)',
      },
    });

    if (!resp.ok) {
      throw new Error('Failed to fetch location');
    }

    const data = await resp.json();
    return NextResponse.json({
      country: data?.country_name ?? null,
      source: ip ? 'direct-ip' : 'fallback',
    });
  } catch (error) {
    return NextResponse.json({ country: null, source: 'error' }, { status: 200 });
  }
}
