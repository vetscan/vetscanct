import PageShell from '@/components/PageShell/PageShell';
import OncologyHelp from '@/components/OncologyHelp/OncologyHelp';
import content from '@/data/siteContent.json';

export default function OncologySupportPage() {
  const { pages } = content;

  return (
    <PageShell title={pages.oncologySupport.title} subtitle={pages.oncologySupport.subtitle}>
      <OncologyHelp />
    </PageShell>
  );
}
