
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "./Icon";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Header() {
  const path = usePathname();
  const { language, dictionary, setLanguage } = useLanguage();

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");

  const links = [
    [dictionary.navigation.home, "home"],
    [dictionary.navigation.journey, "my-journey"],
    [dictionary.navigation.experience, "experience"],
    [dictionary.navigation.vision, "my-vision"],
    [dictionary.navigation.leadership, "leadership"],
    [dictionary.navigation.contact, "contact"],
  ] as const;

  useEffect(() => {
    if (path !== "/") return;

    const update = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;

      if (atBottom) {
        setActive(links[links.length - 1][1]);
        return;
      }

      let current: string = "home";

      for (const [, id] of links) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          current = id;
        }
      }

      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });

    return () => window.removeEventListener("scroll", update);
  }, [path]);

  const isActive = (id: string) => path === "/" && active === id;

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/#home"
            className="text-headline-sm font-semibold uppercase tracking-tight"
          >
            TRISHA PAL
          </Link>

          <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full bg-surface-container-low text-on-surface-variant font-mono text-label-caps">
            {dictionary.navigation.candidate}
          </span>
        </div>

        <nav className="hidden xl:flex items-center gap-5">
          {links.map(([label, id]) => (
            <Link
              key={id}
              href={`/#${id}`}
              className={`text-body-sm transition-colors ${
                isActive(id)
                  ? "text-secondary font-medium"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="flex items-center gap-1 text-body-sm">
            <button
              onClick={() => setLanguage("bn")}
              aria-label="Switch to Bangla"
              aria-pressed={language === "bn"}
              className={`px-2 py-2 rounded-md transition-colors ${
                language === "bn"
                  ? "bg-surface-container-high font-semibold text-primary"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              বাংলা
            </button>

            <span className="text-outline-variant">|</span>

            <button
              onClick={() => setLanguage("en")}
              aria-label="Switch to English"
              aria-pressed={language === "en"}
              className={`px-2 py-2 rounded-md transition-colors ${
                language === "en"
                  ? "bg-surface-container-high font-semibold text-primary"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              EN
            </button>
          </div>

          <Link
            href="/poster"
            className="inline-flex items-center h-10 px-3 sm:px-4 rounded-4xl bg-primary text-on-primary text-body-sm hover:bg-secondary transition-colors"
          >
            {dictionary.navigation.poster}
          </Link>

          <button
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="xl:hidden w-10 h-10 flex items-center justify-center"
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="xl:hidden bg-white px-6 pb-4 flex flex-col gap-3">
          {links.map(([label, id]) => (
            <Link
              key={id}
              href={`/#${id}`}
              onClick={() => setOpen(false)}
              className={
                isActive(id)
                  ? "text-secondary font-medium"
                  : "text-on-surface-variant"
              }
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
