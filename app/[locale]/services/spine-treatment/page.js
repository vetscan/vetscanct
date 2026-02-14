import PageShell from '@/components/PageShell/PageShell';
import content from '@/data/siteContent.json';

export default function ServicesSpineTreatmentPage() {
  const { pages } = content;

  return (
    <PageShell title={pages.services.spineTreatment.title} subtitle={pages.services.spineTreatment.subtitle} />
  );
}
