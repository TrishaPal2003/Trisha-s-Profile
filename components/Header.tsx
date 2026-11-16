"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Icon from "./Icon";

const links = [
  ["Home", "/"],
  ["My Journey", "/my-journey"],
  ["Experience", "/experience"],
  ["My Vision", "/my-vision"],
  ["Leadership", "/leadership"],
  ["Contact", "/contact"],
];

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-16 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 shrink-0">
          <Link href="/" className="text-headline-sm font-semibold uppercase tracking-tight">TRISHA PAL</Link>
          <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full bg-surface-container-low text-on-surface-variant font-mono text-label-caps">
            Computer Club President Candidate
          </span>
        </div>
        <nav className="hidden xl:flex items-center gap-5">
          {links.map(([label, href]) => (
            <Link key={href} href={href}
              className={`text-body-sm transition-colors ${path === href ? "text-secondary font-medium" : "text-on-surface-variant hover:text-on-surface"}`}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3 shrink-0">
          <Link href="/poster" className="inline-flex items-center h-10 px-4 rounded-4xl bg-primary text-on-primary text-body-sm hover:bg-secondary transition-colors">
            Poster
          </Link>
          <button aria-label="Menu" onClick={() => setOpen(!open)} className="xl:hidden w-10 h-10 flex items-center justify-center">
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>
      {open && (
        <nav className="xl:hidden bg-white px-6 pb-4 flex flex-col gap-3">
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              className={path === href ? "text-secondary font-medium" : "text-on-surface-variant"}>
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
