
import Section from "@/components/Section";
import Icon from "@/components/Icon";

type Step = {
  year: string;
  eyebrow: string;
  title: string;
  text: string;
  icon: string;
};

const steps: Step[] = [
  {
    year: "START",
    eyebrow: "THE BEGINNING",
    title: "Starting My Programming Journey",
    icon: "terminal",
    text: "I began learning programming in January 2024. Starting with the fundamentals, I gradually developed my problem-solving skills and learned to approach challenges through logic, patience, and consistent practice.",
  },
  {
    year: "ICPC",
    eyebrow: "COMPETING",
    title: "ICPC Dhaka Regional 2024",
    icon: "emoji_events",
    text: "I participated in the ICPC Dhaka Regional with team MANATRI_CCNUST. The experience introduced me to the intensity of competitive programming, teamwork under time pressure, and the value of learning from challenging problems.",
  },
  {
    year: "PROJECT",
    eyebrow: "BUILDING FOR REAL",
    title: "Narayanpur High School",
    icon: "rocket_launch",
    text: "I contributed to building Narayanpur High School, a real-world web application. Working on a project intended for real users helped me understand that software development goes beyond writing code—it also means solving practical problems and building something useful.",
  },
  {
    year: "LEADERSHIP",
    eyebrow: "GETTING INVOLVED",
    title: "Joint Secretary, Programming Club",
    icon: "badge",
    text: "I am serving as Joint Secretary of the Programming Club at CCN University of Science & Technology. This position has brought me closer to the student programming community and strengthened my interest in contributing to its growth.",
  },
  {
    year: "LEARNING",
    eyebrow: "EXPLORING NEW FIELDS",
    title: "Exploring AI & Machine Learning",
    icon: "psychology",
    text: "I have explored AI and Machine Learning through learning opportunities with Phitron. This experience has broadened my technical interests beyond traditional software development and competitive programming.",
  },
  {
    year: "NOW",
    eyebrow: "WHY I'M RUNNING",
    title: "Turning Experience into Contribution",
    icon: "campaign",
    text: "I believe I can bring meaningful value to the Computer Club through the skills I have developed and the connections I have built with people in the tech community. I want to use those opportunities to help students learn, collaborate, explore new fields, and grow together.",
  },
];

export default function MyJourney() {
  return (
    <Section
      bg="low"
      eyebrow="// BACKGROUND & MOTIVATION"
      title="My Journey in Technology & Community"
      text="Every experience has shaped how I learn, build, collaborate, and contribute to the computing community."
    >
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-px -translate-x-1/2 bg-secondary/30" />

        {steps.map((s, i) => {
          const left = i % 2 === 0;
          const last = i === steps.length - 1;

          return (
            <div
              key={s.title}
              className="relative pl-12 md:pl-0 pb-12 md:pb-16 last:pb-0"
            >
              {/* Timeline node */}
              <span className="absolute top-10 left-4 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border border-secondary/40 flex items-center justify-center z-10">
                <span className="w-3 h-3 rounded-full bg-secondary" />
              </span>

              <div
                className={`md:w-1/2 ${
                  left ? "md:pr-14" : "md:ml-auto md:pl-14"
                }`}
              >
                <article
                  className={`relative overflow-hidden rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow border ${
                    last
                      ? "bg-primary text-on-primary border-primary"
                      : "bg-white border-surface-container-highest"
                  }`}
                >
                  {/* Background chapter number */}
                  <span
                    aria-hidden="true"
                    className={`absolute -top-2 right-4 text-[110px] leading-none font-bold select-none pointer-events-none ${
                      last ? "text-white/10" : "text-on-surface/5"
                    }`}
                  >
                    0{i + 1}
                  </span>

                  {/* Icon */}
                  <span
                    className={`absolute top-6 right-6 w-10 h-10 rounded-full border flex items-center justify-center ${
                      last
                        ? "border-white/30 text-on-primary"
                        : "border-secondary/30 text-secondary"
                    }`}
                  >
                    <Icon name={s.icon} className="text-[20px]" />
                  </span>

                  {/* Timeline content */}
                  <p
                    className={`text-2xl md:text-[40px] leading-none font-semibold tracking-tight ${
                      last ? "text-secondary-fixed" : "text-secondary"
                    }`}
                  >
                    {s.year}
                  </p>

                  <p
                    className={`mt-8 font-mono text-label-caps tracking-[0.2em] ${
                      last ? "text-primary-fixed" : "text-on-surface-variant"
                    }`}
                  >
                    {s.eyebrow}
                  </p>

                  <h3 className="mt-1 text-headline-md font-semibold">
                    {s.title}
                  </h3>

                  <p
                    className={`mt-4 text-body-sm leading-relaxed ${
                      last ? "text-on-primary/90" : "text-on-surface-variant"
                    }`}
                  >
                    {s.text}
                  </p>

                  {/* Chapter label */}
                  <div className="mt-6 flex items-center gap-3">
                    <span className="w-10 h-0.5 bg-secondary" />
                    <span
                      className={`font-mono text-label-caps tracking-widest ${
                        last
                          ? "text-primary-fixed"
                          : "text-on-surface-variant"
                      }`}
                    >
                      CHAPTER 0{i + 1}
                    </span>
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
