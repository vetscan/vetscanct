import PageShell from '@/components/PageShell/PageShell';
import content from '@/data/siteContent.json';

export default function ServicesProfessorConsultationPage() {
  const { pages } = content;

  return (
    <PageShell title={pages.services.professorConsultation.title} subtitle={pages.services.professorConsultation.subtitle} />
  );
}
