import { Button, Heading, Text } from '@solumzy/ui-lib-client-blog';

import { paths } from '@/constants/paths';
import { Link } from '@/i18n/routing';

import styles from './not-found-post.module.scss';

export const NotFoundPost: React.FC = () => {
  return (
    <div className={styles.notFoundPage}>
      <Heading level={1}>404</Heading>
      <Heading level={2}>Blog Post Not Found</Heading>
      <Text>The blog post you are looking for does not exist</Text>
      <Link href={paths.home}>
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
};
