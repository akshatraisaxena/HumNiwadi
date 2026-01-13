export default function PeopleCard({
  image,
  tag,
  name,
  title,
  description,
}) {
  return (
    <article className="border rounded-lg bg-white p-6 text-center">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto object-cover mb-4"
      />

      <span className="inline-block text-xs bg-neutral-100 px-3 py-1 rounded mb-3">
        {tag}
      </span>

      <h3 className="text-lg font-semibold">{name}</h3>

      <p className="text-sm text-neutral-500 mb-2">{title}</p>

      <p className="text-sm text-neutral-600">
        {description}
      </p>
    </article>
  );
}
