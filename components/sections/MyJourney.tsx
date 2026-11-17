import Section from "@/components/Section";
import Icon from "@/components/Icon";

type Step = { year: string; eyebrow: string; title: string; text: string; icon: string };

// Edit the text freely. TODO: name the real project and confirm what the ~500 users refers to.
const steps: Step[] = [
  { year: "Year 1", eyebrow: "THE BEGINNING", title: "Building My Foundation", icon: "terminal",
    text: "Started from the basics: programming fundamentals, problem solving, and the habit of learning from my own errors. I know how intimidating the first year feels." },
  { year: "Year 2", eyebrow: "COMPETING", title: "ICPC Dhaka Regional 2024", icon: "emoji_events",
    text: "Took part in the ICPC Dhaka Regional with team MANATRI_CCNUST. I learned to solve problems under time pressure and to work as a team." },
  { year: "Year 3", eyebrow: "BUILDING FOR REAL", title: "Shipping a Real Project", icon: "rocket_launch",
    text: "Finished a real-world web application that about 500 users now use. Real users taught me more about quality and support than any assignment." },
  { year: "Year 3", eyebrow: "LEADING", title: "Joint Secretary, Programming Club", icon: "badge",
    text: "Serving as Joint Secretary of the Programming Club at CCN University of Science & Technology. I see directly what members need from the club." },
  { year: "Year 4", eyebrow: "NEXT FRONTIER", title: "Learning AI/ML", icon: "psychology",
    text: "Learning the fundamentals of AI/ML through coursework and small projects, so the club can offer tracks beyond web development and algorithms." },
  { year: "Now", eyebrow: "WHY I'M RUNNING", title: "A Club for Everyone", icon: "campaign",
    text: "The club should help every student, from beginners to contest programmers. I want to turn my own experience into regular, open programs for everyone." },
];

export default function MyJourney() {
  return (
    <Section bg="low" eyebrow="// BACKGROUND & MOTIVATION" title="My Journey in Technology & Community"
      text="From my first lines of code, to ICPC, to a real project with real users, and now to club leadership.">
      <div className="relative">
        {/* vertical line: left on mobile, centered on desktop */}
        <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-px -translate-x-1/2 bg-secondary/30" />

        {steps.map((s, i) => {
          const left = i % 2 === 0;
          const last = i === steps.length - 1;
          return (
            <div key={s.title} className="relative pl-12 md:pl-0 pb-12 md:pb-16 last:pb-0">
              {/* node on the line */}
              <span className="absolute top-10 left-4 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-[999px] bg-white border border-secondary/40 flex items-center justify-center z-10">
                <span className="w-3 h-3 rounded-[999px] bg-secondary" />
              </span>

              <div className={`md:w-1/2 ${left ? "md:pr-14" : "md:ml-auto md:pl-14"}`}>
                <article className={`relative overflow-hidden rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border ${last ? "bg-primary text-on-primary border-primary" : "bg-white border-surface-container-highest"}`}>
                  <span className={`absolute -top-2 right-4 text-[110px] leading-none font-bold select-none pointer-events-none ${last ? "text-white/10" : "text-on-surface/5"}`}>
                    0{i + 1}
                  </span>
                  <span className={`absolute top-6 right-6 w-10 h-10 rounded-[999px] border flex items-center justify-center ${last ? "border-white/30 text-on-primary" : "border-secondary/30 text-secondary"}`}>
                    <Icon name={s.icon} className="text-[20px]" />
                  </span>

                  <p className={`text-[40px] leading-none font-semibold tracking-tight ${last ? "text-secondary-fixed" : "text-secondary"}`}>{s.year}</p>
                  <p className={`mt-8 font-mono text-label-caps tracking-[0.2em] ${last ? "text-primary-fixed" : "text-on-surface-variant"}`}>{s.eyebrow}</p>
                  <h3 className="mt-1 text-headline-md font-semibold">{s.title}</h3>
                  <p className={`mt-4 text-body-sm ${last ? "text-on-primary/90" : "text-on-surface-variant"}`}>{s.text}</p>

                  <div className="mt-6 flex items-center gap-3">
                    <span className="w-10 h-0.5 bg-secondary" />
                    <span className={`font-mono text-label-caps tracking-widest ${last ? "text-primary-fixed" : "text-on-surface-variant"}`}>CHAPTER 0{i + 1}</span>
                  </div>
                </article>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}