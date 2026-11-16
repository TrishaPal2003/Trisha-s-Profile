import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";

const chips = [
  ["code", "Technical Experience", "Demonstrated Engineering"],
  ["handshake", "Practical Leadership", "Action Over Promises"],
  ["visibility", "Transparent Accounts", "Open Documentation"],
  ["diversity_3", "Inclusive for All Years", "1st to 4th Year Cohorts"],
];
const stats = [["100%", "COMMUNITY FOCUS"], ["7", "CONCRETE INITIATIVES"], ["4", "YEARS INCLUSIVE"]];

export default function Home() {
  return (
    <section className="w-full py-16 md:py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 lg:gap-16">
        <div className="flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low text-secondary font-mono text-label-caps tracking-wider shadow-sm">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            OFFICIAL CANDIDACY • TRISHA PAL • COMPUTER CLUB PRESIDENT
          </div>
          <h1 className="text-display-hero-mobile md:text-display-hero max-w-4xl">
            Learn.<br />Build.<br /><span className="text-secondary">Connect.</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl">
            Let’s build a Computer Club where every student gets the opportunity to learn, create, collaborate, and grow—from first-year curiosity to competitive excellence and industry readiness.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 bg-surface-container-low rounded-xl p-8 flex flex-col justify-between shadow-sm group">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-mono-code text-on-surface-variant">BALLOT REF: #TP-2024</span>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container font-mono text-label-caps">DEPT. OF CSE</span>
              </div>
              <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-surface-container">
                {/* Put your photo at public/trisha.jpg */}
                <Image src="/trisha.jpg" loading="eager" alt="Trisha Pal" fill sizes="(min-width:1024px) 40vw, 100vw"
                  className="object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute bottom-3 inset-x-3 bg-white/95 backdrop-blur-md p-3 rounded-lg shadow-sm flex items-center justify-between">
                  <div>
                    <p className="text-headline-sm leading-tight">Trisha Pal</p>
                    <p className="text-body-sm text-on-surface-variant">ICPC Regionalist • Full-Stack Builder</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-on-secondary shrink-0">
                    <Icon name="verified" className="text-[18px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-white rounded-lg p-4 shadow-sm flex items-center justify-around gap-2 text-center">
              {stats.map(([n, l]) => (
                <div key={l}>
                  <p className="text-headline-md font-semibold">{n}</p>
                  <p className="font-mono text-label-caps text-on-surface-variant">{l}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 bg-white rounded-xl p-8 lg:p-12 flex flex-col justify-between shadow-sm">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-secondary" />
                <span className="font-mono text-mono-code text-on-surface-variant">PLATFORM DECLARATION // TERM 2024-2025</span>
              </div>
              <h2 className="text-headline-lg">A leadership model grounded in demonstrable execution, technical merit, and open governance.</h2>
              <p className="text-body-md text-on-surface-variant">
                University clubs should not be exclusive circles reserved for established veterans or disconnected figureheads. I am stepping forward to turn our Computer Club into a high-octane launchpad where freshmen find patient mentors, seniors convert capstones into startups, and competitive coders train with structural backing.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {chips.map(([icon, t, s]) => (
                  <div key={t} className="p-3 rounded-lg bg-surface-container-low flex items-center gap-3">
                    <Icon name={icon} className="text-secondary text-[20px]" />
                    <div>
                      <p className="text-body-sm font-semibold">{t}</p>
                      <p className="font-mono text-label-caps text-on-surface-variant">{s}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-8 flex flex-wrap items-center gap-4">
              <Link href="/my-vision" className="inline-flex items-center h-12 px-6 rounded-sm bg-primary text-on-primary text-body-sm hover:bg-secondary transition-all shadow-md active:scale-95">
                Explore My Vision <Icon name="arrow_downward" className="ml-2 text-[18px]" />
              </Link>
              <Link href="/my-journey" className="inline-flex items-center h-12 px-6 rounded-sm bg-surface-container-low text-body-sm hover:bg-surface-container hover:text-secondary transition-all shadow-sm">
                Meet Your Candidate <Icon name="read_more" className="ml-2 text-[18px]" />
              </Link>
              <div className="ml-auto hidden md:flex items-center gap-2">
                <span className="font-mono text-mono-code text-on-surface-variant">VOTE TRISHA PAL</span>
                <Icon name="how_to_reg" className="text-secondary text-[16px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
