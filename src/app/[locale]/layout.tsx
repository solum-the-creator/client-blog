import { Metadata } from 'next';
import { Sen } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';

import { Footer } from '@/components/footer/footer';
import { Header } from '@/components/header/header';
import { Locale, routing } from '@/i18n/routing';

import '@solumzy/ui-lib-client-blog/dist/index.css';
import '@/styles/global.scss';

type RootLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: Locale;
  }>;
};

const sen = Sen({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] });

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

  const messages = await getMessages();

  return (
    <html lang={currentLocal}>
      <body className={sen.className}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="main">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
