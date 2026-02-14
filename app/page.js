import { redirect } from 'next/navigation';

export default function RootPage() {
  // Редирект на украинскую версию по умолчанию
  redirect('/uk');
}
