
"use client";

import Section from "@/components/Section";
import Icon from "@/components/Icon";
import { useLanguage } from "@/i18n/LanguageProvider";

const pillarIcons = ["menu_book", "construction", "hub"];
const pillarBars = ["bg-secondary", "bg-primary", "bg-secondary"];

export default function MyVision() {
  const { dictionary } = useLanguage();
  const vision = dictionary.vision;

  return (
    <Section
      bg="low"
      eyebrow={vision.eyebrow}
      title={vision.title}
      text={vision.introduction}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {vision.pillars.map((pillar, index) => (
          <div
            key={pillar.number}
            className="bg-white p-8 rounded-xl shadow-sm flex flex-col justify-between gap-8 relative overflow-hidden hover:shadow-md transition-shadow"
          >
            <div
              className={`absolute top-0 inset-x-0 h-1.5 ${pillarBars[index]}`}
            />

            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-sm bg-surface-container flex items-center justify-center text-secondary">
                  <Icon
                    name={pillarIcons[index]}
                    className="text-[24px]"
                  />
                </span>

                <span className="font-mono text-mono-code text-on-surface-variant font-semibold">
                  {pillar.number} // {vision.pillarLabel}
                </span>
              </div>

              <h3 className="text-headline-md">{pillar.title}</h3>

              <p className="text-body-md text-on-surface-variant">
                {pillar.text}
              </p>

              <ul className="flex flex-col gap-3 pt-2">
                {pillar.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5"
                  >
                    <Icon
                      name="check_circle"
                      className="text-secondary text-[18px] mt-0.5"
                    />

                    <span className="text-body-sm font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3 bg-surface-container-low rounded-lg text-center font-mono text-mono-code text-on-surface-variant">
              {pillar.target}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
