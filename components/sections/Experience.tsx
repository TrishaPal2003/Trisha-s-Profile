
import Section from "@/components/Section";
import Icon from "@/components/Icon";

const items = [
  {
    cat: "COMPETITIVE PROGRAMMING",
    meta: "2024 • ONSITE",
    title: "ICPC Dhaka Regional 2024",
    sub: "Team: MANATRI_CCNUST",
    text: "Represented the university in the ACM-ICPC Dhaka Regional competition. Experienced the intensity of competitive programming through algorithmic problem-solving, time-constrained challenges, and collaborative decision-making.",
    label: "CORE COMPETENCIES",
    value: "Algorithms • Logical Reasoning",
    icon: "trending_up",
    tags: ["C++ STL", "Data Structures", "Algorithms", "Team Collaboration"],
  },
  {
    cat: "SOFTWARE ENGINEERING",
    meta: "FULL-STACK DEVELOPMENT",
    title: "Full-Stack Engineering & Web Platforms",
    sub: "End-to-End Application Development",
    text: "Developed web applications using React, Django, and PostgreSQL. Worked across frontend and backend development, designing RESTful APIs, implementing authentication flows, and managing application data.",
    label: "TECHNOLOGY STACK",
    value: "React • Django • PostgreSQL",
    icon: "layers",
    tags: ["React", "Django / DRF", "PostgreSQL", "REST APIs"],
  },
  {
    cat: "GLOBAL COLLABORATION",
    meta: "INTERNATIONAL TEAM",
    title: "Cross-Border Software Collaboration",
    sub: "Narayanpur High School Project",
    text: "Collaborated remotely with an international development team on the Narayanpur High School project as a Full-Stack Developer. Contributed to frontend and backend development while coordinating tasks, sharing ideas, and working across geographical boundaries.",
    label: "TEAM STRUCTURE",
    value: "5 Members • 3 Countries",
    icon: "public",
    tags: ["Remote Collaboration", "Communication", "Git / GitHub", "Teamwork"],
  },
  {
    cat: "ARTIFICIAL INTELLIGENCE",
    meta: "IN PROGRESS",
    title: "AI / ML Coursework & Projects",
    sub: "Practical Learning & Exploration",
    text: "Exploring artificial intelligence and machine learning through structured coursework, practical assignments, and independent experimentation. Further details about completed projects and technologies will be added once verified.",
    label: "AREA OF INTEREST",
    value: "Python • Machine Learning",
    icon: "psychology",
    tags: ["Python", "AI / ML", "Practical Learning"],
  },
  {
    cat: "ROBOTICS & INNOVATION",
    meta: "CODE BLACK • TEAM ATLAS",
    title: "Rescue Robot Project",
    sub: "Collaborative Robotics Development",
    text: "Participated in Code Black, a female robotics team, and contributed to the Rescue Robot project with Team Atlas. Gained exposure to collaborative engineering, robotics, and practical problem-solving through team-based development.",
    label: "PROJECT",
    value: "Rescue Robot",
    icon: "smart_toy",
    tags: ["Robotics", "Code Black", "Team Atlas", "Engineering"],
  },
];

export default function Experience() {
  return (
    <Section
      eyebrow="// PROVEN CAPABILITIES"
      title="Experience That Creates Opportunities"
      text="Technical experience, collaborative problem-solving, and a commitment to creating opportunities for the wider computing community."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((x, i) => (
          <div
            key={x.title}
            className={`bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col gap-6 group ${
              items.length % 2 === 1 && i === items.length - 1
                ? "md:col-span-2"
                : ""
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="px-2.5 py-0.5 rounded-full bg-surface-container-low text-secondary font-mono text-label-caps">
                {x.cat}
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
                {x.sub}
              </p>
            </div>

            <p className="text-body-md text-on-surface-variant">
              {x.text}
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
                name={x.icon}
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
