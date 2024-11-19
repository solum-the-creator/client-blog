import { AllPostsSection } from './_components/all-posts-section/all-posts-section';
import { FeaturedPostSection } from './_components/featured-post-section/featured-post-section';

export default function BlogPage() {
  return (
    <>
      <FeaturedPostSection />
      <AllPostsSection />
    </>
  );
}
