export default function MainNewsCard({
  image,
  category,
  date,
  title,
  description
}) {
  return (
    <div className="rounded-xl border bg-[#F7F4EE] overflow-hidden">
      <img src={image} alt={title} className="h-56 w-full object-cover" />

      <div className="p-5">
        <span className="inline-block mb-2 px-3 py-1 text-xs rounded-full bg-green-700 text-white">
          {category}
        </span>

        <p className="text-xs text-gray-500 mb-2">{date}</p>

        <h3 className="font-semibold text-lg mb-2">{title}</h3>

        <p className="text-sm text-gray-700 mb-4">{description}</p>

        <span className="text-green-700 text-sm font-medium cursor-pointer">
          Read Full Story →
        </span>
      </div>
    </div>
  );
}
