import postImage from '@public/post-image.jpg';

import { FeaturedPostCard } from '@/components/featured-post-card/featured-post-card';

import { HeroSection } from './_components/hero-section/hero-section';

export default async function HomePage() {
  // const data = await fetch('https://673665a2aafa2ef22230699e.mockapi.io/api/v1/posts');
  // const posts = (await data.json()) as { id: number; title: string }[];

  return (
    <>
      <HeroSection />
      <div style={{ width: '35%' }}>
        <FeaturedPostCard
          author="John Doe"
          date="May 20, 2023"
          description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
          title="Step-by-step guide to choosing great font pairs"
          imageSrc={postImage.src}
        />
      </div>
    </>
  );
}
