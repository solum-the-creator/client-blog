import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export type Locale = 'en' | 'de';

export const routing = defineRouting<Locale[]>({
  locales: ['en', 'de'],
  defaultLocale: 'en',
});

export const { Link, redirect, usePathname, getPathname, useRouter } = createNavigation(routing);
