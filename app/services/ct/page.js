import PageShell from '@/components/PageShell/PageShell';
import content from '@/data/siteContent.json';

export default function ServicesCtPage() {
  const { pages } = content;

  return (
    <PageShell title={pages.services.ct.title} subtitle={pages.services.ct.subtitle} />
  );
}
