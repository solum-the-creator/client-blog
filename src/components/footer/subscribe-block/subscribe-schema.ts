import z from 'zod';

export const subscribeSchema = z.object({
  email: z.string().nonempty('Email is required.').email('Please enter a valid email address.'),
});

export type SubscribeFormData = z.infer<typeof subscribeSchema>;
