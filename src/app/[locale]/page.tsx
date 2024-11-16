import { HeroSection } from './_components/hero-section/hero-section';
import { PostsSection } from './_components/posts-section/posts-section';

export default async function HomePage() {
  // const data = await fetch('https://673665a2aafa2ef22230699e.mockapi.io/api/v1/posts');
  // const posts = (await data.json()) as { id: number; title: string }[];

  return (
    <>
      <HeroSection />
      <PostsSection />
    </>
  );
}
