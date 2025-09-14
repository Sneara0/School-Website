import translations from "../i18n/translations";

export default function Home({ params }) {
  const { lang } = params;

  // Fallback to English if lang is invalid
  const t = translations[lang] ? translations[lang].home : translations["en"].home;

  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold">{t.welcome}</h1>
      <p className="mt-4">
        {lang === "bn" ? "এটি বাংলা হোম পেজ।" : "This is English Home Page."}
      </p>
    </div>
  );
}
