import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export type Locale = 'en-US' | 'de-DE';

export const routing = defineRouting<Locale[]>({
  locales: ['en-US', 'de-DE'],
  defaultLocale: 'en-US',
});

export const { Link, redirect, usePathname, getPathname, useRouter } = createNavigation(routing);
