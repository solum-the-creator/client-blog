import { LoadingSpinner } from '@/components/loading-spinner/loading-spinner';

import styles from './loading.module.scss';

export default function Loading() {
  return (
    <div className={styles.loading}>
      <LoadingSpinner />
    </div>
  );
}
