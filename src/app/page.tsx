import type { Metadata } from 'next';
import HomeClient from '@/components/ui/HomeClient';

export const metadata: Metadata = {
  title: 'Gabriel Oliveira | Fullstack Dev',
  description: 'Portfólio com projetos de automações, dashboards e Firebase',
};

export default function Page() {
  return <HomeClient />;
}