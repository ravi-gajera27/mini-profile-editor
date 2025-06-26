import { z } from 'zod';

// Zod schema for profile validation
export const profileSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  bio: z.string().max(500, 'Bio must be less than 500 characters').optional(),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^\+?[\d\s-()]+$/, 'Please enter a valid phone number').optional(),
  location: z.string().min(2, 'Location must be at least 2 characters').optional(),
});

// TypeScript type from Zod schema
export type ProfileData = z.infer<typeof profileSchema>;

// API response types
export interface ProfileResponse {
  success: boolean;
  data?: ProfileData;
  error?: string;
}