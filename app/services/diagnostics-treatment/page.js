import PageShell from '@/components/PageShell/PageShell';
import content from '@/data/siteContent.json';

export default function ServicesDiagnosticsTreatmentPage() {
  const { pages } = content;

  return (
    <PageShell title={pages.services.diagnosticsTreatment.title} subtitle={pages.services.diagnosticsTreatment.subtitle} />
  );
}
