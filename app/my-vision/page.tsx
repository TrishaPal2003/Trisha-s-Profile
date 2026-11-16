import Section from "@/components/Section";
import Icon from "@/components/Icon";

const pillars = [
  { n: "01", icon: "menu_book", title: "LEARN", bar: "bg-secondary", text: "Eliminate the intimidation barrier. Provide comprehensive, syllabus-complementary tracks for foundational and high-demand technologies.",
    items: ["Beginner-friendly C++, Python, and OOP labs", "Structured semester-long roadmaps with milestones", "Weekly peer tutoring circles for 1st & 2nd years", "Curated open-access resources repository"], target: "TARGET: 100% INCLUSIVE ONBOARDING" },
  { n: "02", icon: "construction", title: "BUILD", bar: "bg-primary", text: "Move beyond static lecture slides. Bridge theoretical homework assignments with real-world, deployable products and physical hardware builds.",
    items: ["Inter-year collaborative project teams", "48-Hour internal hackathons & build sprints", "Robotics, IoT and Arduino embedded lab showcases", "Production deployment and Git showcase portals"], target: "TARGET: REAL PORTFOLIOS BY YEAR 3" },
  { n: "03", icon: "hub", title: "CONNECT", bar: "bg-secondary", text: "Bridge campus life with the broader tech ecosystem. Harness alumni capital, inter-university networks, and hiring manager dialogues.",
    items: ["Monthly Alumni Mentorship Ask-Me-Anything roundtables", "Tech resume clinics & mock technical whiteboard interviews", "Inter-university collegiate contest exchanges", "Direct links with software company recruiting pipelines"], target: "TARGET: ACTIVE INDUSTRY READINESS" },
];

export default function MyVision() {
  return (
    <Section bg="low" eyebrow="// STRATEGIC DIRECTION" title="A Computer Club for Everyone."
      text="“I believe a strong Computer Club should not only support experienced programmers but also create clear, accessible opportunities for beginners to discover their potential.” Our blueprint rests on three pillars.">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((p) => (
          <div key={p.title} className="bg-white p-8 rounded-xl shadow-sm flex flex-col justify-between gap-8 relative overflow-hidden hover:shadow-md transition-shadow">
            <div className={`absolute top-0 inset-x-0 h-1.5 ${p.bar}`} />
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-sm bg-surface-container flex items-center justify-center text-secondary">
                  <Icon name={p.icon} className="text-[24px]" />
                </span>
                <span className="font-mono text-mono-code text-on-surface-variant font-semibold">{p.n} // PILLAR</span>
              </div>
              <h3 className="text-headline-md">{p.title}</h3>
              <p className="text-body-md text-on-surface-variant">{p.text}</p>
              <ul className="flex flex-col gap-3 pt-2">
                {p.items.map((i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Icon name="check_circle" className="text-secondary text-[18px] mt-0.5" />
                    <span className="text-body-sm font-medium">{i}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-3 bg-surface-container-low rounded-lg text-center font-mono text-mono-code text-on-surface-variant">{p.target}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
