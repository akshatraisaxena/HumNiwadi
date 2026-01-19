export default function MediaCard({ image, title, type }) {
  return (
    <article className="relative overflow-hidden rounded-lg border bg-black">
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover opacity-80"
      />

      {type === "video" && (
        <span className="absolute top-3 left-3 bg-black/70 text-white text-xs px-3 py-1 rounded">
          Video
        </span>
      )}

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <h3 className="text-white text-sm font-medium">
          {title}
        </h3>
      </div>
    </article>
  );
}
