
import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LanguageProvider from "@/i18n/LanguageProvider";
import { defaultLanguage, languages, type Language } from "@/i18n/config";
export const instant = false;

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jb" });

export const metadata: Metadata = {
  title: "Trisha Pal | Candidate for Computer Club President",
  description: "Your Experience. Your Vision. Your Community.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const savedLanguage = cookieStore.get("language")?.value;

  const initialLanguage: Language =
    languages.find((language) => language === savedLanguage) ?? defaultLanguage;

  return (
    <html lang={initialLanguage} suppressHydrationWarning className={`${geist.variable} ${mono.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body>
        <LanguageProvider initialLanguage={initialLanguage}>
          <Header />
          <main className="w-full pt-16 min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
