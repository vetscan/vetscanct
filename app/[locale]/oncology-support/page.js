'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import PageShell from '@/components/PageShell/PageShell';
import OncologyHelp from '@/components/OncologyHelp/OncologyHelp';

export default function OncologySupportPage() {
  const { t } = useLanguage();
  const pageData = t('pages.oncologySupport');

  return (
    <PageShell title={pageData.title} subtitle={pageData.subtitle}>
      <OncologyHelp />
    </PageShell>
  );
}
