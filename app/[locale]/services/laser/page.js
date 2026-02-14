'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import PageShell from '@/components/PageShell/PageShell';

export default function ServicesLaserPage() {
  const { t } = useLanguage();
  const pageData = t('pages.services.laser');

  return (
    <PageShell title={pageData.title} subtitle={pageData.subtitle} />
  );
}
