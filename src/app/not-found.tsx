import BaseLayout from '@/components/base-layout/base-layout';
import { routing } from '@/i18n/routing';

export default function GlobalNotFound() {
  return (
    <BaseLayout locale={routing.defaultLocale}>
      <section>
        <h1>404</h1>
        <p>Global Page not found</p>
      </section>
    </BaseLayout>
  );
}
