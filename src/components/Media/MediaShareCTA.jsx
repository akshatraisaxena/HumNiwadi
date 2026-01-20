export default function MediaShareCTA() {
  return (
    <section className="bg-[#528547] py-16">
      <div className="max-w-5xl mx-auto px-6 text-center text-white">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7h4l2-2h6l2 2h4v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"
              />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
        </div>
        {/* Text */}
        <h3 className="text-3xl font-serif mb-4">
          Share Your Photos & Videos
        </h3>

        <p className="max-w-2xl mx-auto text-white/90 mb-8">
          Have a moment from Niwadi you want the world to see?  
          Share your photos or videos and become part of our community story.
        </p>

        {/* Button */}
        <button
          className="px-8 py-3 rounded-full bg-white text-[#528547] font-medium opacity-80"
        >
          Upload Coming Soon
        </button>
      </div>
    </section>
  );
}
