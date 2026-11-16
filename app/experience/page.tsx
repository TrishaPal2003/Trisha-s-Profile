import Section from "@/components/Section";
import Icon from "@/components/Icon";

const items = [
  { cat: "COMPETITIVE PROGRAMMING", meta: "2024 • ONSITE", title: "ICPC Dhaka Regional 2024", sub: "Team: MANATRI_CCNUST",
    text: "Represented the university at the ACM-ICPC Dhaka Regional Preliminary and Onsite rounds. Competed under strict 5-hour timeframes, developing high-pressure algorithmic analysis, dynamic programming implementations, and synchronized team decision-making.",
    label: "PROBLEM SOLVING FOCUS", value: "Logic Building • Number Theory", icon: "trending_up", tags: ["C++ STL", "Algorithms", "Team Synergy", "Codeforces / VJudge"] },
  { cat: "SOFTWARE ARCHITECTURE", meta: "PRODUCTION SYSTEMS", title: "Full-Stack Engineering & Web Platforms", sub: "End-to-End Application Delivery",
    text: "Built web applications using React, Django, and PostgreSQL. Designed RESTful API contracts, implemented authentication flows, and handled state management.",
    label: "STACK", value: "React • Django • PostgreSQL", icon: "layers", tags: ["React", "Django / DRF", "PostgreSQL", "REST APIs"] },
  { cat: "GLOBAL COLLABORATION", meta: "INTERNATIONAL TEAM", title: "Working With International Students", sub: "Cross-Border Project Teamwork",
  text: "Worked with students from [COUNTRIES] on one shared project, [PROJECT NAME]. My role: [YOUR ROLE]. We coordinated remotely across time zones and delivered [WHAT YOU DELIVERED].",
  label: "TEAM", value: "[N] Members • [N] Countries", icon: "public", tags: ["Remote Teamwork", "English Communication", "Git / GitHub", "Cross-Cultural"] },
  { cat: "CONTINUOUS LEARNING", meta: "IN PROGRESS", title: "AI / ML Coursework & Projects", sub: "[COURSE NAME], [PLATFORM / UNIVERSITY]",
  text: "Completed the assignments of my AI/ML course and built small projects to apply what I learned: [PROJECT 1] and [PROJECT 2]. I am using this to bring beginner-friendly AI/ML sessions to the club.",
  label: "FOCUS", value: "Python • [TOPICS, e.g. Regression, Classification]", icon: "psychology", tags: ["Python", "[LIBRARY, e.g. scikit-learn]", "Assignments", "Small Projects"] },
  { cat: "ROBOTICS", meta: "CODE BLACK • TEAM ATLAS", title: "Rescue Robot Project", sub: "Code Black, First Female Robotics Team [SCOPE]",
  text: "Member of Code Black, the first female robotics team IN BANGLADESH. I also worked with Team Atlas on the Rescue Robot project.",
  label: "PROJECT", value: "Rescue Robot", icon: "smart_toy", tags: ["Robotics", "Code Black", "Team Atlas"] },
];

export default function Experience() {
  return (
    <Section eyebrow="// PROVEN CAPABILITIES" title="Experience That Creates Opportunities"
      text="Grounding student leadership in real technical execution, teamwork, and hands-on community service.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((x, i) => (
  <div key={x.title} className={`bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col gap-6 group ${items.length % 2 === 1 && i === items.length - 1 ? "md:col-span-2" : ""}`}>
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full bg-surface-container-low text-secondary font-mono text-label-caps">{x.cat}</span>
              <span className="font-mono text-mono-code text-on-surface-variant">{x.meta}</span>
            </div>
            <div>
              <h3 className="text-headline-md group-hover:text-secondary transition-colors">{x.title}</h3>
              <p className="font-mono text-body-sm text-secondary mt-0.5">{x.sub}</p>
            </div>
            <p className="text-body-md text-on-surface-variant">{x.text}</p>
            <div className="bg-surface-container-low p-4 rounded-lg flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-mono text-label-caps text-on-surface-variant">{x.label}</span>
                <span className="font-mono text-mono-code font-semibold">{x.value}</span>
              </div>
              <Icon name={x.icon} className="text-secondary text-[24px]" />
            </div>
            <div className="flex flex-wrap gap-2">
              {x.tags.map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-mono text-label-caps">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
