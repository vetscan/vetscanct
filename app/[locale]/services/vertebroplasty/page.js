'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import PageShell from '@/components/PageShell/PageShell';

export default function ServicesVertebroplastyPage() {
  const { t } = useLanguage();
  const pageData = t('pages.services.vertebroplasty');

  return (
    <PageShell title={pageData.title} subtitle={pageData.subtitle} />
  );
}
