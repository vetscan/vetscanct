'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import PageShell from '@/components/PageShell/PageShell';

export default function ServicesConsultationPage() {
  const { t } = useLanguage();
  const pageData = t('pages.services.consultation');

  return (
    <PageShell title={pageData.title} subtitle={pageData.subtitle} />
  );
}
