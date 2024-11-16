import postImage from '@public/post-image.jpg';

import { FeaturedPostCard } from '@/components/featured-post-card/featured-post-card';

export default function BlogPage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
      <FeaturedPostCard
        imageSrc={postImage.src}
        title="Step-by-step guide to choosing great font pairs"
        description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
        author="John Doe"
        date="May 20, 2023"
        imagePosition="side"
        withFeaturedText={true}
      />
    </div>
  );
}
