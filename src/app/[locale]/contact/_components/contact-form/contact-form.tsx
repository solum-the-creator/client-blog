'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, Select, Text, TextArea } from '@solumzy/ui-lib-client-blog';
import { useTranslations } from 'next-intl';

import { emailConfig } from '@/constants/email-config';
import { queryOptions } from '@/constants/query-options';

import { ContactFormData, contactFormSchema } from './contact-form-schema';

import styles from './contact-form.module.scss';

export const ContactForm = () => {
  const t = useTranslations('ContactPage.contactForm');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit = async (data: ContactFormData) => {
    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.userTemplateId,
        {
          from_name: data.fullName,
          email: data.email,
          message: data.message,
          queryType: data.queryType,
        },
        emailConfig.publicKey,
      );

      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.confirmationTemplateId,
        {
          to_name: data.fullName,
          user_email: data.email,
          user_message: data.message,
        },
        emailConfig.publicKey,
      );

      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  useEffect(() => {
    if (status !== 'idle') {
      const timer = setTimeout(() => setStatus('idle'), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className={styles.contactForm}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder={t('name')}
          type="text"
          sizeVariant="large"
          fullWidth={true}
          error={errors.fullName?.message}
          {...register('fullName')}
        />
        <Input
          placeholder={t('email')}
          type="email"
          sizeVariant="large"
          fullWidth={true}
          error={errors.email?.message}
          {...register('email')}
        />
        <Select
          sizeVariant="large"
          fullWidth={true}
          defaultValue={queryOptions[0].value}
          options={queryOptions}
          error={errors.queryType?.message}
          {...register('queryType')}
        />
        <TextArea
          placeholder={t('message')}
          sizeVariant="large"
          fullWidth={true}
          rows={5}
          error={errors.message?.message}
          {...register('message')}
        />
        <div className={styles.message}>
          {status === 'success' && <Text className={styles.successMessage}>{t('success')}</Text>}
          {status === 'error' && <Text className={styles.errorMessage}>{t('error')}</Text>}
        </div>
        <Button size="large" type="submit" fullWidth={true} disabled={isSubmitting}>
          {t('submit')}
        </Button>
      </form>
    </div>
  );
};
