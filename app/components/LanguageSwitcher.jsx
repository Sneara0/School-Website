
"use client";
import { useRouter, usePathname } from "next/navigation";

export default function LanguageSwitcher({ lang }) {
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = (newLang) => {
    const newPath = pathname.replace(/^\/(en|bn)/, `/${newLang}`);
    router.push(newPath);
  };

  return (
    <div className="flex gap-2">
      <button onClick={() => toggleLanguage("en")} className={lang === "en" ? "font-bold" : ""}>EN</button>
      <button onClick={() => toggleLanguage("bn")} className={lang === "bn" ? "font-bold" : ""}>BN</button>
    </div>
  );
}
