'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import PageShell from '@/components/PageShell/PageShell';
import PricesServices from '@/components/PricesServices/PricesServices';
import ContactForm from '@/components/ContactForm/ContactForm';

export default function PricesPage() {
  const { t } = useLanguage();
  const pricesData = t('pages.prices');

  return (
    <>
      <PageShell title={pricesData.title} subtitle={pricesData.subtitle}>
        <PricesServices />
      </PageShell>
      <ContactForm />
    </>
  );
}
