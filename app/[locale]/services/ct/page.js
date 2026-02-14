'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import PageShell from '@/components/PageShell/PageShell';

export default function ServicesCtPage() {
  const { t } = useLanguage();
  const pageData = t('pages.services.ct');

  return (
    <PageShell title={pageData.title} subtitle={pageData.subtitle} />
  );
}
