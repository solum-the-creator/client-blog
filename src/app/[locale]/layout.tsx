import { Metadata } from 'next';
import { Sen } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';

import { Footer } from '@/components/footer/footer';
import { Header } from '@/components/header/header';
import { Locale, routing } from '@/i18n/routing';

import '@solumzy/ui-lib-client-blog/dist/index.css';
import '@/app/styles/global.scss';

const sen = Sen({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] });

export const generateStaticParams = () => {
  return routing.locales.map((locale) => ({ locale }));
};

export const metadata: Metadata = {
  title: 'Client Blog',
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: Locale;
  }>;
};

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={sen.className}>
        <Header />
        <NextIntlClientProvider messages={messages}>
          <main>{children}</main>
        </NextIntlClientProvider>
        <Footer />
      </body>
    </html>
  );
}
