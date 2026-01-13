import Link from "next/link";

export default function SectionHeader({ title, linkText, linkHref }) {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-semibold">{title}</h2>

      {linkText && linkHref && (
        <Link
          href={linkHref}
          className="text-green-700 text-sm font-medium hover:underline"
        >
          {linkText} →
        </Link>
      )}
    </div>
  );
}
