'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import PageShell from '@/components/PageShell/PageShell';

export default function ServicesDiagnosticsTreatmentPage() {
  const { t } = useLanguage();
  const pageData = t('pages.services.diagnosticsTreatment');

  return (
    <PageShell title={pageData.title} subtitle={pageData.subtitle} />
  );
}
