import { type Photo } from "@shared/schema";

// Configuration for easy photo management
// To add new photos, simply add them to this array
export const PHOTO_CONFIG: Omit<Photo, "id">[] = [
  {
    title: "City Shadows",
    description: "Exploring the interplay of light and shadow in urban architecture, this photograph captures the geometric beauty found in everyday city structures.",
    category: "Architecture",
    date: "March 2024",
    location: "New York, NY",
    camera: "Sony A7R IV",
    imageUrl: "https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
    aspectRatio: "portrait",
    featured: true,
  },
  {
    title: "Natural Grace",
    description: "A study in natural light and human emotion, capturing authentic moments that tell a deeper story.",
    category: "Portrait",
    date: "February 2024",
    location: "Central Park, NY",
    camera: "Canon EOS R5",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1067",
    aspectRatio: "portrait",
    featured: false,
  },
  // Add more photos here following the same structure
];

// Utility functions for photo management
export const getAspectRatioClass = (aspectRatio: Photo["aspectRatio"]) => {
  switch (aspectRatio) {
    case "square":
      return "aspect-square";
    case "portrait":
      return "aspect-[4/5]";
    case "landscape":
      return "aspect-[5/4]";
    case "wide":
      return "aspect-[16/9]";
    case "tall":
      return "aspect-[3/5]";
    default:
      return "aspect-square";
  }
};
