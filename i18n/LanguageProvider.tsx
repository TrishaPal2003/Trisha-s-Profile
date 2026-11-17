"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

import { dictionaries, defaultLanguage, type Language } from "./config";

type LanguageContextType = {
  language: Language;
  dictionary: (typeof dictionaries)[Language];
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

type LanguageProviderProps = {
  children: ReactNode;
  initialLanguage?: Language;
};

export default function LanguageProvider({
  children,
  initialLanguage = defaultLanguage,
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(initialLanguage);


  const changeLanguage = (nextLanguage: Language) => {
  setLanguage(nextLanguage);

  document.cookie = `language=${nextLanguage}; path=/; max-age=31536000; SameSite=Lax`;
};

  return (
    <LanguageContext.Provider
      value={{
        language,
        dictionary: dictionaries[language],
        setLanguage: changeLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}


export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}