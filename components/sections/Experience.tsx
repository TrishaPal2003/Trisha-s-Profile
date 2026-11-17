
"use client";

import Section from "@/components/Section";
import Icon from "@/components/Icon";
import { useLanguage } from "@/i18n/LanguageProvider";

const itemIcons = [
  "trending_up",
  "layers",
  "public",
  "psychology",
  "smart_toy",
];

export default function Experience() {
  const { dictionary } = useLanguage();
  const experience = dictionary.experience;

  return (
    <Section
      eyebrow={experience.eyebrow}
      title={experience.title}
      text={experience.introduction}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experience.items.map((x, i) => (
          <div
            key={x.title}
            className={`bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col gap-6 group ${
              experience.items.length % 2 === 1 &&
              i === experience.items.length - 1
                ? "md:col-span-2"
                : ""
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="px-2.5 py-0.5 rounded-full bg-surface-container-low text-secondary font-mono text-label-caps">
                {x.category}
              </span>

              <span className="font-mono text-mono-code text-on-surface-variant whitespace-nowrap">
                {x.meta}
              </span>
            </div>

            <div>
              <h3 className="text-headline-md group-hover:text-secondary transition-colors">
                {x.title}
              </h3>

              <p className="font-mono text-body-sm text-secondary mt-0.5">
                {x.subtitle}
              </p>
            </div>

            <p className="text-body-md text-on-surface-variant">
              {x.description}
            </p>

            <div className="bg-surface-container-low p-4 rounded-lg flex items-center justify-between gap-4">
              <div className="flex flex-col">
                <span className="font-mono text-label-caps text-on-surface-variant">
                  {x.label}
                </span>

                <span className="font-mono text-mono-code font-semibold">
                  {x.value}
                </span>
              </div>

              <Icon
                name={itemIcons[i]}
                className="text-secondary text-[24px] shrink-0"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {x.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-mono text-label-caps"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
