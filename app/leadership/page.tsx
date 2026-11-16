import Section from "@/components/Section";
import Icon from "@/components/Icon";

const principles = [
  ["hearing", "Year-Round Listening", "Direct engagement with students from every academic batch—from freshmen navigating their first IDE to graduating seniors seeking career links."],
  ["psychology", "Diverse Skill Inclusivity", "Respecting and accommodating different learning speeds, self-taught coders, hardware enthusiasts, designers, and algorithmic specialists."],
  ["account_tree", "Fair Delegation", "Empowering student sub-committees with clear authority and ownership rather than hoarding club execution at the executive table."],
  ["chevron_left", "Psychological Safety", "Fostering a welcoming environment where no question is labeled “too basic,” and making mistakes is treated as an essential engineering step."],
  ["sync_alt", "Transparent Calendars", "Publicizing event schedules, competition dates, and lab reservations weeks in advance so students can balance academic workloads."],
  ["account_balance_wallet", "Responsible Resource Use", "Maintaining an open documentation ledger of all club resources, event expenses, lab hardware kits, and equipment allocations."],
];

export default function Leadership() {
  return (
    <Section bg="low" eyebrow="// GOVERNANCE & ACCOUNTABILITY" title="Leadership Is About Listening and Delivering."
      text="Principles that guarantee every student has a voice, every committee functions without bias, and every taka is accounted for.">
      <div className="bg-primary text-on-primary p-8 md:p-12 rounded-xl shadow-md relative overflow-hidden">
        <Icon name="format_quote" className="absolute -right-8 -bottom-8 text-[160px] text-on-primary/5 select-none pointer-events-none" />
        <div className="flex flex-col gap-4 max-w-3xl relative z-10">
          <Icon name="format_quote" className="text-secondary-fixed text-[36px]" />
          <p className="text-headline-md font-normal">
            “I don’t believe leadership is about making the biggest promises. It’s about listening carefully, bringing people together, and consistently turning ideas into action.”
          </p>
          <div className="flex items-center gap-3 pt-2">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-bold font-mono">TP</div>
            <div>
              <p className="text-headline-sm font-semibold">Trisha Pal</p>
              <p className="text-body-sm text-primary-fixed">Candidate for Computer Club President</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {principles.map(([icon, title, text]) => (
          <div key={title} className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4">
            <div className="p-2.5 rounded-sm bg-surface-container-low text-secondary shrink-0"><Icon name={icon} className="text-[20px]" /></div>
            <div className="flex flex-col gap-1">
              <h4 className="text-headline-sm">{title}</h4>
              <p className="text-body-sm text-on-surface-variant">{text}</p>
            </div>
          </div>
        ))}
        <div className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4 md:col-span-2 lg:col-span-3">
          <div className="p-2.5 rounded-sm bg-secondary text-on-secondary shrink-0"><Icon name="assessment" className="text-[20px]" /></div>
          <div className="flex flex-col gap-1">
            <h4 className="text-headline-sm">Term Accountability & Impact Reports</h4>
            <p className="text-body-sm text-on-surface-variant">Publishing mid-term and end-of-term governance audits highlighting actual workshop attendance, budget utilization, contest performances, and community satisfaction metrics.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
