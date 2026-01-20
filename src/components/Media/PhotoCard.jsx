export default function PhotoCard({ photo }) {
  return (
    <div className="bg-[#fbf9f4] rounded-xl border border-[#ddd6c9] overflow-hidden">
      <img
        src={photo.image}
        alt={photo.caption}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">
        <span className="inline-block mb-3 w-full text-center px-4 py-1 text-sm rounded-full bg-[#5b874b] text-white">
          {photo.category}
        </span>

        <p className="text-[#3a2f25] mb-2">
          {photo.caption}
        </p>

        <p className="text-sm text-[#7a6f63]">
          {photo.date}
        </p>
      </div>
    </div>
  );
}
