import { JoinOurTeamSection } from '@/components/join-our-team-section/join-our-team-section';

import { AllPostsSection } from './_components/all-posts-section/all-posts-section';
import { CategorySection } from './_components/category-section/category-section';
import { FeaturedPostSection } from './_components/featured-post-section/featured-post-section';

export default function BlogPage() {
  return (
    <>
      <FeaturedPostSection />
      <AllPostsSection />
      <CategorySection />
      <JoinOurTeamSection />
    </>
  );
}
