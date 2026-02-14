'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import PageShell from '@/components/PageShell/PageShell';

export default function ServicesLaserVaporizationPage() {
  const { t } = useLanguage();
  const pageData = t('pages.services.laserVaporization');

  return (
    <PageShell title={pageData.title} subtitle={pageData.subtitle} />
  );
}
