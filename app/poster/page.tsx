import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Campaign Poster | Trisha Pal" };

export default function PosterPage() {
  return (
    <section className="min-h-[70vh] bg-surface-container-low px-6 py-12">
      <div className="max-w-xl mx-auto flex flex-col items-center gap-6">
        <h1 className="text-headline-lg">Campaign Poster</h1>

        {/* Set width/height to your image's real pixel size */}
        <Image
          src="/poster.png"
          alt="Trisha Pal, candidate for Computer Club President: campaign poster"
          width={1100}
          height={1546}
          priority
          className="w-full h-auto rounded-xl shadow-md"
        />

        <div className="flex gap-3">
          <a
            href="/poster.png"
            download="trisha-pal-poster.png"
            className="inline-flex items-center h-10 px-4 rounded-sm bg-primary text-on-primary text-body-sm hover:bg-secondary transition-colors"
          >
            Download
          </a>
          <Link
            href="/"
            className="inline-flex items-center h-10 px-4 rounded-sm bg-white text-body-sm hover:bg-surface-container transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}