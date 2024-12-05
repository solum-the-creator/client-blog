'use client';

import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, Select, TextArea } from '@solumzy/ui-lib-client-blog';
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

      toast.success(t('success'));
      reset();
    } catch {
      toast.error(t('error'));
    }
  };

  return (
    <div className={styles.contactForm}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)} data-testid="contact-form">
        <Input
          placeholder={t('name')}
          type="text"
          sizeVariant="large"
          fullWidth={true}
          error={errors.fullName?.message}
          {...register('fullName')}
          data-testid="contact-name-input"
        />
        <Input
          placeholder={t('email')}
          type="email"
          sizeVariant="large"
          fullWidth={true}
          error={errors.email?.message}
          {...register('email')}
          data-testid="contact-email-input"
        />
        <Select
          sizeVariant="large"
          fullWidth={true}
          defaultValue={queryOptions[0].value}
          options={queryOptions}
          error={errors.queryType?.message}
          {...register('queryType')}
          data-testid="contact-query-select"
        />
        <TextArea
          placeholder={t('message')}
          sizeVariant="large"
          fullWidth={true}
          rows={5}
          error={errors.message?.message}
          {...register('message')}
          data-testid="contact-message-textarea"
        />
        <Button
          size="large"
          type="submit"
          fullWidth={true}
          disabled={isSubmitting}
          data-testid="contact-submit-button"
        >
          {t('submit')}
        </Button>
      </form>
    </div>
  );
};
