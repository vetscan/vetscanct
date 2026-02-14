'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import PageShell from '@/components/PageShell/PageShell';

export default function ServicesTreatmentPage() {
  const { t } = useLanguage();
  const pageData = t('pages.services.treatment');

  return (
    <PageShell title={pageData.title} subtitle={pageData.subtitle} />
  );
}
