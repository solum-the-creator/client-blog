import styles from './loading-spinner.module.scss';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader} />
    </div>
  );
};
