
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";

const chips = [
  ["code", "Technical Experience", "Demonstrated Engineering"],
  ["handshake", "Practical Leadership", "Action Over Promises"],
  ["visibility", "Transparent Accounts", "Open Documentation"],
  ["diversity_3", "Inclusive for All Years", "1st to 4th Year Cohorts"],
];

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <section className="w-full px-4 py-10 sm:px-6 sm:py-14 md:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 sm:gap-12 lg:gap-16">

          {/* Hero introduction */}
          <div className="flex max-w-4xl flex-col items-start gap-4 sm:gap-5">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full bg-surface-container-low px-3 py-2 text-secondary shadow-sm">
              <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-secondary" />
              <span className="font-mono text-[10px] leading-relaxed tracking-wider sm:text-xs">
                OFFICIAL CANDIDACY • TRISHA PAL • COMPUTER CLUB PRESIDENT
              </span>
            </div>

            <h1 className="text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:text-display-hero">
              Learn.
              <br />
              Build.
              <br />
              <span className="text-secondary">Connect.</span>
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-on-surface-variant sm:text-lg">
              Let’s build a Computer Club where every student gets the
              opportunity to learn, create, collaborate, and grow—from
              first-year curiosity to competitive excellence and industry
              readiness.
            </p>
          </div>

          {/* Main content */}
          <div className="grid grid-cols-1 items-stretch gap-5 sm:gap-7 lg:grid-cols-12 lg:gap-8">

            {/* Candidate profile */}
            <div className="group flex min-w-0 flex-col justify-between rounded-xl bg-surface-container-low p-5 shadow-sm sm:p-7 lg:col-span-5 lg:p-8">
              <div className="flex flex-col gap-5 sm:gap-6">

                {/* Profile metadata */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-xs text-on-surface-variant sm:text-sm">
                    CANDIDATE PROFILE
                  </span>

                  <span className="rounded-full bg-surface-container px-3 py-1 font-mono text-[10px] tracking-wide sm:text-xs">
                    DEPT. OF CSE
                  </span>
                </div>

                {/* Candidate image */}
                <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-lg bg-surface-container sm:aspect-square lg:max-w-none">
                  <Image
                    src="/trisha1.jpeg"
                    alt="Trisha Pal, candidate for Computer Club President"
                    fill
                    priority
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 70vw, 40vw"
                    className="object-cover object-center grayscale contrast-125 transition-all duration-700 group-hover:grayscale-0"
                  />
                </div>
              </div>

              {/* Candidate identity */}
              <div className="mt-5 flex min-w-0 items-center justify-between gap-3 rounded-lg bg-white p-4 shadow-sm sm:p-5">
                <div className="min-w-0">
                  <p className="truncate text-lg font-semibold leading-tight sm:text-xl">
                    Trisha Pal
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-on-surface-variant sm:text-sm">
                    ICPC Dhaka Regional Participant
                    <span className="hidden sm:inline"> • </span>
                    <span className="block sm:inline">Full-Stack Developer</span>
                  </p>
                </div>

                <div
                  aria-label="Candidate profile"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-on-secondary"
                >
                  <Icon name="verified" className="text-lg" />
                </div>
              </div>
            </div>

            {/* Campaign platform */}
            <div className="flex min-w-0 flex-col justify-between gap-8 rounded-xl bg-white p-5 shadow-sm sm:p-7 md:p-9 lg:col-span-7 lg:p-12">
              <div className="flex flex-col gap-5 sm:gap-6">

                {/* Platform label */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="h-3 w-3 shrink-0 rounded-full bg-secondary" />
                  <span className="font-mono text-xs leading-relaxed text-on-surface-variant sm:text-sm">
                    PLATFORM DECLARATION // TERM 2024-2025
                  </span>
                </div>

                <h2 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-4xl">
                  A leadership model grounded in demonstrable execution,
                  technical merit, and open governance.
                </h2>

                <p className="text-sm leading-7 text-on-surface-variant sm:text-base">
                  University clubs should not be exclusive circles reserved
                  for established veterans or disconnected figureheads. I am
                  stepping forward to turn our Computer Club into a platform
                  where freshmen find patient mentors, seniors develop
                  practical projects, and competitive programmers train with
                  structural backing.
                </p>

                {/* Campaign pillars */}
                <div className="grid grid-cols-1 gap-3 pt-1 sm:grid-cols-2">
                  {chips.map(([icon, title, subtitle]) => (
                    <div
                      key={title}
                      className="flex min-w-0 items-start gap-3 rounded-lg bg-surface-container-low p-3 sm:p-4"
                    >
                      <Icon
                        name={icon}
                        className="mt-0.5 shrink-0 text-xl text-secondary"
                      />

                      <div className="min-w-0">
                        <p className="break-words text-sm font-semibold leading-snug">
                          {title}
                        </p>
                        <p className="mt-1 break-words font-mono text-[10px] leading-relaxed text-on-surface-variant sm:text-xs">
                          {subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation actions */}

              <div className="flex flex-col gap-3 border-t border-surface-container-highest pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <Link
                  href="/my-vision"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm text-on-primary shadow-md transition-all hover:bg-secondary active:scale-[0.98] sm:w-auto"
                >
                  Explore My Vision
                  <Icon name="arrow_downward" className="text-lg" />
                </Link>

                <Link
                  href="/my-journey"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm bg-surface-container-low px-5 py-3 text-sm transition-all hover:bg-surface-container hover:text-secondary active:scale-[0.98] sm:w-auto"
                >
                  Meet Your Candidate
                  <Icon name="read_more" className="text-lg" />
                </Link>

                <a
                  href="https://trishapal.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm border border-secondary/30 px-5 py-3 text-sm text-secondary transition-all hover:bg-surface-container-low active:scale-[0.98] sm:w-auto"
                >
                  Visit My Portfolio
                  <Icon name="open_in_new" className="text-lg" />
                </a>

                <div className="flex items-center justify-center gap-2 pt-2 sm:ml-auto sm:pt-0">
                  <span className="font-mono text-xs text-on-surface-variant">
                    VOTE TRISHA PAL
                  </span>
                  <Icon name="how_to_reg" className="text-base text-secondary" />
                </div>
              {/* </div> */}


                <div className="flex items-center justify-center gap-2 pt-2 sm:ml-auto sm:pt-0">
                  <span className="font-mono text-xs text-on-surface-variant">
                    VOTE TRISHA PAL
                  </span>
                  <Icon
                    name="how_to_reg"
                    className="text-base text-secondary"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
