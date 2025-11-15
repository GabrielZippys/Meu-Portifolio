import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import AboutStory from '@/components/ui/AboutSection';
import type { Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/i18n';

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const langCookie = cookieStore.get('lang')?.value as Locale | undefined;
  const lang: Locale = langCookie === 'en' || langCookie === 'pt' ? langCookie : 'pt';
  const dict = getDictionary(lang);

  return {
    title: dict.sobrePage.metaTitle,
    description: dict.sobrePage.metaDescription,
  };
}

export default function SobrePage() {
  return <AboutStory />;
}
