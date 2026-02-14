import PageShell from '@/components/PageShell/PageShell';
import content from '@/data/siteContent.json';

export default function ServicesLaserPage() {
  const { pages } = content;

  return (
    <PageShell title={pages.services.laser.title} subtitle={pages.services.laser.subtitle} />
  );
}
