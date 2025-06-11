import { z } from 'zod';

export const apartmentSchema = z.object({
  title: z.string().max(200),
  details: z.string().max(100),
  createdAt: z.coerce.date(), 
  price: z.number(),
  imageUrl: z.string().max(200).nullable().optional(),
  bedrooms: z.number().int().nonnegative(),
  bathrooms: z.number().int().nonnegative(),
  isPetAllowed: z.boolean(),
  propertyTypeId: z.number().int().nonnegative(),
  locationId: z.number().int().nonnegative(),
  userId: z.number().int().nonnegative(),
});