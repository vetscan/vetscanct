'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import PageShell from '@/components/PageShell/PageShell';

export default function NewsPage() {
  const { t } = useLanguage();
  const pageData = t('pages.news');

  return (
    <PageShell title={pageData.title} subtitle={pageData.subtitle} />
  );
}
