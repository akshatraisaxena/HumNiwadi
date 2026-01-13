export default function BreakingNews() {
  return (
    <div className="bg-red-700 text-white text-sm py-2">
      <div className="max-w-7xl mx-auto px-4 flex gap-4 overflow-hidden">
        <span className="font-semibold whitespace-nowrap">
          Breaking:
        </span>

        <div className="whitespace-nowrap animate-marquee">
          • Road expansion work begins in Niwadi block
          • Power supply restored after 6-hour outage
          • District-level sports meet announced
        </div>
      </div>
    </div>
  );
}
