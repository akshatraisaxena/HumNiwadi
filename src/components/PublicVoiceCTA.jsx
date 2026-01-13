import Link from "next/link";

export default function PublicVoiceCTA() {
  return (
    <section className="bg-green-50 border-t border-b border-green-200 py-12">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Have a Story to Share?
        </h2>

        <p className="text-neutral-700 max-w-2xl mx-auto mb-6">
          If you witness an important event, public issue, or inspiring story in your area,
          you can share it with the Hum Niwadi editorial team.
        </p>

        <Link
          href="/submit-news"
          className="inline-block bg-green-700 text-white px-6 py-3 rounded font-medium hover:bg-green-800"
        >
          Submit Your News
        </Link>

        <p className="text-xs text-neutral-500 mt-4">
          Submissions are reviewed by our editors before publication.
        </p>
      </div>
    </section>
  );
}
