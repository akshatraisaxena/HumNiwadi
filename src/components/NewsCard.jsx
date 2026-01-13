export default function NewsCard({
  image,
  category,
  date,
  title,
  excerpt,
}) {
  return (
    <article className="border rounded-lg overflow-hidden bg-white">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2">
          <span className="bg-neutral-100 px-2 py-1 rounded">
            {category}
          </span>
          <span>{date}</span>
        </div>

        <h3 className="text-lg font-semibold mb-2">
          {title}
        </h3>

        <p className="text-sm text-neutral-600">
          {excerpt}
        </p>
      </div>
    </article>
  );
}
