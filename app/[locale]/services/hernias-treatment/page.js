import PageShell from '@/components/PageShell/PageShell';
import content from '@/data/siteContent.json';

export default function ServicesHerniasTreatmentPage() {
  const { pages } = content;

  return (
    <PageShell title={pages.services.herniasTreatment.title} subtitle={pages.services.herniasTreatment.subtitle} />
  );
}
