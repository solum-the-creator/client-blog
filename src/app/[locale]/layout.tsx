import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import BaseLayout from '@/components/base-layout/base-layout';
import { ToastContainer } from '@/components/toast-container/toast-container';
import { Locale, routing } from '@/i18n/routing';

import 'react-toastify/dist/ReactToastify.css';
import '@solumzy/ui-lib-client-blog/dist/index.css';
import '@/styles/global.scss';

type RootLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: Locale;
  }>;
};

export const generateStaticParams = () => {
  return routing.locales.map((locale) => ({ locale }));
};

export const metadata: Metadata = {
  title: 'Client Blog',
};

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale } = await params;

  const currentLocal = routing.locales.includes(locale) ? locale : routing.defaultLocale;

  setRequestLocale(currentLocal);

  return (
    <BaseLayout locale={currentLocal}>
      {children}
      <ToastContainer />
    </BaseLayout>
  );
}
