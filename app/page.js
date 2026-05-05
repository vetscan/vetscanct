// Этот файл намеренно пустой.
// Middleware перехватывает запрос на / и делает rewrite на /uk,
// где рендерится app/[locale]/page.js с locale=uk.
// Прямой редирект убран чтобы URL оставался чистым (без /uk).
export default function RootPage() {
  return null;
}
