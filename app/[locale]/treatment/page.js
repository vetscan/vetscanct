'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import PageShell from '@/components/PageShell/PageShell';

export default function TreatmentPage() {
  const { t } = useLanguage();
  const treatmentData = t('pages.treatment');

  return (
    <PageShell title={treatmentData.title} subtitle={treatmentData.subtitle} />
  );
}
