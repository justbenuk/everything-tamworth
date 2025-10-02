import z from "zod";

export const stolenReportSchema = z.object({
  email: z.string().min(1, 'Please provide your email'),
  make: z.string().min(1),
  model: z.string().min(1),
  registration: z.string(),
  image: z.string(),
  published: z.boolean(),
  featured: z.boolean(),
  found: z.boolean()
})
