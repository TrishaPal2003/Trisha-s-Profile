
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Campaign Poster | Trisha Pal",
  description:
    "Official campaign poster of Trisha Pal, candidate for Computer Club President.",
};

export default function PosterPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6">

        <div className="w-full text-center">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Campaign Poster
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Trisha Pal — Computer Club President Candidate
          </p>
        </div>

        {/* Click poster to view original image */}
        <a
          href="/poster.png"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full overflow-hidden rounded-xl shadow-lg"
          aria-label="Open full-size campaign poster"
        >
          <Image
            src="/poster.png"
            alt="Trisha Pal official Computer Club President campaign poster"
            width={1640}
            height={1808}
            priority
            sizes="(max-width: 768px) 100vw, 896px"
            className="h-auto w-full"
          />
        </a>

        {/* Actual clickable campaign links */}
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center">

          <a
            href="https://vote.trishapal.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Visit Campaign Website →
          </a>

          <a
            href="/poster.png"
            download="trisha-pal-campaign-poster.png"
            className="inline-flex min-h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-800 transition hover:bg-gray-100"
          >
            Download Poster ↓
          </a>

          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-800 transition hover:bg-gray-100"
          >
            Back to Home
          </Link>

        </div>

        <p className="text-center text-xs text-gray-500">
          Official campaign poster · Computer Club Election 2026
        </p>

      </div>
    </main>
  );
}
