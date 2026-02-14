'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import PageShell from '@/components/PageShell/PageShell';

export default function ServicesProfessorConsultationPage() {
  const { t } = useLanguage();
  const pageData = t('pages.services.professorConsultation');

  return (
    <PageShell title={pageData.title} subtitle={pageData.subtitle} />
  );
}
