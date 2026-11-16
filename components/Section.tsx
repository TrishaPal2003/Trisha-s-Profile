type Props = {
  eyebrow: string;
  title: string;
  text?: string;
  bg?: "white" | "low";
  children: React.ReactNode;
};

export default function Section({ eyebrow, title, text, bg = "white", children }: Props) {
  return (
    <section className={`w-full py-20 px-6 lg:px-12 min-h-[70vh] ${bg === "low" ? "bg-surface-container-low" : "bg-surface-container-lowest"}`}>
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-2 max-w-3xl">
          <span className="font-mono text-label-caps text-secondary tracking-widest uppercase">{eyebrow}</span>
          <h1 className="text-headline-lg text-on-surface">{title}</h1>
          {text && <p className="text-body-md text-on-surface-variant">{text}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
