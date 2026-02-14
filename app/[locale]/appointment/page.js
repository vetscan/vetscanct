'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import PageShell from '@/components/PageShell/PageShell';
import ContactForm from '@/components/ContactForm/ContactForm';

export default function AppointmentPage() {
  const { t } = useLanguage();
  const pageData = t('pages.appointment');

  return (
    <PageShell title={pageData.title} subtitle={pageData.subtitle}>
      <ContactForm />
    </PageShell>
  );
}
