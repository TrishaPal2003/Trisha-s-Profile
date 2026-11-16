import Section from "@/components/Section";

const list = [
  ["SEMESTER 1 CADENCE", "Beginner-Friendly Programming Workshops", "Weekly lab hands-ons focusing on C++, Python, control flow, functions, memory pointers, and problem reduction. Designed with zero assumed prerequisites.", "12 Guided Sessions"],
  ["YEAR-ROUND TRACK", "Modern Full-Stack Development Tracks", "Step-by-step tracks teaching modern web development: React, Next.js, Django, APIs, database integration, and cloud hosting. Every participant ships a live portfolio application.", "Live Web Portfolios"],
  ["BI-WEEKLY CONTESTS", "Competitive Programming Bootcamps", "Bi-weekly mock ICPC scrimmages, curated problem sets, editorial write-ups, and algorithmic masterclasses to build our institution's regional rank.", "ICPC Regional Roster"],
  ["SEMESTER INCUBATOR", "Collaborative Project Incubator", "Pairing junior students with experienced upperclassmen to create open-source software, campus utility apps, and contest tools.", "10 Open-Source Repos"],
  ["CAREER ACCELERATION", "Tech Career & Mock Interview Series", "Resume audits, GitHub profile optimization, and live technical mock interview panels (DSA + System Design).", "30+ Mock Audits"],
  ["HARDWARE LABS", "Robotics & IoT Innovation Lab", "Hands-on physical computing sessions with Arduino, ESP32, sensors, and robotics kits.", "Annual Hardware Expo"],
];
const alumni = [["SPEAKER SESSIONS", "Quarterly Industry Keynotes"], ["1-ON-1 SESSIONS", "Senior Career Office Hours"], ["HIRING BRIDGES", "Direct Referral Pipelines"]];

export default function Initiatives() {
  return (
    <Section eyebrow="// ACTION PLAN" title="Turning Ideas Into Action"
      text="Campaigns are evaluated on concrete deliverables. Here is the semester-calibrated 7-initiative program, in partnership with department faculty.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map(([tag, title, text, deliverable], i) => (
          <div key={title} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-sm bg-surface-container flex items-center justify-center font-mono text-mono-code font-bold">0{i + 1}</span>
                <span className="px-2 py-0.5 rounded-sm bg-surface-container-low text-secondary font-mono text-label-caps">{tag}</span>
              </div>
              <h3 className="text-headline-sm">{title}</h3>
              <p className="text-body-sm text-on-surface-variant">{text}</p>
            </div>
            <div className="bg-surface-container-low p-3 rounded-lg flex items-center justify-between">
              <span className="font-mono text-label-caps text-on-surface-variant">DELIVERABLE</span>
              <span className="font-mono text-mono-code font-semibold">{deliverable}</span>
            </div>
          </div>
        ))}
        <div className="bg-white p-6 rounded-xl shadow-sm md:col-span-2 lg:col-span-3 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="w-8 h-8 rounded-sm bg-surface-container flex items-center justify-center font-mono text-mono-code font-bold">07</span>
              <div>
                <h3 className="text-headline-sm">Alumni Connect & Global Tech Networking</h3>
                <p className="text-body-sm text-on-surface-variant">Connecting current students with graduated software engineers.</p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-sm bg-surface-container-low text-secondary font-mono text-label-caps shrink-0">ALUMNI ROUNDTABLES</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {alumni.map(([a, b]) => (
              <div key={a} className="bg-surface-container-low p-3 rounded-lg">
                <p className="font-mono text-label-caps text-on-surface-variant">{a}</p>
                <p className="text-body-sm font-semibold">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
