import PageShell from '@/components/PageShell/PageShell';
import content from '@/data/siteContent.json';

export default function ServicesTreatmentPage() {
  const { pages } = content;

  return (
    <PageShell title={pages.services.treatment.title} subtitle={pages.services.treatment.subtitle} />
  );
}
