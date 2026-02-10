import PageShell from '@/components/PageShell/PageShell';
import content from '@/data/siteContent.json';

export default function ServicesHerniasPage() {
  const { pages } = content;

  return (
    <PageShell title={pages.services.hernias.title} subtitle={pages.services.hernias.subtitle} />
  );
}
