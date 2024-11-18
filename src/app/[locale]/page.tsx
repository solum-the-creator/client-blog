import { AboutSection } from './_components/about-section/about-section';
import { AuthorsSection } from './_components/authors-section/authors-section';
import { CategorySection } from './_components/category-section/category-section';
import { FeaturedLogoSection } from './_components/featured-logo-section/featured-logo-section';
import { HeroSection } from './_components/hero-section/hero-section';
import { PostsSection } from './_components/posts-section/posts-section';
import { SpecialSection } from './_components/special-section/special-section';
import { TestimonialsSection } from './_components/testimonials-section/testimonials-section';

export default async function HomePage() {
  // const data = await fetch('https://673665a2aafa2ef22230699e.mockapi.io/api/v1/posts');
  // const posts = (await data.json()) as { id: number; title: string }[];

  return (
    <>
      <HeroSection />
      <PostsSection />
      <AboutSection />
      <CategorySection />
      <SpecialSection />
      <AuthorsSection />
      <FeaturedLogoSection />
      <TestimonialsSection />
    </>
  );
}
