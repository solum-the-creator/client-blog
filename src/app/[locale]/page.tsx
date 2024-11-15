import { getTranslations } from 'next-intl/server';

export default async function HomePage() {
  // const data = await fetch('https://673665a2aafa2ef22230699e.mockapi.io/api/v1/posts');
  // const posts = (await data.json()) as { id: number; title: string }[];

  const t = await getTranslations('HomePage');

  return (
    <div>
      <h1>{t('title')}</h1>
    </div>
  );
}
