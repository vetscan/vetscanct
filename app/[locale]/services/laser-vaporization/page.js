import PageShell from '@/components/PageShell/PageShell';
import content from '@/data/siteContent.json';

export default function ServicesLaserVaporizationPage() {
  const { pages } = content;

  return (
    <PageShell title={pages.services.laserVaporization.title} subtitle={pages.services.laserVaporization.subtitle} />
  );
}
