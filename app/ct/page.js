import PageShell from '@/components/PageShell/PageShell';
import content from '@/data/siteContent.json';

export default function CtPage() {
  const { pages } = content;

  return (
    <PageShell title={pages.ct.title} subtitle={pages.ct.subtitle} />
  );
}
