import { z } from "zod";
export const loginFormSchema = z.object({
  email: z.string().min(1, "Please provide your email"),
  password: z.string().min(1, "Please provide your password"),
});

export const registerFormSchema = z
  .object({
    name: z.string().min(1, "Name must be at least 3 characters"),
    email: z.string().email("Please provide a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
