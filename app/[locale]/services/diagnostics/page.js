'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import PageShell from '@/components/PageShell/PageShell';

export default function ServicesDiagnosticsPage() {
  const { t } = useLanguage();
  const pageData = t('pages.services.diagnostics');

  return (
    <PageShell title={pageData.title} subtitle={pageData.subtitle} />
  );
}
