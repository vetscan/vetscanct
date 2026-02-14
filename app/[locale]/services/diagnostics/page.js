import PageShell from '@/components/PageShell/PageShell';
import content from '@/data/siteContent.json';

export default function ServicesDiagnosticsPage() {
  const { pages } = content;

  return (
    <PageShell title={pages.services.diagnostics.title} subtitle={pages.services.diagnostics.subtitle} />
  );
}
