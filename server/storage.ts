import { type Photo, type PhotographerInfo } from "@shared/schema";

export interface IStorage {
  getPhotos(): Promise<Photo[]>;
  getPhoto(id: string): Promise<Photo | undefined>;
  getPhotographerInfo(): Promise<PhotographerInfo>;
}

export class MemStorage implements IStorage {
  private photos: Photo[] = [
    {
      id: "1",
      title: "City Shadows",
      description: "Exploring the interplay of light and shadow in urban architecture, this photograph captures the geometric beauty found in everyday city structures.",
      category: "Architecture",
      tags: ["urban", "shadows", "buildings", "geometric", "city"],
      date: "March 2024",
      location: "New York, NY",
      camera: "Sony A7R IV",
      lens: "24-70mm f/2.8",
      iso: "400",
      aperture: "f/8.0",
      shutterSpeed: "1/125s",
      focalLength: "35mm",
      imageUrl: "https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
      aspectRatio: "portrait",
      featured: true,
    },
    {
      id: "2",
      title: "Natural Grace",
      description: "A study in natural light and human emotion, capturing authentic moments that tell a deeper story.",
      category: "Portrait",
      tags: ["portrait", "natural light", "emotion", "people", "grace"],
      date: "February 2024",
      location: "Central Park, NY",
      camera: "Canon EOS R5",
      lens: "85mm f/1.4",
      iso: "200",
      aperture: "f/2.0",
      shutterSpeed: "1/200s",
      focalLength: "85mm",
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1067",
      aspectRatio: "portrait",
      featured: false,
    },
    {
      id: "3",
      title: "Mountain Serenity",
      description: "Capturing the tranquil beauty of mountain landscapes and the peace they bring to the soul.",
      category: "Landscape",
      tags: ["mountains", "landscape", "nature", "serenity", "peaceful"],
      date: "January 2024",
      location: "Colorado Rockies",
      camera: "Sony A7R IV",
      lens: "16-35mm f/2.8",
      iso: "100",
      aperture: "f/11.0",
      shutterSpeed: "1/60s",
      focalLength: "24mm",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
      aspectRatio: "square",
      featured: false,
    },
    {
      id: "4",
      title: "Urban Stories",
      description: "Street photography that captures the authentic moments and stories unfolding in urban environments.",
      category: "Street",
      tags: ["street", "urban", "stories", "candid", "life"],
      date: "December 2023",
      location: "Brooklyn, NY",
      camera: "Leica Q2",
      lens: "28mm f/1.7",
      iso: "800",
      aperture: "f/2.8",
      shutterSpeed: "1/250s",
      focalLength: "28mm",
      imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=640",
      aspectRatio: "landscape",
      featured: false,
    },
    {
      id: "5",
      title: "Botanical Beauty",
      description: "Exploring the intricate details and natural patterns found in botanical subjects.",
      category: "Nature",
      tags: ["flowers", "botanical", "nature", "macro", "details"],
      date: "November 2023",
      location: "Brooklyn Botanic Garden",
      camera: "Canon EOS R5",
      lens: "100mm f/2.8 Macro",
      iso: "160",
      aperture: "f/5.6",
      shutterSpeed: "1/100s",
      focalLength: "100mm",
      imageUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      aspectRatio: "landscape",
      featured: false,
    },
    {
      id: "6",
      title: "Geometric Forms",
      description: "Abstract architectural photography focusing on geometric patterns and modern design elements.",
      category: "Abstract",
      tags: ["geometric", "abstract", "patterns", "modern", "architecture"],
      date: "October 2023",
      location: "Manhattan, NY",
      camera: "Sony A7R IV",
      lens: "70-200mm f/2.8",
      iso: "320",
      aperture: "f/4.0",
      shutterSpeed: "1/160s",
      focalLength: "135mm",
      imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200",
      aspectRatio: "tall",
      featured: false,
    },
    {
      id: "7",
      title: "Moonlight Serenade",
      description: "A captivating night photograph showcasing the moon's ethereal glow over a tranquil cityscape.",
      category: "Night",
      tags: ["moon", "night", "cityscape", "ethereal", "moonlight"],
      date: "September 2023",
      location: "Manhattan, NY",
      camera: "Sony A7R IV",
      lens: "70-200mm f/2.8",
      iso: "1600",
      aperture: "f/4.0",
      shutterSpeed: "1/30s",
      focalLength: "200mm",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      aspectRatio: "landscape",
      featured: false,
    },
    {
      id: "8",
      title: "Cherry Blossoms",
      description: "Delicate pink cherry blossoms captured during the peak of spring bloom, showcasing nature's fleeting beauty.",
      category: "Nature",
      tags: ["flowers", "cherry blossoms", "spring", "pink", "delicate"],
      date: "April 2023",
      location: "Central Park, NY",
      camera: "Canon EOS R5",
      lens: "100mm f/2.8 Macro",
      iso: "200",
      aperture: "f/4.0",
      shutterSpeed: "1/250s",
      focalLength: "100mm",
      imageUrl: "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
      aspectRatio: "square",
      featured: true,
    },
  ];

  private photographerInfo: PhotographerInfo = {
    name: "Jeetesh Vasisth",
    bio: "With over a decade of experience in photography, I specialize in capturing the extraordinary in the ordinary. My work focuses on the intersection of urban landscapes, human emotion, and natural beauty. Based in New York City, I draw inspiration from the constantly changing urban environment and the stories that unfold within it. Each photograph is an invitation to see the world through a different lens.",
    location: "New Delhi, India",
    email: "jeeteshvasisth@gmail.com",
   // phone: "+91 7042821416",
    specialties: ["Architecture", "Street Photography", "Portraits", "Landscapes"],
  };

  async getPhotos(): Promise<Photo[]> {
    return this.photos;
  }

  async getPhoto(id: string): Promise<Photo | undefined> {
    return this.photos.find(photo => photo.id === id);
  }

  async getPhotographerInfo(): Promise<PhotographerInfo> {
    return this.photographerInfo;
  }
}

export const storage = new MemStorage();
