import Section from "@/components/Section";
import Icon from "@/components/Icon";

const links = [
  ["terminal", "Personal Engineering Portfolio", "https://trishapal.dev"],
  ["code_blocks", "GitHub Repositories", "https://github.com/TrishaPal2003"],
  ["query_stats", "Facebook Profile", "https://www.facebook.com/trisha.pal.7583992"],
  ["person_pin", "LinkedIn Professional Network", "https://www.linkedin.com/in/trisha-pal03/"],
];
const lbl = "font-mono text-label-caps text-on-surface-variant";

export default function Contact() {
  return (
    <Section bg="low" eyebrow="// GET IN TOUCH" title="Let’s Build Something Better Together."
      text="Have a question about my platform or want to collaborate on a campus initiative? Reach out directly.">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-7 bg-white p-8 rounded-xl shadow-sm flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold font-mono text-headline-sm shrink-0">TP</div>
            <div>
              <h3 className="text-headline-md font-semibold">Trisha Pal</h3>
              <p className="font-mono text-body-sm text-secondary">Candidate for Computer Club President</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 pt-2">
            <div className="flex items-start gap-3">
              <Icon name="mail" className="text-secondary text-[20px] mt-0.5" />
              <div className="flex flex-col">
                <span className={lbl}>CAMPAIGN EMAIL</span>
                <a href="mailto:contact@trishapal.dev" className="font-mono text-mono-code hover:text-secondary">trishapal160@gmail.com</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Icon name="language" className="text-secondary text-[20px] mt-0.5" />
              <div className="flex flex-col">
                <span className={lbl}>CAMPAIGN DISPATCH HUB</span>
                <a href="https://vote.trishapal.dev" target="_blank" rel="noopener noreferrer" className="font-mono text-mono-code text-secondary hover:underline flex items-center gap-1">
                  vote.trishapal.dev <Icon name="arrow_outward" className="text-[14px]" />
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Icon name="apartment" className="text-secondary text-[20px] mt-0.5" />
              <div className="flex flex-col">
                <span className={lbl}>CAMPUS HEADQUARTERS</span>
                <p className="text-body-sm">Department of Computer Science & Engineering, Academic Building</p>
              </div>
            </div>
          </div>
          <div className="mt-4 p-4 rounded-sm bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="font-mono text-mono-code text-on-surface-variant">OFFICIAL CAMPAIGN MOTTO:</span>
            <span className="font-mono text-label-caps text-secondary font-semibold">“Learn. Build. Connect.”</span>
          </div>
        </div>

        <div className="md:col-span-5 flex flex-col gap-4">
          <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col gap-4">
            <span className={`${lbl} uppercase`}>TECHNICAL LINKS & PORTFOLIO</span>
            {links.map(([icon, text, href]) => (
              <a key={text} href={href} target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-sm bg-surface-container-low hover:bg-surface-container transition-colors flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <Icon name={icon} className="text-secondary text-[20px]" />
                  <span className="text-body-sm font-medium">{text}</span>
                </div>
                <Icon name="arrow_outward" className="text-on-surface-variant group-hover:text-secondary text-[18px]" />
              </a>
            ))}
          </div>
          <div className="bg-primary text-on-primary p-6 rounded-xl shadow-md flex items-center justify-between gap-4">
            <div className="flex flex-col">
              <span className="font-mono text-label-caps text-primary-fixed">STUDENT ELECTION</span>
              <p className="text-headline-sm font-semibold">Remember to Cast Your Vote</p>
            </div>
            <a href="/" className="px-3.5 py-1.5 rounded-sm bg-secondary text-on-secondary font-mono text-label-caps shrink-0">BACK TO HOME ↑</a>
          </div>
        </div>
      </div>
    </Section>
  );
}
