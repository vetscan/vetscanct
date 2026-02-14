import PageShell from '@/components/PageShell/PageShell';
import content from '@/data/siteContent.json';

export default function ServicesConsultationPage() {
  const { pages } = content;

  return (
    <PageShell title={pages.services.consultation.title} subtitle={pages.services.consultation.subtitle} />
  );
}
