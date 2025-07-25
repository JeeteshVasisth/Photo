import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { type Photo } from "@shared/schema";
import { getAspectRatioClass } from "@/lib/photo-config";
import { Skeleton } from "@/components/ui/skeleton";

export function PhotoGrid() {
  const { data: photos, isLoading, error } = useQuery<Photo[]>({
    queryKey: ["/api/photos"],
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="photo-grid-loading">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="aspect-square rounded-lg" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12" data-testid="photo-grid-error">
        <p className="text-red-500">Failed to load photos. Please try again.</p>
      </div>
    );
  }

  if (!photos || photos.length === 0) {
    return (
      <div className="text-center py-12" data-testid="photo-grid-empty">
        <p className="portfolio-neutral-dark">No photos available.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="photo-grid">
      {photos.map((photo) => (
        <Link key={photo.id} href={`/photo/${photo.id}`} data-testid={`link-photo-${photo.id}`}>
          <div className="group cursor-pointer">
            <div className={`relative overflow-hidden rounded-lg bg-gray-100 ${getAspectRatioClass(photo.aspectRatio)}`}>
              <img 
                src={photo.imageUrl}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-testid={`img-photo-${photo.id}`}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="font-medium mb-1" data-testid={`text-photo-title-${photo.id}`}>
                  {photo.title}
                </h4>
                <p className="text-sm text-gray-200" data-testid={`text-photo-category-${photo.id}`}>
                  {photo.category}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
