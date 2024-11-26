import { ReactNode } from 'react';
import { Sen } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import { Footer } from '../footer/footer';
import { Header } from '../header/header';

import '@/styles/global.scss';

const sen = Sen({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] });

type Props = {
  children: ReactNode;
  locale: string;
};

export default async function BaseLayout({ children, locale }: Props) {
  const messages = await getMessages();

  return (
    <html className="h-full" lang={locale}>
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
