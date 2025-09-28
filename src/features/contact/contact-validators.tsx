import z from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Email is required'),
  contactNumber: z.string(),
  subject: z.string(),
  message: z.string().min(1, 'Message is required')
})
