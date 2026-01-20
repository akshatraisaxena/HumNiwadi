import PhotoGallery from "@/components/Media/PhotoGallery";
import MediaShareCTA from "@/components/Media/MediaShareCTA";
export default function MediaPage() {
  return (
    <main className="bg-white">
      {/* Header */}
        <header className="mx-auto max-w-10xl py-20 text-center bg-[rgb(82_133_71)]">
          <h1 className="text-3xl font-semibold text-white mb-2">
            Media Gallery
          </h1>
          <p className="text-white ">
            Explore the visual stories of Niwadi through our curated photo and video galleries, and access our digital magazine archives.
          </p>
        </header>
        <PhotoGallery />
        <MediaShareCTA />
    </main>
  );
}

