import PageShell from '@/components/PageShell/PageShell';
import MapSection from '@/components/MapSection/MapSection';
import ContactForm from '@/components/ContactForm/ContactForm';
import content from '@/data/siteContent.json';

export default function ContactsPage() {
  const { pages } = content;

  return (
    <PageShell title={pages.contacts.title} subtitle={pages.contacts.subtitle}>
      <MapSection />
      <ContactForm />
    </PageShell>
  );
}
