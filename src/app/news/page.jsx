"use client";

import { useState } from "react";
import NewsCard from "@/components/NewsCard";

const ALL_CATEGORIES = [
  "All",
  "Local",
  "Politics",
  "Administration",
  "Agriculture",
  "Education",
  "Health",
  "Employment",
];

export default function NewsPage() {
  const [search, setSearch] = useState("");

  const filteredCategories = ALL_CATEGORIES.filter(category =>
    category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="bg-white py-16">
      <div className="max-w-12xl mx-auto px-4">

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
          {filteredCategories.length > 0 ? (
            filteredCategories.map(category => (
              <button
                key={category}
                className="
                  px-4 py-2 text-sm border rounded-full
                  transition
                  hover:bg-[rgb(82_133_71)]
                  hover:text-white
                "
              >
                {category}
              </button>
            ))
          ) : (
            <p className="text-sm text-neutral-500">
              No categories found.
            </p>
          )}
        </div>

        {/* News List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <NewsCard
            image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            category="Local"
            date="Jan 14, 2026"
            title="Road Expansion Work Begins in Niwadi Block"
            excerpt="Construction work has started on the long-awaited road expansion project aimed at improving rural connectivity."
          />

          <NewsCard
            image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            category="Agriculture"
            date="Jan 13, 2026"
            title="Farmers Demand Compensation After Crop Damage"
            excerpt="Unseasonal rains have caused significant crop loss, prompting farmers to seek government relief."
          />

          <NewsCard
            image="https://images.unsplash.com/photo-1529070538774-1843cb3265df"
            category="Education"
            date="Jan 12, 2026"
            title="New Skill Centre Opens for Rural Youth"
            excerpt="The centre will provide training in solar technology, computer basics, and vocational skills."
          />
        </div>

      </div>
    </main>
  );
}
