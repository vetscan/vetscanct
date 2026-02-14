'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import PageShell from '@/components/PageShell/PageShell';
import PricesServices from '@/components/PricesServices/PricesServices';

export default function PricesPage() {
  const { t } = useLanguage();
  const pricesData = t('pages.prices');

  return (
    <PageShell title={pricesData.title} subtitle={pricesData.subtitle}>
      <PricesServices />
    </PageShell>
  );
}
