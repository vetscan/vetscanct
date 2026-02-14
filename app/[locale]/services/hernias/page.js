'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import PageShell from '@/components/PageShell/PageShell';

export default function ServicesHerniasPage() {
  const { t } = useLanguage();
  const pageData = t('pages.services.hernias');

  return (
    <PageShell title={pageData.title} subtitle={pageData.subtitle} />
  );
}
