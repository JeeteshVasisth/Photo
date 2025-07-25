import { z } from "zod";

export const photoSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  category: z.string(),
  date: z.string(),
  location: z.string(),
  camera: z.string(),
  imageUrl: z.string(),
  aspectRatio: z.enum(["square", "portrait", "landscape", "wide", "tall"]),
  featured: z.boolean().default(false),
});

export const photographerInfoSchema = z.object({
  name: z.string(),
  bio: z.string(),
  location: z.string(),
  email: z.string(),
  phone: z.string(),
  specialties: z.array(z.string()),
});

export type Photo = z.infer<typeof photoSchema>;
export type PhotographerInfo = z.infer<typeof photographerInfoSchema>;
