"use client";
import { useState } from "react";
import PhotoCard from "./PhotoCard";

const categories = [
  "All",
  "Events",
  "Ground Reports",
  "Culture",
  "People",
  "Places",
];

const photoData = [
  {
    id: 1,
    image: "/images/photo1.jpg",
    category: "Places",
    caption: "Golden light falls on ripening fields outside Niwadi.",
    date: "Jan 13, 2026 · 12:45 pm",
  },
  {
    id: 2,
    image: "/images/photo2.jpg",
    category: "Events",
    caption: "School children line up for the flag hoisting ceremony in Niwadi.",
    date: "Jan 11, 2026 · 3:35 pm",
  },
  {
    id: 3,
    image: "/images/photo3.jpg",
    category: "Ground Reports",
    caption: "A ground report team speaks with a farmer about crop losses.",
    date: "Jan 10, 2026 · 3:10 pm",
  },
  {
    id: 4,
    image: "/images/photo4.jpg",
    category: "Events",
    caption: "Local leaders address residents during a ward level meeting.",
    date: "Jan 9, 2026 · 11:50 am",
  },
  {
    id: 5,
    image: "/images/photo5.jpg",
    category: "Ground Reports",
    caption: "Reporter documents daily prices in Niwadi’s vegetable market.",
    date: "Jan 8, 2026 · 9:00 am",
  },
  {
    id: 6,
    image: "/images/photo6.jpg",
    category: "Culture",
    caption: "Dancers perform a traditional folk routine at a village festival.",
    date: "Jan 7, 2026 · 11:25 am",
  },
];

export default function PhotoGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredPhotos =
    activeCategory === "All"
      ? photoData
      : photoData.filter(
          (photo) => photo.category === activeCategory
        );
    
  return (
    <section className="bg-[#f7f4ef] py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-serif text-[#3a2f25]">
            Photo Gallery
          </h2>

          {/* Category Pills (UI only for now) */}
          <div className="flex flex-wrap gap-3 justify-end">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm border transition
                ${
                  activeCategory === cat
                    ? "bg-[#528547] text-white border-[#528547]"
                    : "bg-[#e6e1d8] text-[#2b2b2b] border-transparent hover:bg-[#d8d2c6]"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

        {/* Grid */}
            {filteredPhotos.length === 0 ? (
            <p className="text-center text-[#6b6b6b] mt-12">
                No photos available in this category.
            </p>
            ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPhotos.map((photo) => (
                <PhotoCard key={photo.id} photo={photo} />
                ))}
            </div>
            )}
      </div>
    </section>
  );
}
