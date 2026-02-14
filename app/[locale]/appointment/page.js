import PageShell from '@/components/PageShell/PageShell';
import ContactForm from '@/components/ContactForm/ContactForm';
import content from '@/data/siteContent.json';

export default function AppointmentPage() {
  const { pages } = content;

  return (
    <PageShell title={pages.appointment.title} subtitle={pages.appointment.subtitle}>
      <ContactForm />
    </PageShell>
  );
}
