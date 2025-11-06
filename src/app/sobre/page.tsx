import type { Metadata } from 'next';
import AboutStory from '@/components/ui/AboutSection'; // certifique-se do nome do arquivo

export const metadata: Metadata = {
  title: 'Sobre mim — Gabriel Oliveira',
  description:
    'Minha história como dev fullstack com foco em automação, dashboards e produtos com impacto.',
};

export default function SobrePage() {
  return <AboutStory />;
}
