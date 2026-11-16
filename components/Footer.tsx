import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="w-full bg-white shadow-[0_-1px_8px_rgba(0,0,0,0.02)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="text-headline-sm font-semibold uppercase tracking-tight">Trisha Pal</span>
            <span className="font-mono text-mono-code text-on-surface-variant">// Candidate for President</span>
          </div>
          <p className="text-body-sm text-on-surface-variant">University Computer Club Presidential Campaign</p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-1">
          <a href="https://trishapal.dev" target="_blank" rel="noopener noreferrer"
            className="font-mono text-mono-code text-secondary hover:underline flex items-center gap-1">
            trishapal.dev <Icon name="arrow_outward" className="text-[14px]" />
          </a>
          <p className="text-body-sm text-on-surface-variant">© 2026 Trisha Pal Campaign. Built for the student community.</p>
        </div>
      </div>
    </footer>
  );
}
