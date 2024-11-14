import { getRequestConfig } from 'next-intl/server';

import { Locale, routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale: Locale = (await requestLocale) as Locale;

  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./locales/${locale}.json`)).default,
  };
});
