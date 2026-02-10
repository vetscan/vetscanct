import PageShell from '@/components/PageShell/PageShell';
import PricesServices from '@/components/PricesServices/PricesServices';
import content from '@/data/siteContent.json';

export default function PricesPage() {
  const { pages } = content;

  return (
    <PageShell title={pages.prices.title} subtitle={pages.prices.subtitle}>
      <PricesServices />
    </PageShell>
  );
}
