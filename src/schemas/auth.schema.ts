import {z} from 'zod'

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email format")
    .min(5, "Minimum 5 characters")
    .max(50, "Maximum 50 characters"),

  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Minimum 6 characters")
    .max(50, "Maximum 50 characters")
    .regex(/[A-Z]/, "Must include at least one uppercase letter")
    .regex(/[a-z]/, "Must include at least one lowercase letter")
    .regex(/[0-9]/, "Must include at least one number"),
});

export const registerSchema = z.object({
  fullName: z.string().min(1, "name is required").max(50, "max 50 characters"),

  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Minimum 6 characters")
    .max(50, "Maximum 50 characters")
    .regex(/[A-Z]/, "Must include at least one uppercase letter")
    .regex(/[a-z]/, "Must include at least one lowercase letter")
    .regex(/[0-9]/, "Must include at least one number"),

  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email format")
    .min(5, "Minimum 5 characters")
    .max(50, "Maximum 50 characters"),
});
