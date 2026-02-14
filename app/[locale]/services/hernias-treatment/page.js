'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import PageShell from '@/components/PageShell/PageShell';

export default function ServicesHerniasTreatmentPage() {
  const { t } = useLanguage();
  const pageData = t('pages.services.herniasTreatment');

  return (
    <PageShell title={pageData.title} subtitle={pageData.subtitle} />
  );
}
