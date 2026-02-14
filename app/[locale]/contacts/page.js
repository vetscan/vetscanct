'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import PageShell from '@/components/PageShell/PageShell';
import MapSection from '@/components/MapSection/MapSection';
import ContactForm from '@/components/ContactForm/ContactForm';

export default function ContactsPage() {
  const { t } = useLanguage();
  const contactsData = t('pages.contacts');

  return (
    <PageShell title={contactsData.title} subtitle={contactsData.subtitle}>
      <MapSection />
      <ContactForm />
    </PageShell>
  );
}
