"use client";

import { useState, useEffect } from "react";
import MainNewsCard from "@/components/MainNewsCard";
import PublicVoiceCTA from "@/components/PublicVoiceCTA";

const ALL_CATEGORIES = [
  "All",
  "Local",
  "Politics",
  "Administration",
  "Agriculture",
  "Education",
  "Health",
  "Employment",
  "Culture",
  "Environment",
  "Infrastructure",
  "Technology",
  "Sports",
  "Business",
  "Tourism",
];

export default function NewsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredCategories = ALL_CATEGORIES.filter(category =>
    category.toLowerCase().includes(search.toLowerCase())
    
  );

  const newsData = [
  {
    image: "/images/news1.jpg",
    category: "Employment",
    date: "Jan 14, 2026",
    title: "Skill Centre Trains Local Youth for Solar Technician Jobs",
    description: "A new training programme is preparing youth in Niwadi to work as solar technicians for rooftop installations.",
  },
  {
    image: "/images/news2.jpg",
    category: "Agriculture",
    date: "Jan 13, 2026",
    title: "Organic Wheat Experiment Boosts Yields for Small Farmers",
    description: "Farmers experimenting with organic wheat report higher yields and improved soil health.",
  },
  {
  image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  category: "Local",
  date: "Jan 10, 2026",
  title: "Road Repair Work Accelerated Ahead of Monsoon",
  description:
    "Local administration speeds up road repair work to prevent damage during the upcoming monsoon season."
},
{
  image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
  category: "Education",
  date: "Jan 9, 2026",
  title: "Scholarship Program Launched for Rural Students",
  description:
    "A new district-level scholarship program aims to support meritorious students from economically weaker sections."
},
{
  image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5",
  category: "Health",
  date: "Jan 8, 2026",
  title: "Free Health Checkup Camp Benefits Hundreds",
  description:
    "Doctors from district hospital conducted free health checkups, benefiting over 500 villagers."
},
{
  image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
  category: "Agriculture",
  date: "Jan 7, 2026",
  title: "Farmers Adopt Drip Irrigation to Save Water",
  description:
    "Several farmers in Niwadi have shifted to drip irrigation, reducing water usage and improving crop yield."
},
{
  image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
  category: "Employment",
  date: "Jan 6, 2026",
  title: "Self-Help Groups Create New Livelihood Opportunities",
  description:
    "Women-led self-help groups are generating employment through small-scale local businesses."
},
{
  image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc",
  category: "Culture",
  date: "Jan 5, 2026",
  title: "Traditional Folk Festival Celebrated with Grandeur",
  description:
    "Artists and villagers gathered to celebrate Niwadi’s annual folk festival showcasing local traditions."
},
{
  image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
  category: "Administration",
  date: "Jan 4, 2026",
  title: "District Office Introduces Online Grievance Portal",
  description:
    "Residents can now submit complaints online, improving transparency and faster resolution."
}

];

const filteredNews = newsData.filter((item) => {
  const matchesCategory =
    activeCategory === "All" ||
    item.category.toLowerCase() === activeCategory.toLowerCase();

  const matchesSearch =
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.description.toLowerCase().includes(search.toLowerCase());

  return matchesCategory && matchesSearch;
});
useEffect(() => {
  setVisibleCount(6);
}, [search, activeCategory]);


return (
    <main className="bg-white ">
      <div className="max-w-12xl mx-auto ">

        {/* Header */}
        <header className="mx-auto max-w-10xl mb-8 py-20 text-center bg-[rgb(82_133_71)]">
          <h1 className="text-3xl font-semibold text-white mb-2">
            News from Niwadi
          </h1>
          <p className="text-white ">
            Stay informed with the most recent updates from your region covering politics, agriculture, education, and more.
          </p>
        </header>

        {/* Search Bar */}
        <div className="mb-6 max-w-6xl mx-auto bg-[rgb(248_246_242)] p-4 rounded-full flex">
          <input
            type="text"
            placeholder="Search new articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[rgb(82_133_71)] bg-white"
          />
          <button className="ml-2 px-4 py-2 bg-[rgb(82_133_71)] text-white rounded hover:bg-[rgb(65_106_57)]">
            Search
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-12 max-w-6xl mx-auto">
          {filteredCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full border transition-all duration-200
                ${
                  activeCategory === category
                    ? "bg-green-700 text-white border-green-700"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-green-100 hover:text-green-700"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

       {/* News List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
          {filteredNews.length === 0 ? (
            <p className="text-center col-span-full text-gray-500">
              No news found for this category.
            </p>
          ) : (
            filteredNews.slice(0, visibleCount).map((item, index) => (
              <MainNewsCard key={index} {...item} />
            ))  
          )}
        </div>

        {visibleCount < filteredNews.length && (
        <div className="text-center mt-10 mb-10">
        <button
         onClick={() => setVisibleCount((prev) => prev + 6)}
          className="px-8 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
        >
          Load More News
         </button>
        </div>
       )}
      <PublicVoiceCTA />
    </div>
    </main>
  );
}
