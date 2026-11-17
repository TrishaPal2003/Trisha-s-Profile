
"use client";

import Section from "@/components/Section";
import Icon from "@/components/Icon";
import { useLanguage } from "@/i18n/LanguageProvider";

const stepIcons = [
  "terminal",
  "emoji_events",
  "rocket_launch",
  "badge",
  "psychology",
  "campaign",
];

export default function MyJourney() {
  const { dictionary } = useLanguage();
  const journey = dictionary.journey;

  return (
    <Section
      bg="low"
      eyebrow={journey.eyebrow}
      title={journey.title}
      text={journey.introduction}
    >
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-px -translate-x-1/2 bg-secondary/30" />

        {journey.steps.map((step, i) => {
          const left = i % 2 === 0;
          const last = i === journey.steps.length - 1;

          return (
            <div
              key={step.title}
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
                    <Icon
                      name={stepIcons[i]}
                      className="text-[20px]"
                    />
                  </span>

                  {/* Timeline content */}
                  <p
                    className={`text-2xl md:text-[40px] leading-none font-semibold tracking-tight ${
                      last ? "text-secondary-fixed" : "text-secondary"
                    }`}
                  >
                    {step.year}
                  </p>

                  <p
                    className={`mt-8 font-mono text-label-caps tracking-[0.2em] ${
                      last ? "text-primary-fixed" : "text-on-surface-variant"
                    }`}
                  >
                    {step.eyebrow}
                  </p>

                  <h3 className="mt-1 text-headline-md font-semibold">
                    {step.title}
                  </h3>

                  <p
                    className={`mt-4 text-body-sm leading-relaxed ${
                      last ? "text-on-primary/90" : "text-on-surface-variant"
                    }`}
                  >
                    {step.text}
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
                      {journey.chapterLabel} 0{i + 1}
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
