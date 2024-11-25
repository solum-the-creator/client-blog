'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Heading, Input } from '@solumzy/ui-lib-client-blog';
import { useTranslations } from 'next-intl';

import { emailConfig } from '@/constants/email-config';

import { SubscribeFormData, subscribeSchema } from './subscribe-schema';

import styles from './subscribe-block.module.scss';

export const SubscribeBlock = () => {
  const t = useTranslations('Footer.subscribeBlock');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SubscribeFormData>({
    resolver: zodResolver(subscribeSchema),
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit = async (data: SubscribeFormData) => {
    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.confirmationTemplateId,
        { user_email: data.email },
        emailConfig.publicKey,
      );

      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  useEffect(() => {
    if (status === 'success') {
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }
  }, [status]);

  const errorText = status === 'error' ? t('errorText') : null;

  return (
    <div className={styles.subscribeBlock}>
      <Heading level={2} colorVariant="light" className={styles.title}>
        {t('title')}
      </Heading>
      <div className={styles.formBlock}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder={t('inputPlaceholder')}
            type="email"
            fullWidth={true}
            className={styles.input}
            error={errorText || errors.email?.message}
            {...register('email')}
            disabled={isSubmitting}
          />
          <Button size="large" type="submit" className={styles.button} disabled={isSubmitting}>
            {t('buttonText')}
          </Button>
        </form>
      </div>
    </div>
  );
};
