
"use client";

import Section from "@/components/Section";
import Icon from "@/components/Icon";
import { useLanguage } from "@/i18n/LanguageProvider";

const principleIcons = [
  "hearing",
  "psychology",
  "account_tree",
  "chevron_left",
  "sync_alt",
  "account_balance_wallet",
];

export default function Leadership() {
  const { dictionary } = useLanguage();
  const leadership = dictionary.leadership;

  return (
    <Section
      bg="low"
      eyebrow={leadership.eyebrow}
      title={leadership.title}
      text={leadership.introduction}
    >
      <div className="bg-primary text-on-primary p-8 md:p-12 rounded-xl shadow-md relative overflow-hidden">
        <Icon
          name="format_quote"
          className="absolute -right-8 -bottom-8 text-[160px] text-on-primary/5 select-none pointer-events-none"
        />

        <div className="flex flex-col gap-4 max-w-3xl relative z-10">
          <Icon
            name="format_quote"
            className="text-secondary-fixed text-[36px]"
          />

          <p className="text-headline-md font-normal">
            “{leadership.statement}”
          </p>

          <div className="flex items-center gap-3 pt-2">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-bold font-mono">
              TP
            </div>

            <div>
              <p className="text-headline-sm font-semibold">
                {leadership.candidateName}
              </p>

              <p className="text-body-sm text-primary-fixed">
                {leadership.candidateRole}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {leadership.principles.map((principle, index) => (
          <div
            key={principle.title}
            className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4"
          >
            <div className="p-2.5 rounded-sm bg-surface-container-low text-secondary shrink-0">
              <Icon
                name={principleIcons[index]}
                className="text-[20px]"
              />
            </div>

            <div className="flex flex-col gap-1">
              <h4 className="text-headline-sm">
                {principle.title}
              </h4>

              <p className="text-body-sm text-on-surface-variant">
                {principle.description}
              </p>
            </div>
          </div>
        ))}

        <div className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4 md:col-span-2 lg:col-span-3">
          <div className="p-2.5 rounded-sm bg-secondary text-on-secondary shrink-0">
            <Icon name="assessment" className="text-[20px]" />
          </div>

          <div className="flex flex-col gap-1">
            <h4 className="text-headline-sm">
              {leadership.accountabilityTitle}
            </h4>

            <p className="text-body-sm text-on-surface-variant">
              {leadership.accountabilityDescription}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
