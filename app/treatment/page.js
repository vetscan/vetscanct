import PageShell from '@/components/PageShell/PageShell';
import content from '@/data/siteContent.json';

export default function TreatmentPage() {
  const { pages } = content;

  return (
    <PageShell title={pages.treatment.title} subtitle={pages.treatment.subtitle} />
  );
}
