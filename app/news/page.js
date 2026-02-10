import PageShell from '@/components/PageShell/PageShell';
import content from '@/data/siteContent.json';

export default function NewsPage() {
  const { pages } = content;

  return (
    <PageShell title={pages.news.title} subtitle={pages.news.subtitle} />
  );
}
