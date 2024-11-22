'use client';

import { ChangeEvent, useTransition } from 'react';
import { Select } from '@solumzy/ui-lib-client-blog';
import { useLocale } from 'next-intl';

import { Locale, routing, usePathname, useRouter } from '@/i18n/routing';

import styles from './locale-switcher.module.scss';

export const LocaleSwitcher: React.FC = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const locale = useLocale();

  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value as Locale;
    startTransition(() => {
      router.replace({ pathname }, { locale: nextLocale });
    });
  };

  const options = routing.locales.map((locale) => ({
    label: locale,
    value: locale,
  }));

  return (
    <Select
      defaultValue={locale}
      disabled={isPending}
      onChange={onSelectChange}
      options={options}
      colorVariant="secondary"
      className={styles.select}
    />
  );
};
