import { z } from 'zod';

export const contactFormSchema = z.object({
  fullName: z.string().min(1, 'Full Name is required').max(100, 'Max length is 100 characters'),
  email: z.string().email('Invalid email address'),
  queryType: z.string().min(1, 'Query Type is required'),
  message: z.string().min(1, 'Message is required').max(500, 'Max length is 500 characters'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
