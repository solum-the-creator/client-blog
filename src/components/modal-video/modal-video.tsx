'use client';

import { createPortal } from 'react-dom';
import { Heading } from '@solumzy/ui-lib-client-blog';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { usePathname, useRouter } from '@/i18n/routing';

import styles from './modal-video.module.scss';

type ModalVideoProps = {
  videoUrl: string;
};

export const ModalVideo: React.FC<ModalVideoProps> = ({ videoUrl }) => {
  const params = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();
  const showModal = params.get('showModal') === 'true';
  const t = useTranslations('Buttons');

  const closeModal = () => {
    router.push(pathName);
  };

  if (!showModal) {
    return null;
  }

  return createPortal(
    <div className={styles.overlay} onClick={closeModal}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <Heading level={3}>{t('video')}</Heading>
          <button className={styles.closeButton} onClick={closeModal}>
            &times;
          </button>
        </div>

        <div className={styles.content}>
          <iframe
            className={styles.video}
            src={videoUrl}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>,
    document.body,
  );
};
